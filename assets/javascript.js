var city = document.querySelector("#search-input")
var submit = document.querySelector("#submit")
var destination = document.querySelector("#destination")
var date = document.querySelector("#date")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var uvi = document.querySelector("#uvi")
var uviText = document.querySelector("#uvi-text")

var temp1 = document.querySelector("#temp1")
var wind1 = document.querySelector("#wind1")
var humidity1 = document.querySelector("#humidity1")

var temp2 = document.querySelector("#temp2")
var wind2 = document.querySelector("#wind2")
var humidity2 = document.querySelector("#humidity2")

var temp3 = document.querySelector("#temp3")
var wind3 = document.querySelector("#wind3")
var humidity3 = document.querySelector("#humidity3")

var temp4 = document.querySelector("#temp4")
var wind4 = document.querySelector("#wind4")
var humidity4 = document.querySelector("#humidity4")

var temp5 = document.querySelector("#temp5")
var wind5 = document.querySelector("#wind5")
var humidity5 = document.querySelector("#humidity5")

var weatherBox1 = document.querySelector("#weather-box1")
var weatherBox2 = document.querySelector("#weather-box2")
var weatherBox3 = document.querySelector("#weather-box3")
var weatherBox4 = document.querySelector("#weather-box4")
var weatherBox5 = document.querySelector("#weather-box5")

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
        uvi.textContent = data.current.uvi;

        uviText.textContent = "Uv Index: "
        var uviValue = data.current.uvi

        if (uviValue < 0.50) {
          uvi.setAttribute("style", "background-color:lightgreen; padding:2px; border: 1px solid black; clear:both; display: inline-block; overflow: hidden;white-space: nowrap; margin:0px")
        } else if (uviValue < 0.75) {
          uvi.setAttribute("style", "background-color:yellow; padding:2px; border: 1px solid black; margin:0px; clear:both; display: inline-block; overflow: hidden;white-space: nowrap;")
        } else {
          uvi.setAttribute("style", "background-color:red; padding:2px; border: 1px solid black; margin:0px; clear:both; display: inline-block; overflow: hidden;white-space: nowrap;")
        }

        temp1.textContent = "Temp: " + data.daily[0].temp.day + "°F";
        wind1.textContent = "Wind Speed: " + data.daily[0].wind_speed + "MPH";
        humidity1.textContent = "Humidity: " + data.daily[0].humidity + "%";

        temp2.textContent = "Temp: " + data.daily[1].temp.day + "°F";
        wind2.textContent = "Wind Speed: " + data.daily[1].wind_speed + "MPH";
        humidity2.textContent = "Humidity: " + data.daily[1].humidity + "%";

        temp3.textContent = "Temp: " + data.daily[2].temp.day + "°F";
        wind3.textContent = "Wind Speed: " + data.daily[2].wind_speed + "MPH";
        humidity3.textContent = "Humidity: " + data.daily[2].humidity + "%";

        temp4.textContent = "Temp: " + data.daily[3].temp.day + "°F";
        wind4.textContent = "Wind Speed: " + data.daily[3].wind_speed + "MPH";
        humidity4.textContent = "Humidity: " + data.daily[3].humidity + "%";

        temp5.textContent = "Temp: " + data.daily[4].temp.day + "°F";
        wind5.textContent = "Wind Speed: " + data.daily[4].wind_speed + "MPH";
        humidity5.textContent = "Humidity: " + data.daily[4].humidity + "%";

        weatherBox1.setAttribute("style", "background-color:lightblue; border-radius:15px")
        weatherBox2.setAttribute("style", "background-color:lightgrey; border-radius:15px")
        weatherBox3.setAttribute("style", "background-color:lightpink; border-radius:15px")
        weatherBox4.setAttribute("style", "background-color:lightgrey; border-radius:15px")
        weatherBox5.setAttribute("style", "background-color:lightgreen; border-radius:15px")
      })
}



submit.addEventListener("click", function () {
    var cityInput = city.value;
    destination.textContent = city.value + " - " + moment().format("DD/MM/YY");
    
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

