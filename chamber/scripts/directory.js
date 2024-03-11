const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
const display = document.querySelector('article');

gridButton.addEventListener('click', () => {
    display.classList.add('member-cards');
    display.classList.remove('list');

});

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('member-cards');

});


