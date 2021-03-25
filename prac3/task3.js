var number = 0;

function mouseCount()
{
    let text = document.getElementById("mcount");
    text.innerHTML = ++number; 
}

let items = [];

function post()
{

    
    let time = document.getElementsByName("quantity")[0].value;
    for(let i = 0; i < time; i++)
    {
        let createTime = document.createElement("P");
        let createPost = document.createElement("P");

        createTime.setAttribute("class", "post-time");
        createPost.setAttribute("class", "post-content");

        let post = document.getElementById("posts");

        createTime.innerHTML = Date();
        //console.log(text);
        createPost.innerHTML = document.getElementsByClassName("innertext")[0].value;

        createTime.style.color = "grey";
        createTime.style.fontWeight = "bold";

        post.appendChild(createTime);
        post.appendChild(createPost);

        //task3-4:

        let blue = document.getElementsByName("color")[0];
        if(blue.checked == true)
        createPost.style.color = "blue";

        let red = document.getElementsByName("color")[1];
        if(red.checked == true)
        createPost.style.color = "red";

        //task3-6:

        let bold = document.getElementsByName("style")[0];
        if(bold.checked == true)
        createPost.style.fontWeight = "bold";

        let italic_style = document.getElementsByName("style")[1];
        if(italic_style.checked == true)
        createPost.style.fontStyle = "italic";

        //slider/range input change
        items.push(post);
    }

    let slider = document.getElementsByName("visible")[0];
    
    for(let i = 0; i < items.length; i++)
    {

    }
        

}

function Menu()
{
    let main = document.getElementById("main");
    let menu = document.getElementById("menu");
    
    if(menu.style.display === "none")
    {
        main.style.display = "none";
        menu.style.display = "block";
    }
    else
    {
        menu.style.display = "none";
        main.style.display = "block";
    }
}

function changeBackColor()
{
    let color = document.getElementById("BackColor").value;
    console.log(color);
    document.body.style.backgroundColor = color;
}