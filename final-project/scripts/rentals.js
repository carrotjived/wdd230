//JSON

const url = "data/rentals.json";
const cards = document.querySelector('article');

async function getLinks() {
    const response = await fetch(url);
    const data = await response.json();

    displayLinks(data.rentals);
}

const displayLinks = (rentals) => {
    rentals.forEach(rental => {
        let card = document.createElement('div');
        card.className = 'rental-card';

        let name = document.createElement('p');
        name.className = 'rental-card-label';

        let person = document.createElement('p');
        person.className = 'rental-card-person';

        let portrait = document.createElement('img');
        portrait.className = 'rental-card-img';



        portrait.setAttribute('src', rental.img);
        portrait.setAttribute('alt', `${rental.type}`);
     

        name.textContent = `${rental.type}`;
        person.textContent = `Good for ${rental.personAvailable} persons`;

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(person);

        cards.appendChild(card);





    });
}

getLinks();

//FOOTER

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

