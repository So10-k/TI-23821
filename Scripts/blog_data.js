let lastUpdate = "3/27/2025 (v1.5.0)"
let blog_data = [
    {
        title: "New Website",
        date: "March 27th, 2025",
        writtenBy: "Sam",
        id: "new-site",
        description: "Welcome to the new website.",
        text: "We have a new website, a new logo, and new games!",
    },
]
let log_data = [
    {
        title: "Update Log of v1.5.0",
        date: "March 27th, 2025",
        writtenBy: "Sam",
        id: "v1-5-0",
        description: "This update includes badges, hot keys, redesigned game view, and other changes.",
        text: "This update includes badges, hot keys, redesigned game view, and other changes. Read below for more details:<br><br><h3>Badges</h3><ul><li>5 new badges for your profile!</li><li class='whitecircle' type='circle'>Sorry if they look bad, I’m bad at pixel art lol</li><li>These are attainable by completing different achievements</li><li class='whitecircle' type='circle'>Purposely made some hard to get</li></ul><br><h3>Hot Keys</h3><ul><li>Hot keys allow you to navigate the site much easier</li><li class='whitecircle' type='circle'>Can be disabled in settings if you don’t want them</li><li>View using <b>Shift + /</b></li></ul><br><h3>Other</h3><ul><li>Redesigned the game view</li><li class='whitecircle' type='circle'>Now includes supported devices</li><li class='whitecircle' type='circle'>Can now press esc to exit the menu and enter to play</li><li>Darker dark mode for users who prefer very dark colors</li><li>Announcements now include the date they were announced</li><li>URL hashes added to blogs just like games</li><li>6 new achievements and 1 new title (including the ones for badges)</li></ul><br><h3>Resolved Issues</h3><ul><li>Coming back from afk would not hide one of the alerts</li><li>Favorited games shadow does not use the theme color in dark mode</li><li>Links un-clickable on the blogs page</li><li>Numbers in the profile include decimals sometimes</li></ul><br><br>Check out my <a class='underline_text colored' onclick='window.open(`https://trello.com/b/PUXmNYGm/syces-game-shack`, `_blank`)'><b>Trello Board</b></a> with a list of bugs and planned upcoming features."
    },
    // {
    //     title: "",
    //     date: "",
    //     writtenBy: "",
    //     id: "",
    //     text: "",
    // },
]

let count = 0
blog_data.forEach(blog => {
    let btn = document.getElementsByClassName(`blogReadBtn`)
    let title = document.getElementsByClassName(`blogTitle`)
    let date = document.getElementsByClassName(`blogDate`)
    let description = document.getElementsByClassName(`blogDescription`)

    btn[count].onclick = function(){ viewBlog(blog.id) }
    title[count].innerText = blog.title
    date[count].innerHTML = `Written by ${blog.writtenBy}<br>On ${blog.date}`
    description[count].innerText = blog.description

    count++;
})

let count2 = 0
log_data.forEach(blog => {
    let btn = document.getElementsByClassName(`logReadBtn`)
    let title = document.getElementsByClassName(`logTitle`)
    let date = document.getElementsByClassName(`logDate`)
    let description = document.getElementsByClassName(`logDescription`)

    btn[count2].onclick = function(){ viewBlog(blog.id, true) }
    title[count2].innerText = blog.title
    date[count2].innerHTML = `Written by ${blog.writtenBy}<br>On ${blog.date}`
    description[count2].innerText = blog.description

    count2++;
})

var current = "Blog"
function viewBlog(blogID, log){
    let data = blog_data
    if(log === true) data = log_data
    for(let i = 0; i < data.length; i++){
        if(data[i].id === blogID){
            document.getElementById("blogPage").style.display = "block"
            document.getElementById("blog").style.display = "none"
            document.getElementById("updateLogs").style.display = "none"
            window.scrollTo(0, 0)
            document.getElementById("blog_title").innerText = data[i].title
            document.getElementById("blog_date").innerHTML = `Written by ${data[i].writtenBy}<br>On ${data[i].date}`

            document.getElementById("blog_text").innerHTML = data[i].text
            window.location.hash = `#${data[i].id}`
            if(log === true){ current = "Log" } else { current = "Blog" };

            var viewedBlogs = localStorage.getItem("viewedBlogs") || null
            if(!viewedBlogs){
                viewedBlogs = `${data[i].id} || `
                localStorage.setItem("viewedBlogs", viewedBlogs)
                return;
            }
            if(!viewedBlogs.includes(`|| ${data[i].id}`) && !viewedBlogs.includes(`${data[i].id} ||`)){
                viewedBlogs = viewedBlogs + `${data[i].id} || `
                localStorage.setItem("viewedBlogs", viewedBlogs)
            }
            checkCompletion();
        }
    }
}

function blog(info){
    if(current === "Log" && !info){
        document.getElementById('blogPage').style.display = 'none'; document.getElementById('updateLogs').style.display = 'block'; window.location.hash = `#updatelogs`
    } else {
        document.getElementById('blogPage').style.display = 'none'; document.getElementById('updateLogs').style.display = 'none'; document.getElementById('blog').style.display = 'block'; window.location.hash = `#`
    }
}

function searchBlog(){
    let input = document.getElementById("searchbarBlog").value
    input = input.toLowerCase()
    let x = document.getElementsByClassName("blogBox")

    if(input === ""){
        document.getElementsByClassName("updateLogsBtn")[0].style.display = "block"
    } else {
        document.getElementsByClassName("updateLogsBtn")[0].style.display = "none"
    }

    if(input <= 0 || input === ""){
        for(o = 0; o < x.length; o++){ x[i].style.display = "inline-table" }
        return;
    }

    for(i = 0; i < x.length; i++){
        if(!blog_data[i].title.toLowerCase().includes(input)){
            x[i].style.display = "none";
        } else {
            x[i].style.display = "inline-table"
        }
    }
}

var oldUrl = window.location.herf;
window.addEventListener("hashchange", function(){
    checkHash();
})

function checkHash(){
    var newHash = window.location.hash
    if(newHash === "#updatelogs"){
        document.getElementById('blogPage').style.display = 'none'; 
        document.getElementById('updateLogs').style.display = 'block';
    }
    if(newHash === "#" || newHash === ""){
        blog(true);
    } else {
        blog_data.forEach(blog => { 
            if(blog.id === newHash.slice(1)) return viewBlog(newHash.slice(1));
        })
        log_data.forEach(log => { 
            if(log.id === newHash.slice(1)) return viewBlog(newHash.slice(1), true);
        })
    }
}
