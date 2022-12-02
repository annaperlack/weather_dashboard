var cityName = document.querySelector("#location");
var btn = document.querySelector("#btn");

var responseText = document.getElementById('response-text');

function getApi(city) {
var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=09b3203d19cbc88ceadb956f9cdd49dd&units=imperial';
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
  }).then(function (data){
    console.log(data);
  })
}


btn.addEventListener("click", function(event){
    event.preventDefault()
    var city = cityName.value
    console.log(city);
    getApi(city);
});
