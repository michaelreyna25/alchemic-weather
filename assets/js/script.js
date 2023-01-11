// call all element id
const citySearch = document.getElementById('#city-search')
const city = document.getElementById('#city')
const searchBttn = document.getElementById('#search-button')
const geoLocation = document.getElementById('#geolocation')
// create let
let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e0d0342711380951f5bd4469a6759963`
let geographicLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=b6b2126e212f7ac9ffeaf9811e11740e`



//req url geo api

//req url weather api
citySearch.addEventListener('submit', function(event){
    event.preventDefault();
    let lan = getElementById("lat").value;
    let lon = getElementById("lon").value;
    let cityName = getElementById("cityname").value
    localStorage.setItem("weatherUrl", weatherUrl)
    localStorage.setItem("geographicLoc", geographicLoc)
    localStorage.setItem("lan", lan);
    localStorage.setItem("lon", lon);
    localStorage.setItem("cityname", cityName);
    

    fetch(weatherUrl)
        .then(function(submit){
            return submit.json();
        });
        then(function(data){
            console.log(data)
            let 
        })
    
})
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