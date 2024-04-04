let slideIndex = 0;
let heroSlideIndex = 0;
showSlides();
heroSlides();


function showSlides() {
    let i;
    let slides = document.getElementsByClassName('rental-slide');


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function heroSlides() {
    let i;
    let slides = document.getElementsByClassName('hero-img');

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    heroSlideIndex++;

    if (heroSlideIndex > slides.length) { heroSlideIndex = 1 }

    slides[heroSlideIndex - 1].style.display = "block";
    setTimeout(heroSlides, 4000);
}




// WEATHER

const weatherForecast = document.querySelector('#weather-forecast');
const callToAction = document.querySelector('.call-to-action');
const tempMax = document.querySelector('#temp-max');
const bannerButton = document.querySelector('#banner-close');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            console.log(data);
            displayResults(data);


        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {

    }
}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;
}

function displayResults(data) {

    // Today Forecast

    let todayForecast = document.createElement('div');
    todayForecast.className = 'today-forecast';



    const temperature = data.list[0].main.temp;
    const humidity = data.list[0].main.humidity;
    const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    let description = titleCase(data.list[0].weather[0].description);
    console.log(description);

    let weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description)
    weatherIcon.className = 'weather-icon';

    let tempDetails = document.createElement('p');
    tempDetails.className = 'temperature-details';
    tempDetails.textContent = `Today's Temperature: ${temperature}\u00B0F - ${description}`;

    let humiDetails = document.createElement('p');
    humiDetails.className = 'humidity-details';
    humiDetails.textContent = `Today's Humidity: ${humidity}%`;



    todayForecast.appendChild(weatherIcon);
    todayForecast.appendChild(tempDetails);
    todayForecast.appendChild(humiDetails);

    weatherForecast.appendChild(todayForecast);

    // NEXT DAY FORECAST

    let nextDay = document.createElement('div');
    nextDay.className = 'next-day-forecast';

    const nextTemperature = data.list[8].main.temp;
    const nextHumidity = data.list[8].main.humidity
    const nextIconSrc = `https://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png`;
    let nextDescription = titleCase(data.list[8].weather[0].description);

    let nextWeatherIcon = document.createElement('img');
    nextWeatherIcon.setAttribute('src', nextIconSrc);
    nextWeatherIcon.setAttribute('alt', nextDescription);
    nextWeatherIcon.className = 'weather-icon';

    let nextTempDetails = document.createElement('p');
    nextTempDetails.className = 'next-temperature';
    nextTempDetails.textContent = `Tomorrow's Temperature: ${nextTemperature}\u00B0F - ${nextDescription}`;

    let nextHumidDetails = document.createElement('p');
    nextHumidDetails.className = 'next-humidity';
    nextHumidDetails.textContent = `Tomorrow's Humidity: ${nextHumidity}%`;

    nextDay.appendChild(nextWeatherIcon);
    nextDay.appendChild(nextTempDetails);
    nextDay.appendChild(nextHumidDetails);

    weatherForecast.appendChild(nextDay);

    tempMax.textContent = `${data.list[0].main.temp_max}\u00B0F`;
    console.log(tempMax);

}

bannerButton.addEventListener('click', () => {
    callToAction.style.display = 'none';
})

// TEMP MAX






apiFetch();

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


