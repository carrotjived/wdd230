const weatherForecast = document.querySelector('#weather-forecast');

const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=17.57&lon=120.39&appid=5f86c30fe977405f612b0bfd516d4aec&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            console.log(data.list);
            displayResults(data)


        }
        else {
            throw Error(await response.text());

        }
    }
    catch (error) {
        console.log(error);
    }
}

function computeWindChill(temp, windSpeedInt) {


    var windChill = 35.74 + temp * 0.6215 - ((35.75 * windSpeedInt) ** 0.16) + ((0.4275 * temp * windSpeedInt) ** 0.16);
    return windChill.toFixed(2);
}

function displayResults(data) {

    let todayForecast = document.createElement('div');
    todayForecast.className = 'today-forecast';
    const date = new Date().getDate();
    console.log(date);

    today = date;
    console.log(today);

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

    let tempDetails = document.createElement('p');
    tempDetails.className = 'weather-details';
    tempDetails.textContent = `${data.list[today].main.temp}\u00B0F - ${description}`;


    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const d = new Date();

    let forecastCard = document.createElement('div');
    forecastCard.className = 'forecast';

    let tomorrow = document.createElement('p');
    let theDayAfter = document.createElement('p');
    let threeDays = document.createElement('p');

    tomorrow.textContent = `${weekday[d.getDay() + 1]}: ${data.list[today + 1].main.temp}\u00B0F - ${description}`;
    theDayAfter.textContent = `${weekday[d.getDay() + 2]}:${data.list[today + 2].main.temp}\u00B0F - ${description}`;
    threeDays.textContent = `${weekday[d.getDay() + 3]}:${data.list[today + 3].main.temp}\u00B0F - ${description}`;

    forecastCard.appendChild(tomorrow);
    forecastCard.appendChild(theDayAfter);
    forecastCard.appendChild(threeDays);









    tempDetails.appendChild(windChill);
    todayForecast.appendChild(weatherIcon);
    todayForecast.appendChild(tempDetails);

    weatherForecast.appendChild(todayForecast);
    weatherForecast.appendChild(forecastCard);






    // let index = 0;

    // while (index <= 3) {

    //     let card = document.createElement('div');
    //     card.className = 'weather-card';
    //     let weatherIcon = document.createElement('img');
    //     weatherIcon.className = 'weather-icon';
    //     let tempDetails = document.createElement('p');
    //     tempDetails.className = 'weather-details';
    //     let date = document.createElement('p');
    //     date.className = 'weather-date';


    // let description = titleCase(data.list[today].weather[0].description);

    // switch (index) {
    //     case 0:
    //         date.textContent = "Today";

    //         break;

    //     case 1:
    //         date.textContent = "Tomorrow";

    //         break;

    //     case 2:
    //         date.textContent = "The Day After";

    //         break;

    //     case 3:
    //         date.textContent = "Two Days After";

    //         break;



    // }

    //     tempDetails.textContent = `${data.list[today].main.temp}\u00B0F - ${description}`;
    //     const iconSrc = `https://openweathermap.org/img/wn/${data.list[today].weather[0].icon}@2x.png`;
    //     weatherIcon.setAttribute('src', iconSrc);
    //     weatherIcon.className = 'weather-icon';

    //     card.appendChild(date);
    //     card.appendChild(weatherIcon);
    //     card.appendChild(tempDetails);

    //     weatherForecast.appendChild(card);
    //     index++;
    //     today++;


    //     }



}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;


}

apiFetch();