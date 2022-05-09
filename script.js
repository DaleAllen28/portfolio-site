function showImage(imgs) {
    /*Varibale accesing where the image will be displayed using DOM*/
    let displayImg = document.getElementById("gallery_img_display");
    /*Set src of displayImg variable to the same as the clicked images(imgs) src which is passed in as an argument*/
    displayImg.src = imgs.src;

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
            github: "https://github.com/DaleAllen28/digitalclock",
            deploy: "https://fabulous-gingersnap-508693.netlify.app/"
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
            github: "https://github.com/DaleAllen28/stopwatch",
            deploy: "https://verdant-bunny-8047eb.netlify.app/"
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
    let projLink = document.getElementById("projLink");

    let keyCont = document.getElementById("keyCont");

    let jsKey = document.getElementById("key1");
    let htmlKey = document.getElementById("key2");
    let cssKey = document.getElementById("key3");

    let selectedProj = el.getAttribute("id");

    let description = document.getElementById("description")

    switch (selectedProj)
    {
        case "tasklist":
            /*Show hidden main projects display on click*/
            description.style.display = "block";
            dispBox.style.display = "block";

            dispBox.src = el.src; /*Change image src to that of the elected proj*/
            projTitle.innerHTML = projects.tasklist.name; /*Set title as particular project name from project object*/
            projDescription.innerHTML = projects.tasklist.description;
            langGrid.style.gridTemplateColumns = projects.tasklist.percentages.JS + projects.tasklist.percentages.HTML + projects.tasklist.percentages.CSS;

            /*Change the html of each language key and add the percentage from the project object*/
            $(document).ready(function(){
                $("#key1").html(" Javascript " + projects.tasklist.percentages.JS);
                $("#key2").html(" HTML " + projects.tasklist.percentages.HTML);
                $("#key3").html(" CSS " + projects.tasklist.percentages.CSS);

                let deployLink = projects.tasklist.links.deploy;
                let gitLink = projects.tasklist.links.github;


                if(deployLink){
                    $("#deployLink").html("Deploy: " + deployLink);
                    $("#deployLink").attr({
                        href: deployLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                } else {
                    $("#deployLink").html("");
                    $("#deployLink").removeAttr("href target rel");
                }

                if(gitLink){
                    $("#gitLink").html("<br>" + "Github: " + gitLink);
                    $("#gitLink").attr({
                        href: gitLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                }else {
                    $("#gitLink").html("");
                    $("#gitLink").removeAttr("href target rel");
                }
            });

            break;
        case "digitalclock":
            /*Show hidden main projects display on click*/
            description.style.display = "block";
            dispBox.style.display = "block";

            dispBox.src = el.src;
            projTitle.innerHTML = projects.digitalclock.name;
            projDescription.innerHTML = projects.digitalclock.description;
            langGrid.style.gridTemplateColumns = projects.digitalclock.percentages.JS + projects.digitalclock.percentages.HTML + projects.digitalclock.percentages.CSS;
            $(document).ready(function(){
                $("#key1").html( " Javascript " + projects.digitalclock.percentages.JS);
                $("#key2").html(" HTML " + projects.digitalclock.percentages.HTML);
                $("#key3").html(" CSS " + projects.digitalclock.percentages.CSS);

                let deployLink = projects.digitalclock.links.deploy;
                let gitLink = projects.digitalclock.links.github;

                
                if(deployLink){
                    $("#deployLink").html("Deploy:" + deployLink);
                    $("#deployLink").attr({
                        href: deployLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                } else {
                    $("#deployLink").html("");
                    $("#deployLink").removeAttr("href target rel");
                }

                if(gitLink){
                    $("#gitLink").html("<br>" + "Github: " + gitLink);
                    $("#gitLink").attr({
                        href: gitLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                }else {
                    $("#gitLink").html("");
                    $("#gitLink").removeAttr("href target rel");
                }
            });       
            break;
        case "stopwatch":
            /*Show hidden main projects display on click*/
            description.style.display = "block";
            dispBox.style.display = "block";
            dispBox.src = el.src;
            projTitle.innerHTML = projects.stopwatch.name;
            projDescription.innerHTML = projects.stopwatch.description;
            langGrid.style.gridTemplateColumns = projects.stopwatch.percentages.JS + projects.stopwatch.percentages.HTML + projects.stopwatch.percentages.CSS;
            $(document).ready(function(){
                $("#key1").html(" Javascript " + projects.stopwatch.percentages.JS);
                $("#key2").html(" HTML " + projects.stopwatch.percentages.HTML);
                $("#key3").html(" CSS " + projects.stopwatch.percentages.CSS);

                let deployLink = projects.stopwatch.links.deploy;
                let gitLink = projects.stopwatch.links.github;

                if(deployLink){
                    $("#deployLink").html("Deploy: " + deployLink);
                    $("#deployLink").attr({
                        href: deployLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                } else {
                    $("#deployLink").html("");
                    $("#deployLink").removeAttr("href target rel");
                }

                if(gitLink){
                    $("#gitLink").html("<br>" + "Github: " + gitLink);
                    $("#gitLink").attr({
                        href: gitLink,
                        target:"_blank",
                        rel: "noreferrer noopener"
                    });
                }else {
                    $("#gitLink").html("");
                    $("#gitLink").removeAttr("href target rel");
                }
            });
            break;
    }
};
