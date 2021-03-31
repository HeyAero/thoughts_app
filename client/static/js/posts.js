// Displaying a post
async function loadPost(hash) {
    document.getElementById('postName').textContent = "";
    document.getElementById('postTitle').textContent = "";
    document.getElementById('postDate').textContent = "";
    document.getElementById('postBody').textContent = "";
    let postData = await getPost(hash);
    console.log(postData);
    if (postData.err) {
        document.getElementById('postName').textContent = "Error post not found";
    } else {
        document.getElementById('postTitle').textContent = postData.title;
        document.getElementById('postName').textContent = postData.name;
        document.getElementById('postDate').textContent = postData.date;
        document.getElementById('postBody').textContent = postData.body;
    }
}