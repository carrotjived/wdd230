
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








let isFirstImage = true;

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    modeSwitch.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    foot.classList.toggle('dark-mode');


    if (isFirstImage) {

        image.src = 'images/logo-night.png';

    } else {
        image.src = 'images/logo.png';
    }
    isFirstImage = !isFirstImage;


});
