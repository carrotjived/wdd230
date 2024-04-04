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

