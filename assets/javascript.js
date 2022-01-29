// Variables Defined Here
// Variables for the start menu and weather for the current date
var city = document.querySelector("#search-input")
var submit = document.querySelector("#submit")
var destination = document.querySelector("#destination")
var date = document.querySelector("#date")
var temp = document.querySelector("#temp")
var wind = document.querySelector("#wind")
var humidity = document.querySelector("#humidity")
var uvi = document.querySelector("#uvi")
var uviText = document.querySelector("#uvi-text")

// Weather Variables for the 5-Day Forecast

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

// Dates for the 5 Day Forecast

var day1 = document.querySelector("#day1")
var day2 = document.querySelector("#day2")
var day3 = document.querySelector("#day3")
var day4 = document.querySelector("#day4")
var day5 = document.querySelector("#day5")

// Weather Icons for the 5 day Forecast
var icon1 = document.querySelector("#icon1")
var icon2 = document.querySelector("#icon2")
var icon3 = document.querySelector("#icon3")
var icon4 = document.querySelector("#icon4")
var icon5 = document.querySelector("#icon5")

// A Function that fetches all the data needed for the Weather Dashboard.
function secondCall(url) {
  // Includes all values for the weather, for when the uvi value gets to a certain figure it will change colour
  fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
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

        // Includes Values and Icon Data for the 5-Day Forecast and styling each weather box

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

        weatherBox1.setAttribute("style", "background-color:lightblue; border-radius:10px; margin-top:3px")
        weatherBox2.setAttribute("style", "background-color:lightgrey; border-radius:10px; margin-top:3px")
        weatherBox3.setAttribute("style", "background-color:lightpink; border-radius:10px; margin-top:3px")
        weatherBox4.setAttribute("style", "background-color:lightgrey; border-radius:10px; margin-top:3px")
        weatherBox5.setAttribute("style", "background-color:lightgreen; border-radius:10px; margin-top:3px")


        // Fetching the icon code needed and putting into the img source on the HTML

        var img1 = data.daily[0].weather[0].icon;
        var img2 = data.daily[1].weather[0].icon;
        var img3 = data.daily[2].weather[0].icon;
        var img4 = data.daily[3].weather[0].icon;
        var img5 = data.daily[4].weather[0].icon;
        
        var imageURL1 = "http://openweathermap.org/img/w/" + img1 + ".png"
        icon1.setAttribute("src", imageURL1)

        var imageURL2 = "http://openweathermap.org/img/w/" + img2 + ".png"
        icon2.setAttribute("src", imageURL2)

        var imageURL3 = "http://openweathermap.org/img/w/" + img3 + ".png"
        icon3.setAttribute("src", imageURL3)

        var imageURL4 = "http://openweathermap.org/img/w/" + img4 + ".png"
        icon4.setAttribute("src", imageURL4)

        var imageURL5 = "http://openweathermap.org/img/w/" + img5 + ".png"
        icon5.setAttribute("src", imageURL5)
          

        // Header for the 5-Day Forecast
        document.querySelector("#weatherHeader").textContent = "5-Day Forecast"
        
       
      })
}

// A Function to get ande store the Local Storage items which will be placed onto the page
function getLocalStorage() {
  localStorage.setItem("search-input", city.value);

  var item = localStorage.getItem("search-input", city.value)

 
  var cityEL = document.createElement("button")
  cityEL.textContent = item;
  document.getElementById("list").appendChild(cityEL)

  cityEL.setAttribute("style", "list-style-type:none; margin:10px;background-color:cyan; border-radius:10px; padding-left:100px; padding-right:100px")

  // This Event Listener creates a button for each input into the input box and can be clicked on which will load that clicked city information again
  cityEL.addEventListener("click", function () {
    var cityInput = item;
    destination.textContent = item + " - " + moment().format("DD/MM/YY");
    day1.textContent = moment().add(1,'days').format("DD/MM/YY");
    day2.textContent = moment().add(2,'days').format("DD/MM/YY");
    day3.textContent = moment().add(3,'days').format("DD/MM/YY");
    day4.textContent = moment().add(4,'days').format("DD/MM/YY");
    day5.textContent = moment().add(5,'days').format("DD/MM/YY");
    
    var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 

    fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat
      var lon = data[0].lon
      var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&appid=ac98c55c210b923152b89481865ac9b4")
     
      secondCall(url1);
    });

    if (!cityInput) {
        alert("Please put in a city!");
    }

  })
}

// The Submit Button when a city is inputted into the box, it fetches the input and places it into url2 which gives us the lat and lon of the city
// With the Lat and Lon of the city, we can call the SecondCall function which prints out all the array information
// It also calls the Local Storage function which puts all the items into local storage and put it into buttons
submit.addEventListener("click", function () {
    var cityInput = city.value;
    destination.textContent = city.value + " - " + moment().format("DD/MM/YY");
    day1.textContent = moment().add(1,'days').format("DD/MM/YY");
    day2.textContent = moment().add(2,'days').format("DD/MM/YY");
    day3.textContent = moment().add(3,'days').format("DD/MM/YY");
    day4.textContent = moment().add(4,'days').format("DD/MM/YY");
    day5.textContent = moment().add(5,'days').format("DD/MM/YY");
    
    var url2 = ("http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&limit=1&appid=ac98c55c210b923152b89481865ac9b4") 

    fetch(url2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var lat = data[0].lat
      var lon = data[0].lon
     
      var url1 = ("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon +"&appid=ac98c55c210b923152b89481865ac9b4")
     
      secondCall(url1);
      getLocalStorage();
    });
    // If The Input Box is empty then it warns the user to put a city in
    if (!cityInput) {
        alert("Please put in a city!");
    }
  })


 // Prevent Refresh When Enter is pressed in form
 document.keypress(function(e) { 
  return e.keyCode != 13;
});