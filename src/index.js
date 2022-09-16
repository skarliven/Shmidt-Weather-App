//New York//
function getNy(event) {
  event.preventDefault();

  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new york&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let newYorkLink = document.querySelector("#new-york");
newYorkLink.addEventListener("click", getNy);

//Toronto//
function getToronto(event) {
  event.preventDefault();

  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let torontoLink = document.querySelector("#toronto");
torontoLink.addEventListener("click", getToronto);

//London//
function getLondon(event) {
  event.preventDefault();

  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let londonLink = document.querySelector("#london");
londonLink.addEventListener("click", getLondon);

//Berlin//
function getBerlin(event) {
  event.preventDefault();

  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let berlinLink = document.querySelector("#berlin");
berlinLink.addEventListener("click", getBerlin);

//New Delhi//
function getNd(event) {
  event.preventDefault();

  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=new delhi&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

let newDelhiLink = document.querySelector("#new-delhi");
newDelhiLink.addEventListener("click", getNd);

//Date & Time//
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let currentDay = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentMonth = months[date.getMonth()];

  let currentDate = date.getDate();

  return `${currentDay}, ${currentMonth} ${currentDate},`;
}

function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let amPm = document.querySelector("#am-pm");
  if (hour >= 12) {
    amPm.innerHTML = `p.m.`;
  } else {
    amPm.innerHTML = `a.m.`;
  }
  return `${hour}:${minutes}`;
}
//Forecast//
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);

  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day];
}

function showForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  let forecast = response.data.daily;
  let forecastHTML = `<div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        ` 
     <div class="col-2">
      <div class="weather-forecast-day">${formatDay(forecastDay.dt)}</div>   
      <img
          src="http://openweathermap.org/img/wn/${
            forecastDay.weather[0].icon
          }.png"
          alt=""
          width="54"
         />
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max"> ${Math.round(
          forecastDay.temp.max
        )}° </span>
        <span class="weather-forecast-temperature-min"> ${Math.round(
          forecastDay.temp.min
        )}° </span>
      </div>
     </div>
      `;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  let apiKey = "2418968f77a7b86c4faf9f62831e5df3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showForecast);
}

//API//
function showWeather(response) {
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let currentTemp = document.querySelector("#degrees");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
  celsiusTemp = response.data.main.temp;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
  let wind = document.querySelector("#wind-speed");
  wind.innerHTML = `Wind: ${Math.round(response.data.wind.speed)} Km/H`;
  let feelsLike = document.querySelector("#feels-like-temp");
  feelsLike.innerHTML = `Feels like: ${Math.round(
    response.data.main.feels_like
  )}°C`;
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name.toUpperCase();
  let dateElement = document.querySelector("#todays-date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let todaysTime = document.querySelector("#todays-time");
  todaysTime.innerHTML = formatTime(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

//Search engine//
function searchCity(city) {
  let apiKey = "2418968f77a7b86c4faf9f62831e5df3";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function enterCity(event) {
  event.preventDefault();
  let input = document.querySelector("#city-input");
  searchCity(input.value);
}

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", enterCity);

function getCurrentPosition(event) {
  event.preventDefault();
  function showLocation(position) {
    let apiKey = "2418968f77a7b86c4faf9f62831e5df3";
    let geoUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(geoUrl).then(showWeather);
  }
  navigator.geolocation.getCurrentPosition(showLocation);
}
let locationButton = document.querySelector("#geolocation");
locationButton.addEventListener("click", getCurrentPosition);

//Fahrenheit & Celsius//
function showFahrenheitTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#degrees");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
  currentTemp.innerHTML = Math.round(fahrenheitTemp);
}

function showCelsiusTemp(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#degrees");
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  currentTemp.innerHTML = Math.round(celsiusTemp);
}

let celsiusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", showFahrenheitTemp);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelsiusTemp);

searchCity("Kyiv");
