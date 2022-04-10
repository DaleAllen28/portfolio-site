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
            HTML: 9.5,
            JS: 55.9,
            CSS: 34.6
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
            HTML: 18.1,
            JS: 65.9,
            CSS: 16.0
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
            HTML: 15.5,
            JS: 67.1,
            CSS: 17.4
        }
    } 
};

/*FUNCTION TO DISPLAY PROJECT AND EDIT TEXT. !NOT WORKING! Try getAttribute for id*/
const displayProject = (el) => {
    let dispBox = document.getElementById("displayBox");
    let projTitle = document.getElementById("pro_title");
    let projDescription = document.getElementById("pro_desc");

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
            break;
        case "digitalclock":
            dispBox.src = el.src;
            projTitle.innerHTML = projects.digitalclock.name;
            projDescription.innerHTML = projects.digitalclock.description;
            break;
        case "stopwatch":
            dispBox.src = el.src;
            projTitle.innerHTML = projects.stopwatch.name;
            projDescription.innerHTML = projects.stopwatch.description;
            break;
    }
};
