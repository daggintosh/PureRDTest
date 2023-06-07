function PostListTemplate(data) {
    const {selftext, created_utc, id, title, post_hint, thumbnail} = data;
    return `<a href="view.html?id=${id}">${title}</a>
            <p>${selftext}</p>
            <img src="${thumbnail}" alt=""/>
            <p>${HintToString(post_hint)}</p>`
}

function CommentsTemplate(data) {
    const { author, created_utc, body, ups } = data // *replies* can be added on and capped by *depth*
    var creationDate = new Date(0)
    creationDate.setUTCSeconds(created_utc)
    return `<h4>${author}</h4>
            <p>${creationDate.toLocaleDateString()} at ${creationDate.toLocaleTimeString()}</p>
            <p>${body}</p>
            <p>${ups} Upvotes</p>`
}

function HintToString(hint) {
    switch (hint) {
        case "hosted:video":
            return "Video"
        case "link":
            return "Article"
        default:
            return "Text"
        case "image":
            return "Image"
    }
}