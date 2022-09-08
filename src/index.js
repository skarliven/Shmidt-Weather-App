//Feature #1: Header City Link Display//
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

//API//
function showWeather(response) {
  let currentTemp = document.querySelector("#degrees");
  currentTemp.innerHTML = Math.round(response.data.main.temp);
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
}

function searchCity(city) {
  let apiKey = "171ddbb0656a18a2767a1d21dcc89d04";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

searchCity("Kyiv");
