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