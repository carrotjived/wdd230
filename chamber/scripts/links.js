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


