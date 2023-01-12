// call all element id
const citySearch = document.querySelector('#city-search')
const citySelect = document.querySelector('#city-typed')
const searchBttn = document.querySelector('#search-button')
const geoLocation = document.querySelector('#geolocation')
const displayCity = document.querySelector('#display-city')
const day5 = document.querySelector('#5-day')
// create let

var lat;
var lon;
const cityEl = document.getElementById("city-typed").value;

let geographicLoc = `http://api.openweathermap.org/geo/1.0/direct?q=`+ cityEl + `&limit=1&appid=b6b2126e212f7ac9ffeaf9811e11740e`
let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=` + lat + `&lon=` + lon + `&appid=e0d0342711380951f5bd4469a6759963`
let currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=`+ lat + `&lon=`+ lon + `&appid=e0d0342711380951f5bd4469a6759963`

var card1 = document.createElement("<a>")
var card2 = document.createElement("<a>")
var card3 = document.createElement("<a>")
var card4 = document.createElement("<a>")
var card5 = document.createElement("<a>")

card1.setAttribute("col-1 p-5 m-3 card")
card2.setAttribute("col-1 p-5 m-3 card")
card3.setAttribute("col-1 p-5 m-3 card")
card4.setAttribute("col-1 p-5 m-3 card")
card5.setAttribute("col-1 p-5 m-3 card")

day5.appendChild(card1,card2, card3, card4, card5)

//req url geo api

//req url weather api
citySearch.addEventListener('submit', function(event){
    event.preventDefault();
    // localStorage.setItem("weatherUrl", weatherUrl)
    // localStorage.setItem("geographicLoc", geographicLoc)
    // localStorage.setItem("lan", lan);
    // localStorage.setItem("lon", lon);
    // localStorage.setItem("citySelect", citySelect);
    document.getElementById("geoLocation").innerHTML = cityEl;
    console.log(cityEl)
    console.log(weatherUrl)
    
    async function callLocation(geographicLoc){
        const response = await fetch(geographicLoc);
        var data = await response.json();
        console.log(data);
        if (response.ok) {
            response.json()          
        } else {
            alert('Error: ' + response.statusText);
        }} 
    callLocation();
});  

var getGeoLoc = function(cityEl){
    fetch(geographicLoc)
    .then(function(response) {
        if (response.ok) {
            console.log(response);
            response.json().then(function (data) {
                console.log(data)
            })
        }
    })
}

    // fetch(geographicLoc, {
    //     type: 'GET',
    //     url: geoLocation,
    //     success: function(data)
    //     })
    // .then(function (response) {

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