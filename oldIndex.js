// var histWeatherURL = `https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=${startDate}&end=${endDate}&appid=${APIkey}`;
// // const oldAPIkey = "029f73215f94df358a06425c3bef0fed";
// // const APIkey = "8720fd3d180e90a4af8f52c965c577ed";
// var lat = "47.560850";
// var lon = "-122.287210";
// var startDate = "02/01/2019";
// var endDate = "02/14/2019";

// //   Initial function to call to API
// var historicWeather = function () {

//     fetch(histWeatherURL)
//         .then(function (response) {
//             console.log(response.status);
//             if (response.status !== 200) {
//                 console.log("CHECK NETWORK")
//             }
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data);
//             // Created lat and long dynamically by taking from the first API pull to make sure 5 day forecast is pulling correct city
//         })}

// historicWeather();