function PostListTemplate(data) {
    const {selftext, id, title, post_hint, thumbnail} = data;
    return `<a href="view.html?id=${id}">${title}</a>
            <p>${selftext}</p>
            <img src="${thumbnail}" alt=""/>
            <p>${HintToString(post_hint)}</p>`
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