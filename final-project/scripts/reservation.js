const currentDate = new Date();
const lastModified = new Date(document.lastModified);

document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - WDD 230`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

//BURGER

const mainNav = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');


hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');


});

const agreement = document.querySelector('.rental-agreement');
const button = document.querySelector('.reservation-button');
const form = document.querySelector('.form');

button.addEventListener('click', () => {
    agreement.style.display = "none";
    form.style.display = "block";
})
