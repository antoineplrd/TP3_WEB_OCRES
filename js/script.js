
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather


  let city = document.getElementById('city-input').value;


  const apiWeather = new API_WEATHER(city);
  const apiWeather2 = new API_WEATHER(city);
  const apiWeather3 = new API_WEATHER(city);
  const apiWeather4 = new API_WEATHER(city);

  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function (response) {
      // Récupère la donnée d'une API
      const data = response.data;


      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);


      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;


    })
  apiWeather2
    .fetchTomorrowForecast()
    .then(function (response2) {
      // Récupère la donnée d'une API
      const data = response2.data;


      // On récupère l'information principal
      const main2 = data.list[0].weather[0].main;
      const description2 = data.list[0].weather[0].description;
      const temp2 = data.list[0].temp.day;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main2;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description2;
      document.getElementById('icon2-weather-container').innerHTML = icon2;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp2}°C`;


    })

  apiWeather3
    .fetchTomorrow2Forecast()
    .then(function (response3) {
      // Récupère la donnée d'une API
      const data = response3.data;


      // On récupère l'information principal
      const main3 = data.list[1].weather[0].main;
      const description3 = data.list[1].weather[0].description;
      const temp3 = data.list[1].temp.day;
      const icon3 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow2-forecast-main').innerHTML = main3;
      document.getElementById('tomorrow2-forecast-more-info').innerHTML = description3;
      document.getElementById('icon3-weather-container').innerHTML = icon3;
      document.getElementById('tomorrow2-forecast-temp').innerHTML = `${temp3}°C`;


    })

  apiWeather4
    .fetchTomorrow3Forecast()
    .then(function (response4) {
      // Récupère la donnée d'une API
      const data = response4.data;


      // On récupère l'information principal
      const main4 = data.list[2].weather[0].main;
      const description4 = data.list[2].weather[0].description;
      const temp4 = data.list[2].temp.day;
      const icon4 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow3-forecast-main').innerHTML = main4;
      document.getElementById('tomorrow3-forecast-more-info').innerHTML = description4;
      document.getElementById('icon4-weather-container').innerHTML = icon4;
      document.getElementById('tomorrow3-forecast-temp').innerHTML = `${temp4}°C`;


    })

}


