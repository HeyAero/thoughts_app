// Displaying a post
async function loadPost(hash) {
    postData = await getPost(hash);
    document.getElementById('postTitle').textContent = postData.title;
    document.getElementById('postName').textContent = postData.name;
    document.getElementById('postDate').textContent = postData.date;
    document.getElementById('postBody').textContent = postData.body;
}