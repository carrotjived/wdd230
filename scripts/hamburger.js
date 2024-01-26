const mainNav=document.querySelector('.navigation');
const hamButton=document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});