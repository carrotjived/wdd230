const currentDate = new Date();
const lastModified = new Date(document.lastModified);

document.getElementById("yearName").innerHTML = `\u00A9 ${currentDate.getFullYear()} - Victor Jared Onato - Philippines`;
document.getElementById("lastModified").innerHTML = `Last Modification: ${lastModified}`;

const modeButton = document.querySelector('.slider');
const body = document.querySelector('body');
const image = document.querySelector('.logo');
const modeSwitch = document.querySelector('input');
const nav = document.querySelector('nav');
const foot = document.querySelector('footer');
const hamburg = document.querySelector('.menu');
const events = document.querySelector('.chamber-event-card');
const weather = document.querySelector('#weather-forecast');
const spotlight = document.querySelector('#slider');





let isFirstImage = false;
modeButton.addEventListener('click', () => {
    if (isFirstImage) {

        image.src = "images/logo.webp";


    } else {
        image.src = "images/logo-night.webp";

    }

    isFirstImage = !isFirstImage;

    body.classList.toggle('dark-mode');
    nav.classList.toggle('dark-mode');
    events.classList.toggle('dark-mode');
    weather.classList.toggle('dark-mode');
    spotlight.classList.toggle('dark-mode');
    foot.classList.toggle('dark-mode');



})

const chamberMeet = document.querySelector('.call-to-action');
const chamberMeetDay = document.querySelector('#chamber-meet-day');


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();


let day = weekday[d.getDay()];

if (day == "Monday" || day == "" || day == "Wednesday") {
    chamberMeet.style.display = "block";
}

else {
    chamberMeet.style.display = "none";
}

chamberMeetDay.innerHTML = day;

const bannerButton = document.querySelector('#banner-close');


bannerButton.addEventListener('click', () => {
    chamberMeet.style.display = "none";
})

const mainNav = document.querySelector('.navi');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    hamButton.classList.toggle('open');
});


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
        memberCards.splice(displayIndex, 1);
    }


}



getLinks();


const weatherForecast = document.querySelector('#weather-forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=17.57&lon=120.39&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();


            displayResults(data);


        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {

    }
}

function computeWindChill(temp, windSpeedInt) {


    var windChill = 35.74 + temp * 0.6215 - ((35.75 * windSpeedInt) ** 0.16) + ((0.4275 * temp * windSpeedInt) ** 0.16);
    return windChill.toFixed(2);
}

function displayResults(data) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const d = new Date();

    let todayForecast = document.createElement('div');
    todayForecast.className = 'today-forecast';
    const date = new Date().getDate();



    let today = date;


    const windSpeed = data.list[today].wind.speed;
    const temperature = data.list[today].main.temp;
    let windChill = document.createElement('p');
    windChill.textContent = `Wind chill: ${computeWindChill(temperature, windSpeed)}`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.list[today].weather[0].icon}@2x.png`;


    let description = titleCase(data.list[today].weather[0].description);





    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description)
    weatherIcon.className = 'weather-icon';

    let dateToday = document.createElement('p');
    dateToday.textContent = `${weekday[d.getDay()]} - ${monthNames[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;





    let tempDetails = document.createElement('p');
    tempDetails.className = 'weather-details';
    tempDetails.textContent = `${data.list[today].main.temp}\u00B0F - ${description}`;



    let forecastCard = document.createElement('div');
    forecastCard.className = 'forecast';

    let tomorrow = document.createElement('p');
    let theDayAfter = document.createElement('p');
    let threeDays = document.createElement('p');

    let dateIndex = d.getDay()
    if (dateIndex >= 6) {
        dateIndex = -1;
    }


    tomorrow.textContent = `${weekday[dateIndex + 1]}: ${data.list[today + 1].main.temp}\u00B0F - ${description}`;
    theDayAfter.textContent = `${weekday[dateIndex + 2]}:${data.list[today + 2].main.temp}\u00B0F - ${description}`;
    threeDays.textContent = `${weekday[dateIndex + 3]}:${data.list[today + 3].main.temp}\u00B0F - ${description}`;

    forecastCard.appendChild(tomorrow);
    forecastCard.appendChild(theDayAfter);
    forecastCard.appendChild(threeDays);









    tempDetails.appendChild(windChill);
    todayForecast.appendChild(weatherIcon);
    todayForecast.appendChild(dateToday);
    todayForecast.appendChild(tempDetails);

    weatherForecast.appendChild(todayForecast);
    weatherForecast.appendChild(forecastCard);







}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;


}

apiFetch();


