const queries = new URLSearchParams(window.location.search)
const id = queries.get("id")

fetch(`https://www.reddit.com/${id}.json`)
    .then(result => result.json())
    .then(result => {
        const div = document.getElementById("Post")
        const { title, subreddit_name_prefixed, ups, selftext, url, media  } = result[0].data.children[0].data
        var video = media?.reddit_video.hls_url
        document.title = title
        div.innerHTML = `
        <h2>${title}</h2>
        <h4>${subreddit_name_prefixed}</h4>
        <p>${ups} Upvotes</p>
        <p>${selftext}</p>
        <a href="${url}">${url}</a>
        <img src="${url}"></img>
        <video><source src=\"${media?.reddit_video.hls_url}\"></video>
        `
        // const table = document.getElementById("Comments")
        // for (const i in result[1].data.children)
        // {
        //     const newRow = table.insertRow();
        //     newRow.innerHTML = CommentsTemplate(result.data.children[i].data)
        // }
    })