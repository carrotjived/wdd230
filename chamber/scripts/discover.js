const mainNav = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const currentDate = new Date();
const lastModified = new Date(document.lastModified);




document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const discoverHeadings = document.querySelectorAll('.discover-headings');
const modeButton = document.querySelector('.slider');
const image = document.querySelector('.logo');


let isFirstImage = false;
modeButton.addEventListener('click', () => {
    if (isFirstImage) {

        image.src = "images/logo.webp";


    } else {
        image.src = "images/logo-night.webp";

    }

    isFirstImage = !isFirstImage;

    discoverHeadings.classList.toggle('dark-mode');
})