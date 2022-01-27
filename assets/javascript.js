var city = document.querySelector("#search-input")

var lat = 33.44;
var lon = -94.04;
var part = "alerts";

var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=" + part +"&appid=ac98c55c210b923152b89481865ac9b4")
// + "&appid=" + apikey

// fetch(url)
// .then(function () {
//     console.log(url)
// })


console.log(url1)

var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 

// get the city from the input which can then will print the lat and lon from that city array which can be put in url1
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

console.log(url2)

var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 
fetch(url2)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

