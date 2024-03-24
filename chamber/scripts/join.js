// const visitsDisplay = document.querySelector('.visit-output');

// let numVisits = Number(window.localStorage.getItem("visits-ls"));
// let dateVisit = Number(window.localStorage.getItem("date-ls"));

// const dateToday = Number(Date.now());
// const dateAgo = (dateToday - dateVisit)
// const computedDays = (dateToday - dateVisit) / 84600;

// if (numVisits !== 0) {
//     if (dateToday > dateVisit && dateToday < (dateToday + 86400000)) {
//         // visitsDisplay.textContent = 'Back so soon! Awesome!';
//     }
//     else {
//         visitsDisplay.textContent = `You have visited ${computedDays.toFixed(0)} day(s) ago!`
//     }

// }
// else {
//     visitsDisplay.textContent = 'Welcome! Let us know if you have questions!';

// }

// numVisits++;

// localStorage.setItem("visits-ls", numVisits);
// localStorage.setItem("date-ls", dateToday);

// let newDate = Date.now();


// JOIN PAGE DATE
const currentDate = new Date();
const lastModified = new Date(document.lastModified);




document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const main = document.querySelector('.main');
const modeButton = document.querySelector('.slider');
const image = document.querySelector('.logo');
const foot = document.querySelector('footer');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const label = document.querySelectorAll('label');
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
    label.classList.toggle('discover-dark');

})


let d = new Date();
let joinDate = d.toString();

document.getElementById('join-date').value = `${joinDate}`;


