// call all element id
const citySearch = document.querySelector('#city-search')
const city = document.querySelector('#city')
const searchBttn = document.querySelector('#search-button')
const geoLocation = document.querySelector('#geolocation')
// create let
let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=e0d0342711380951f5bd4469a6759963`
let geographicLoc = `http://api.openweathermap.org/geo/1.0/direct?q={cityname}&limit=1&appid=b6b2126e212f7ac9ffeaf9811e11740e`
let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=e0d0342711380951f5bd4469a6759963`

// let lat = $(lat);
// let lon = $(lon);
// let cityname = $(cityname)

//req url geo api

//req url weather api
citySearch.addEventListener('click', function(event){
    event.preventDefault();

    localStorage.setItem("weatherUrl", weatherUrl)
    localStorage.setItem("geographicLoc", geographicLoc)
    // localStorage.setItem("lan", lan);
    // localStorage.setItem("lon", lon);
    // localStorage.setItem("cityname", cityName);

    
   
    fetch(currentWeather, {
        credentials: 'same-origin',
        redirect: 'follow',
    })
        .then(function(response){
                return response.json();
        });
        then(function (data) {
            console.log(data);
        })
    }
);  
// create a function to fetch geo and weather api
    //when the search button has been clicked
    //then the function is called
        //request geo location if string is = to the location
        // get el by id .value
        //call for location and day and icon
            //create a for loop
                //if the text
        //display temp, humidity, and windspeed
        //