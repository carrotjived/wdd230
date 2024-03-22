const spotlightUrl = "data/members.json";
const slideTrack = document.querySelector('#slider');

async function getLinks() {
    const response = await fetch(spotlightUrl);
    const data = await response.json();
    displaycard(data.members);

}

const displaycard = (members) => {
    members.forEach(member => {

        if (member.membershipLevel == 'Gold') {
            let card = document.createElement('div');
            card.className = 'slide';

            let description = document.createElement('p');

            description.textContent = `${member.description}`;

            let portrait = document.createElement('img');
            portrait.setAttribute('src', member.icon);
            portrait.setAttribute('alt', `Portrait of ${member.name}`);
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '150');
            portrait.setAttribute('height', '150');

            card.appendChild(portrait);
            card.appendChild(description);
            slideTrack.appendChild(card);
        }





    });
}

getLinks();