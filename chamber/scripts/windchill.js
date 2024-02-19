let temperature = document.getElementById('temp');
var temp = parseFloat(temperature.innerText);
let windSpeed = document.getElementById('wind-speed');
var windSpeedInt = parseFloat(windSpeed.innerText);
const windChill = document.querySelector('.wind-chill');


function computeWindChill(temp, windSpeedInt) {


    var windChill = 35.74 + temp * 0.6215 - ((35.75 * windSpeedInt) ** 0.16) + ((0.4275 * temp * windSpeedInt) ** 0.16);
    return windChill.toFixed(2);
}


windChill.textContent = computeWindChill(temp, windSpeedInt);