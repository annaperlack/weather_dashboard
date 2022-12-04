var cityName = document.querySelector("#location");
var btn = document.querySelector("#btn");
var cityEl = document.querySelector("#selected-city");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");
var day1El = document.querySelector("#day-1");
var imageEl = document.querySelector("#image");
var searchList = JSON.parse(localStorage.getItem("saved-searches")) || [];




function getWeatherApi(city) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=09b3203d19cbc88ceadb956f9cdd49dd&units=imperial';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            var selectedCity = data.name
            var temperature = data.main.temp
            var wind = data.wind.speed
            var humidity = data.main.humidity
            var icon = data.weather[0].icon
            cityEl.textContent = selectedCity
            tempEl.textContent = temperature
            windEl.textContent = wind
            humidityEl.textContent = humidity
            imageEl.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
            console.log(data)
        })
};

function getForecastApi(city) {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=09b3203d19cbc88ceadb956f9cdd49dd&units=imperial';
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data)
            for (var i = 0; i < 5; i++) {
                setForecastDay(i, data)
            }
        })
};

function setForecastDay(day, data) {
    var day1 = data.list[day]
    var day1Date = day1.dt_txt
    var day1Temp = day1.main.temp
    var day1Wind = day1.wind.speed
    var day1Humidity = day1.main.humidity
    var icon = day1.weather[0].icon
    var dateEl = document.querySelector("#date-" + day);
    var forecastTempEl = document.querySelector("#forecast-temperature-" + day);
    var forecastWindEl = document.querySelector("#forecast-wind-" + day);
    var forecastHumidityEl = document.querySelector("#forecast-humidity-" + day);
    var imageForecastEl = document.querySelector("#forecast-icon-" + day);
    console.log(imageForecastEl)
    imageForecastEl.src = 'http://openweathermap.org/img/wn/' + icon + '@2x.png'
    dateEl.textContent = day1Date
    forecastTempEl.textContent = day1Temp
    forecastWindEl.textContent = day1Wind
    forecastHumidityEl.textContent = day1Humidity
};


btn.addEventListener("click", function (event) {
    event.preventDefault()
    var city = cityName.value
    getWeatherApi(city);
    getForecastApi(city);
    searchList.push(city)
    localStorage.setItem("saved-searches", JSON.stringify(searchList));
});
