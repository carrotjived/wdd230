const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            // console.log(data.weather[0].description);


        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = ` ${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = titleCase(data.weather[0].description);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('href', description);
    captionDesc.textContent = `${description}`;


}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;


}

apiFetch();

