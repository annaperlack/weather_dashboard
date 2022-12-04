var cityName = document.querySelector("#location");
var btn = document.querySelector("#btn");
var cityEl = document.querySelector("#selected-city");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#wind");
var humidityEl = document.querySelector("#humidity");

var responseText = document.getElementById('response-text');

function getWeatherApi(city) {
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=09b3203d19cbc88ceadb956f9cdd49dd&units=imperial';
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
  }).then(function (data){
    var selectedCity = data.name
    var temperature = data.main.temp
    var wind = data.wind.speed
    var humidity = data.main.humidity
    cityEl.textContent = selectedCity 
    tempEl.textContent = temperature
    windEl.textContent = wind
    humidityEl.textContent = humidity
  })
};

function getForecastApi(city) {
 var requestUrl ='https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=09b3203d19cbc88ceadb956f9cdd49dd';
    fetch(requestUrl)
    .then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data)
    })
};





btn.addEventListener("click", function(event){
    event.preventDefault()
    var city = cityName.value
    console.log(city);
    getWeatherApi(city);
    getForecastApi(city);
});
