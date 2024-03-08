const baseURL = "carrotjived.github.io/wdd230";
const linksURL = 'https://carrotjived.github.io/wdd230/data/links.json';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const container = document.querySelector('.la-card');
removeAllChildNodes(container);

const learningActivitiesHeader = document.createElement('h3');
learningActivitiesHeader.textContent = 'Learning Activities';

container.appendChild(learningActivitiesHeader);

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();

    displayLinks(data.lessons);
}

const displayLinks = (weeks) => {
    weeks.forEach(week => {
        let card = document.createElement('div');
        let p = document.createElement('p');

        p.textContent = `Week ${week.lesson}: `;

        // let a = document.createElement('a');
        // a.setAttribute("href", week.links[0].url)
        // a.setAttribute("title", week.links[0].title);
        // a.textContent = `${week.links[0].title}`;

        week.links.forEach(link => {
            let a = document.createElement('a');
            a.setAttribute("href", link.url);
            a.textContent = `||| ${link.title} `;
            p.appendChild(a);



        });










        card.appendChild(p);

        container.appendChild(card);

    });
}

getLinks();



