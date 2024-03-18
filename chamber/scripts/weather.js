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

function displayResults(data) {
    const date = new Date().getDate();
    console.log(date);

    today = date;
    console.log(today);



    let index = 0;

    while (index <= 3) {

        let card = document.createElement('div');
        card.className = 'weather-card';
        let weatherIcon = document.createElement('img');
        weatherIcon.className = 'weather-icon';
        let tempDetails = document.createElement('p');
        tempDetails.className = 'weather-details';
        let date = document.createElement('p');
        date.className = 'weather-date';


        let description = titleCase(data.list[today].weather[0].description);

        switch (index) {
            case 0:
                date.textContent = "Today";

                break;

            case 1:
                date.textContent = "Tomorrow";

                break;

            case 2:
                date.textContent = "The Day After";

                break;

            case 3:
                date.textContent = "Two Days After";

                break;



        }

        tempDetails.textContent = `${data.list[today].main.temp}\u00B0F - ${description}`;
        const iconSrc = `https://openweathermap.org/img/wn/${data.list[today].weather[0].icon}@2x.png`;
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.className = 'weather-icon';

        card.appendChild(date);
        card.appendChild(weatherIcon);
        card.appendChild(tempDetails);

        weatherForecast.appendChild(card);
        index++;
        today++;


    }


    // const iconSrc = `https://openweathermap.org/img/wn/${data.list[0].icon}@2x.png`;
    // let description = titleCase(data.weather[0].description);
    // weatherIcon.setAttribute('src', iconSrc);
    // weatherIcon.setAttribute('href', description);

    // displayWeather.innerHTML = ` ${data.main.temp}&deg;F - ${description}`;
}

function titleCase(string) {
    const weatherArray = string.toLowerCase().split(" ");
    const newArray = weatherArray.map(weather => weather.charAt(0).toUpperCase() + weather.slice(1));

    string = newArray.join(" ");
    return string;


}

apiFetch();