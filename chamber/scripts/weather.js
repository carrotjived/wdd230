const weatherForecast = document.querySelector('#weather-forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=17.57&lon=120.39&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

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

function computeWindChill(temp, windSpeedInt) {


    var windChill = 35.74 + temp * 0.6215 - ((35.75 * windSpeedInt) * 0.16) + ((0.4275 * temp * windSpeedInt) ** 0.16);
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

    console.log(dateIndex);
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