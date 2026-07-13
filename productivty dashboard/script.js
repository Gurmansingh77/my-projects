let register = document.querySelector(".register");
let firstView = document.querySelector(".firstview");
let nameInput = document.querySelector(".nameinput");
let continueBtn = document.querySelector(".continuebtn");
let mainContent = document.querySelector('.maincontent')
let otherInfo = document.querySelector('.otherinfo')

let time = document.querySelector(".time h1");
let greet = document.querySelector('.greet');
let realDay = document.querySelector(".day");
let realDate = document.querySelector(".date");
let temp = document.querySelector(".temp");
let realSkyCondition = document.querySelector(".skycondition")
let hello = document.querySelector('.hello')
let greetingText = document.querySelector('.greetingtext')

let quote = document.querySelector(".quote")
let author = document.querySelector(".author")
let main = document.querySelector('main')


let userName = ""

let savedName = localStorage.getItem("userName")

if (savedName) {
    firstView.style.display = 'none'
    userName = savedName
    hello.textContent = `Hello, ${userName}👋`


}

continueBtn.addEventListener('click', function (e) {
    e.preventDefault()

    let nameInputVal = nameInput.value
    if (nameInputVal.trim() === "") {
        alert("Please enter your name")
        return
    } else {
        userName = nameInputVal
        console.log(userName)

        firstView.style.display = 'none'

        localStorage.setItem("userName", userName)
        hello.textContent = `Hello, ${userName}👋`
        nameInput.value = ""
    }



})

function updateClock() {
    let now = new Date()

    let hour = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()


    let period = "AM";

    if (hour >= 12) {
        period = "PM";
    }

    if (hour > 12) {
        hour = hour - 12;
    }

    if (hour === 0) {
        hour = 12;
    }

    if (hour < 10) {
        hour = "0" + hour;
    }

    if (min < 10) {
        min = "0" + min;
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    time.innerHTML = `<h1>${hour}:${min}:${sec}<sup>${period}</sup></h1>`



    let date = now.getDate()
    let year = now.getFullYear()
    let day = now.getDay()

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let dayName = days[day]


    let month = now.getMonth()

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let monthName = months[month]


    // otherInfo.innerHTML = `<div class="day">${dayName}</div>
    //                     <div class="date">${date} ${monthName} ${year}</div>
    //                     <div class="temp">33 C</div>
    //                     <div class="skycondition">clear</div>`

    realDay.textContent = `${dayName}`
    realDate.textContent = `${date} ${monthName} ${year}`
}

updateClock()
setInterval(updateClock, 1000)

async function getWeather() {
    let response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=30.1456&longitude=74.1990&current=temperature_2m,weather_code')
    let data = await response.json()
    // console.log(data)

    let realTemp = data.current.temperature_2m
    temp.textContent = `${realTemp}°C`

    let weatherCode = data.current.weather_code;

    let skyCondition = "";
    const weatherConditions = {
        0: "Clear Sky",
        1: "Mostly Clear",
        2: "Partly Cloudy",
        3: "Cloudy",
        45: "Fog",
        48: "Fog",
        51: "Light Drizzle",
        61: "Rain",
        63: "Moderate Rain",
        65: "Heavy Rain",
        71: "Snow",
        95: "Thunderstorm"
    };

    realSkyCondition.textContent =
        weatherConditions[weatherCode] || "Unknown";

}
getWeather()

function updateGreeting() {
    let hour = new Date().getHours()

    let greetText = ""
    if (hour < 12) {
        greetText = "Good Morning 🌅";
    }
    else if (hour < 17) {
        greetText = "Good Afternoon ☀️";
    }
    else if (hour < 21) {
        greetText = "Good Evening 🌇";
    }
    else {
        greetText = "Good Night 🌙";
    }

    greetingText.textContent = `${greetText}`
}
updateGreeting()

function updateBackground() {
    let hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
        document.body.style.backgroundImage = "url('morning.jpg.jpg')";
    }
    else if (hour >= 12 && hour < 17) {
        document.body.style.backgroundImage = "url('eve.jpg.jpg')";
    }
    else if (hour >= 17 && hour < 21) {
        document.body.style.backgroundImage = "url('afternoon.jpg.jpg')";
    }
    else {
        document.body.style.backgroundImage = "url('night.jpg.jpg')";
    }
}

updateBackground();

async function createQuote(){
    let response = await fetch("https://dummyjson.com/quotes/random")
    let data = await response.json()


    let quoteValue = data.quote
    let authorValue = data.author

    quote.textContent = `"${quoteValue}"`
    author.textContent = `- ${authorValue}`
    
}

createQuote()