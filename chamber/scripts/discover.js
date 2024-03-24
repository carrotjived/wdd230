const mainNavi = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNavi.classList.toggle('open');
    hamButton.classList.toggle('open');
});


const currentDate = new Date();
const lastModified = new Date(document.lastModified);




document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

// const events = document.querySelector('.event-card');
// const empanadaH2 = document.querySelector('empanada-h2');

const main = document.querySelector('.main');
const modeButton = document.querySelector('.slider');
const image = document.querySelector('.logo');
const foot = document.querySelector('footer');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const gallery = document.querySelector('.discover-gallery');


let isFirstImage = false;
modeButton.addEventListener('click', () => {
    if (isFirstImage) {

        image.src = "images/logo.webp";


    } else {
        image.src = "images/logo-night.webp";

    }

    isFirstImage = !isFirstImage;

    body.classList.toggle('discover-dark');
    foot.classList.toggle('discover-dark');
    nav.classList.toggle('discover-dark');
    gallery.classList.toggle('dark');


})

const msToDays = 86400000;

const today = Date.now();
console.log(today);


const visitsDisplay = document.querySelector('.visit-output');

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let timeOfVisit = Date.now(window.localStorage.getItem('time'));

let difference = (timeOfVisit - today) / msToDays;
console.log(difference);

if (numVisits !== 0) {
    if (difference < 24) {
        visitsDisplay.textContent = 'Back so soon! Awesome!';
    }
    else {
        if ((difference - 24) == 1) {
            visitsDisplay.textContent = `You last visited ${difference.toFixed(0)} days ago!`;
        }

        else {
            visitsDisplay.textContent = `You last visited ${difference.toFixed(0)} days ago!`;
        }

    }
}
else {
    visitsDisplay.textContent = 'Welcome! Let us know if you have any questions!';

}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem('time', timeOfVisit);