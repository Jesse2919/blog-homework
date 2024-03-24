
const blogsection = document.getElementById("stuff");
const titleinput = document.getElementById("title");
const contentinput = document.getElementById("content");
const blogs = JSON.parse(localStorage.getItem("blogs"));

for (let i = 0; i < blogs.length; i++) {
 const div = document.createElement('div')
blogsection.appendChild(div)
const h2 = document.createElement('h2')
h2.textContent = blogs[i].title
div.appendChild(h2)
const h3 = document.createElement('h3')
h3.textContent = blogs[i].username
div.appendChild(h3)
const p = document.createElement('p')
p.textContent = blogs[i].content
div.appendChild(p)
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 document.querySelector('#clicker').addEventListener('click',function(){
    window.location.replace('/')
 })