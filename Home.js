fetch("https://www.reddit.com/.json")
    .then(result => result.json())
    .then(result => {
        const table = document.getElementById("PostList")
        for (const i in result.data.children)
        {
            const newRow = table.insertRow();
            newRow.innerHTML = PostListTemplate(result.data.children[i].data)
        }
    })