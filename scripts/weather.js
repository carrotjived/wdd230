const displayWeather = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=17.57&lon=120.39&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

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
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = titleCase(data.weather[0].description);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('href', description);

    displayWeather.innerHTML = ` ${data.main.temp}&deg;F - ${description}`;
}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;


}

apiFetch();