const spotlightUrl = "data/members.json";
const slideTrack = document.querySelector('#slider');

async function getLinks() {
    const response = await fetch(spotlightUrl);
    const data = await response.json();
    displaycard(data.members);



}

function displayDetails(member) {
    let card = document.createElement('div');
    card.className = 'slide';

    let url = document.createElement('a');

    let description = document.createElement('p');

    description.textContent = `${member.description}`;
    url.setAttribute('href', member.urls)
    url.textContent = `${member.urls}`;
    url.className = 'spotlight-url';

    let portrait = document.createElement('img');
    portrait.setAttribute('src', member.icon);
    portrait.setAttribute('alt', `Portrait of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '150');
    portrait.setAttribute('height', '150');

    card.appendChild(portrait);
    card.appendChild(description);
    card.appendChild(url);
    slideTrack.appendChild(card);

}



const displaycard = (members) => {
    let memberCards = [];
    members.forEach(member => {


        if (member.membershipLevel == 'Gold' || member.membershipLevel == 'Silver') {
            memberCards.push(member)
        }
    });

    for (let i = 0; i <= 2; i++) {
        displayIndex = Math.floor(Math.random() * memberCards.length);
      
        displayDetails(memberCards[displayIndex]);
        memberCards.splice(displayIndex,1);
    }

   
}



getLinks();