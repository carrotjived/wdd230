const mainNav = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});


