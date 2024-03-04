
const currentDate = new Date();
const lastModified = new Date(document.lastModified);



document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const modeButton = document.querySelector('.slider');
const body = document.querySelector('body');
const image = document.querySelector('.logo');
const modeSwitch = document.querySelector('input');
const nav = document.querySelector('nav');
const foot = document.querySelector('footer');
const hamburg = document.querySelector('.menu');
const weather = document.querySelector('.full-details');
const weatherH2 = document.querySelector('.weatherH2');

















let isFirstImage = false;
modeButton.addEventListener('click', () => {
    if (isFirstImage) {

        image.src = "images/logo.webp";


    } else {
        image.src = "images/logo-night.webp";

    }

    isFirstImage = !isFirstImage;

})

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeSwitch.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    foot.classList.toggle('dark-mode');
    hamburg.classList.toggle('dark-mode-hamburger');
    weather.classList.toggle('dark-mode-weather');
    weatherH2.classList.toggle('dark-mode-weather');









});

const visitsDisplay = document.querySelector('.visit-output');

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let dateVisit = Number(window.localStorage.getItem("date-ls"));

const dateToday = Number(Date.now());
const dateAgo = (dateToday - dateVisit)
const computedDays = (dateToday - dateVisit) / 84600;

if (numVisits !== 0) {
    if (dateToday > dateVisit && dateToday < (dateToday + 86400000)) {
        visitsDisplay.textContent = 'Back so soon! Awesome!';
    }
    else {
        visitsDisplay.textContent = `You have visited ${computedDays.toFixed(0)} day(s) ago!`
    }

}
else {
    visitsDisplay.textContent = 'Welcome! Let us know if you have questions!';

}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("date-ls", dateToday);


// JOIN PAGE DATE

document.getElementById("join-date").value = Date.now();




