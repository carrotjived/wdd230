const visitsDisplay = document.querySelector('.visit-output');

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let dateVisit = Number(window.localStorage.getItem("date-ls"));

const dateToday = Number(Date.now());
const dateAgo = (dateToday - dateVisit)
const computedDays = (dateToday - dateVisit) / 84600;

if (numVisits !== 0) {
    if (dateToday > dateVisit && dateToday < (dateToday + 86400000)) {
        // visitsDisplay.textContent = 'Back so soon! Awesome!';
    }
    else {
        visitsDisplay.textContent = `You have visited ${computedDays.toFixed(0)} day(s) ago!`
    }

}
else {
    visitsDisplay.textContent = 'Welcome! Let us know if you have questions!';

}

numVisits++;

localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("date-ls", dateToday);

let newDate = Date.now();


// JOIN PAGE DATE

let d = new Date();
let joinDate = d.toString();

document.getElementById('join-date').value = `${joinDate}`;


