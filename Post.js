const queries = new URLSearchParams(window.location.search)
const id = queries.get("id")

fetch(`https://www.reddit.com/${id}.json`)
    .then(result => result.json())
    .then(result => {
        const div = document.getElementById("Post")
        const { title, created_utc, author, post_hint, subreddit_name_prefixed, ups, selftext, url, media  } = result[0].data.children[0].data
        let video = media?.reddit_video.hls_url
        document.title = title
        div.innerHTML = `
        <h2>${title}</h2>
        <h4>${subreddit_name_prefixed}</h4>
        <h4>${author}</h4>
        <p>${ups} Upvotes</p>
        <p>${selftext}</p>`
        + (post_hint === "link" ? `<a href="${url}">${url}</a>` : "")
        + (media ? `<video id="video"><source src=\"${media?.reddit_video.hls_url}\"></video>` : "")
        + (post_hint === "image" ? `<img src="${url}" alt="Reddit doesn't have alt text"></img>` : "")

        const videoPlayer = document.getElementById("video")
        if (videoPlayer) videoPlayer.setAttribute("controls", "controls")

        const table = document.getElementById("Comments")
        for (const i in result[1].data.children)
        {
            const children = result[1].data.children
            if (children[i] === children[children.length - 1])
            {
                    const newRow = table.insertRow();
                    newRow.innerHTML = `<p>... and ${children[i].data.count} more</p`
            }
            else {
                    const newRow = table.insertRow();
                    newRow.innerHTML = CommentsTemplate(children[i].data)
            }
        }
    })