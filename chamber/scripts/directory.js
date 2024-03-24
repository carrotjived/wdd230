const currentDate = new Date();
const lastModified = new Date(document.lastModified);




document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const mainNav = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});



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

// const url = 'https://carrotjived.github.io/wdd230/chamber/data/members.json';

const url = "data/members.json";
const cards = document.querySelector('article');

async function getLinks() {
    const response = await fetch(url);
    const data = await response.json();

    displayLinks(data.members);
}

const displayLinks = (members) => {
    members.forEach(member => {
        let card = document.createElement('section');
        let name = document.createElement('p');
        let portrait = document.createElement('img');
        let adddress = document.createElement('p');
        let number = document.createElement('p');
        let url = document.createElement('a');


        portrait.setAttribute('src', member.icon);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '150');
        portrait.setAttribute('height', '150');

        name.textContent = `${member.name}`;
        card.setAttribute('class', 'member');
        adddress.textContent = `${member.address}`;
        number.textContent = `${member.phoneNumbers}`;
        url.setAttribute('href', member.urls);
        url.textContent = `${member.name}`;

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(adddress);
        card.appendChild(number);
        card.appendChild(url);

        cards.appendChild(card);


        if (member.membershipLevel == 'Gold') {
            card.classList.add('gold');
        }
        else if (member.membershipLevel == 'Silver') {
            card.classList.add('silver');
        }
        else if (member.membershipLevel == 'Bronze') {
            card.classList.add('bronze')
        }
        else {
            card.classList.add('non');

        }


    });
}

getLinks();



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const main = document.querySelector('.main');
const modeButton = document.querySelector('.slider');
const image = document.querySelector('.logo');
const foot = document.querySelector('footer');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');


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
    grid.classList.toggle('button-dark');




})


