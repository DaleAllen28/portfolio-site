/*let largeDisplay = document.querySelector(".gallery_img_main");*/
/*const smallImage = document.querySelectorAll(".gallery_img");*/

/*smallImage.addEventListener("click", imageChooser);

const imageChooser = () => {
    const newImage = smallImage.src;

    certDisplay = newImage.src;
}*/

/*Array.from(document.querySelectorAll(".gallery_img")).forEach(item => {
    item.addEventListener("click", event => {
        largeDisplay.src = event.target.src;
    })
});*/

function showImage(imgs) {
    /*Varibale accesing where the image will be displayed using DOM*/
    let displayImg = document.getElementById("gallery_img_display");
    /*Set src of displayImg variable to the same as the clicked images(imgs) src which is passed in as an argument*/
    displayImg.src = imgs.src;

    /*let selectedImg = imgs;*/

    /*if(displayImg.src === selectedImg.src) {
        selectedImg.classList.add('selectedImg')
    } else {
        return
    };*/
}

/*OBJECT FOR PORTFOLIO PROJECT INFORMATION*/
const projects = {
    tasklist: {
        id: "tasklist",
        name: "To-do List",
        languages: ["HTML","JS","CSS"],
        links: {
            deploy: "https://cheery-crepe-6a2055.netlify.app",
            github: "https://github.com/DaleAllen28/To-do-List"
        },
        description: "A basic to do list with date/time, completion, edit and delete functionality",
        percentages: {
            HTML: "9.5%",
            JS: "55.9%",
            CSS: "34.6%"
        }
    },
    digitalclock: {
        id: "digitalclock",
        name: "Digital Clock",
        languages: ["HTML", "JS", "CSS"],
        links: {
            github: "https://github.com/DaleAllen28/digitalclock"
        },
        description: "Simple digital clock",
        percentages: {
            HTML: "18.1%",
            JS: "65.9%",
            CSS: "16.0%"
        }
    },
    stopwatch: {
        id: "stopwatch",
        name: "Stopwatch",
        languages: ["HTML","JS", "CSS"],
        links: {
            github: "https://github.com/DaleAllen28/stopwatch"
        },
        description: "A simple stopwatch with minute display and basic lap functionality.",
        percentages: {
            HTML: "15.5%",
            JS: "67.1%",
            CSS: "17.4%"
        }
    } 
};

/*FUNCTION TO DISPLAY PROJECT AND EDIT TEXT. !NOT WORKING! Try getAttribute for id*/
const displayProject = (el) => {
    let dispBox = document.getElementById("displayBox");
    let projTitle = document.getElementById("pro_title");
    let projDescription = document.getElementById("pro_desc");
    let langGrid = document.getElementById("langGrid");

    let keyCont = document.getElementById("keyCont");

    let jsKey = document.getElementById("key1");
    let htmlKey = document.getElementById("key2");
    let cssKey = document.getElementById("key3");

    let selectedProj = el.getAttribute("id");
/*
    if(selectedProj == projects.tasklist.id) {
        dispBox.src = el.src;
        projTitle.innerHTML = projects.tasklist.name;
        projDescription.innerHTML = projects.tasklist.description;
    } else if (selectedProj == projects.digitalclock.id) {
        dispBox.src = el.src;
        projTitle.innerHTML = projects.digitalclock.name;
        projDescription.innerHTML = projects.digitalclock.description;
    } else if (selectedProj == projects.stopwatch.id){
        dispBox.src = el.src;
        projTitle.innerHTML = projects.stopwatch.name;
        projDescription.innerHTML = projects.stopwatch.description;
    } */

    switch (selectedProj)
    {
        case "tasklist":
            dispBox.src = el.src;
            projTitle.innerHTML = projects.tasklist.name;
            projDescription.innerHTML = projects.tasklist.description;
            langGrid.style.gridTemplateColumns = projects.tasklist.percentages.JS + projects.tasklist.percentages.HTML + projects.tasklist.percentages.CSS;
            /*jsKey.innerHTML = " " + projects.tasklist.percentages.JS + jsKey.innerHTML;
            htmlKey.innerHTML = " " + projects.tasklist.percentages.HTML + htmlKey.innerHTML;
            cssKey.innerHTML = " " + projects.tasklist.percentages.CSS + cssKey.innerHTML;*/

            $(document).ready(function(){
                $("#key1").html(" Javascript " + projects.tasklist.percentages.JS + " ");
                $("#key2").html(" HTML " + projects.tasklist.percentages.HTML + " ");
                $("#key3").html(" CSS " + projects.tasklist.percentages.CSS + " ");
            });       
            break;
        case "digitalclock":
            dispBox.src = el.src;
            projTitle.innerHTML = projects.digitalclock.name;
            projDescription.innerHTML = projects.digitalclock.description;
            langGrid.style.gridTemplateColumns = projects.digitalclock.percentages.JS + projects.digitalclock.percentages.HTML + projects.digitalclock.percentages.CSS;
            $(document).ready(function(){
                $("#key1").html(projects.digitalclock.percentages.JS + " Javascript");
                $("#key2").html(projects.digitalclock.percentages.HTML + " HTML");
                $("#key3").html(projects.digitalclock.percentages.CSS + " CSS");
            });       
            break;
        case "stopwatch":
            dispBox.src = el.src;
            projTitle.innerHTML = projects.stopwatch.name;
            projDescription.innerHTML = projects.stopwatch.description;
            langGrid.style.gridTemplateColumns = projects.stopwatch.percentages.JS + projects.stopwatch.percentages.HTML + projects.stopwatch.percentages.CSS;
            $(document).ready(function(){
                $("#key1").html(projects.stopwatch.percentages.JS + " Javascript");
                $("#key2").html(projects.stopwatch.percentages.HTML + " HTML");
                $("#key3").html(projects.stopwatch.percentages.CSS + " CSS");
            });
            break;
    }
};
