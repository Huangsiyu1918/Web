var number = 0;

function mouseCount()
{
    let text = document.getElementById("mcount");
    text.innerHTML = ++number; 
}

function post()
{
    // let d = document.createElement("DIV");
    // d.setAttribute("class", "whole-post");

    let temp1 = document.createElement("P");
    temp1.setAttribute("class", "post-time");
    temp1.innerHTML = Date();
    
    let text = document.getElementsByClassName("post-content")[0].value;
    let temp = document.createElement("P");
    temp.setAttribute("class", "post-content");
    temp.innerHTML = text;

    // d.appendChild(temp1);
    // d.appendChild(temp);
    let post = document.getElementById("posts");
    post.appendChild(temp1);
    post.appendChild(temp);
}