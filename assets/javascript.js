var city = document.querySelector("#search-input")
var submit = document.querySelector("#submit")
var destination = document.querySelector("#destination")
var date = document.querySelector("#date")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var uvi = document.querySelector("#uvi")

// var lat = 33.44;
// var lon = -94.04;

// var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&appid=ac98c55c210b923152b89481865ac9b4")
// + "&appid=" + apikey

// fetch(url)
// .then(function () {
//     console.log(url)
// })


// console.log(url1)

// var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 

// get the city from the input which can then will print the lat and lon from that city array which can be put in url1
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// console.log(url2)

function secondCall(url) {
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        temp.textContent = "Temp: " + data.current.temp + "°F";
        wind.textContent = "Wind Speed: " + data.current.wind_speed + "MPH";
        humidity.textContent = "Humidity: " + data.current.humidity + "%";
        uvi.textContent = "UV Index: " + data.current.uvi;
      })
}

submit.addEventListener("click", function () {
    var cityInput = city.value;
    destination.textContent = city.value;
    var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 
    // var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&appid=ac98c55c210b923152b89481865ac9b4")


    fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat
      var lon = data[0].lon
      console.log(lat);
      console.log(lon);
      var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&appid=ac98c55c210b923152b89481865ac9b4")
     
      secondCall(url1);
    });

    if (cityInput === false) {
        alert("Please put in a different city");
    }
  })


// var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 
// fetch(url2)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data[0].lat);
//     console.log(data[0].lon);
//   });

