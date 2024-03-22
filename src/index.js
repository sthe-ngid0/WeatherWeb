function displayTemperature(response) {
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature = Math.round(response.data.temperature.current);
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time *1000);
    let iconElement = document.querySelector("#icon");
    
    
    
    iconElement.innerHTML =`<img src ="${response.data.condition.icon_url}"
    class="current-temperature-icon"/>`

    console.log(response.data.condition.description);

    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}Km/h`;
    temperatureElement.innerHTML = temperature;
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
  
    let apiKey = "b2a5adcct04b33178913oc335f405433";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  function formatDate(date){
    
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday"];
    let day = days[date.getDay()];

    if (minutes< 10){
      minutes = `0${minutes}`;
    }

    return `${day} ${hours}:${minutes}`;
  }
  

  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", search);
