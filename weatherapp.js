
//openweatherMap API key and base URL
const apiKey = "4f303b724c86781e9199b50348d8fb54";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// selecting ther search input and button from the DOM
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

//selecting the weather icon element

const weatherIcon = document.querySelector(".weather-icon");

//asynchoronous function to fetch weather data

async function checkWeather(city) {

    //Featching weather data from the API

    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    // if the city is not found , display an error messange

    if( response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }else{

        var data = await response.json();// json = javascript object notation 

        //The OpenWeather API sends weather details in JSON format when you request it.

    // console.log(data);

    //  Update the city name
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed*3.6 )+ " km/h";

    // Set the weather icon based on the weather condition

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png"
    }
     
     // Show weather details and hide the error message

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    

}
 // Event listener for the search button click

searchBtn.addEventListener("click" , () => {
    checkWeather(searchBox.value); // Call checkWeather function with the input value
})



