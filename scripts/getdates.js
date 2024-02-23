
const currentDate = new Date();
const lastModified = new Date(document.lastModified)


document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const visitsDisplay = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
}
else {
    visitsDisplay.textContent = 'This is your first visit!';

}

numVisits++;

localStorage.setItem("visits-ls", numVisits)