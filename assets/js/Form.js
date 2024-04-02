
const usernameinput = document.getElementById("username");
const titleinput = document.getElementById("title");
const contentinput = document.getElementById("content");

function createAndRendorBlog(e) {
    e.preventDefault()

    const blog = {
        username: usernameinput.value,
        title:titleinput.value,
        content: contentinput.value,

    };
   const blogs = JSON.parse(localStorage.getItem
    ('blogs'))|| []
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    window.location.replace("/blog.html");
}
document.querySelector('button').addEventListener('click',createAndRendorBlog)



