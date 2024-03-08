const baseURL = "https://github.com/carrotjived/wdd230";
const linksURL = "https://github.com/carrotjived/wdd230/blob/main/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.table(data.lesson);
    // displayLinks(data);
}

// const displayLinks = (weeks) => {
//     links.forEach(week => {
//         const ulElement = document.querySelector(".activities");
//         ulElement.innerHTML = "";

//         var a = document.createElement('a');

//         var link = document.createTextNode(`${week.links.url}`);
//         a.appendChild(link);
//         a.title = `${week.links.title}`;
//         a.href = `${week.links.url}`;


//         let week = document.createElement('li');
//         let description = document.createTextNode(`Week ${week.lesson}: `);
//         week.appendChild(description);
//         week.appendChild(a);

//         ulElement.appendChild(week);

//     });
// }


getLinks();