const COORDS = "coords"
const API_KEY = "7f02ab5bd27ffaebf7dc5fca71eb35b3"
const weather = document.querySelector(".js-weather")

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const temperature = json.main.temp
      const place = json.name
      weather.innerText = `${temperature} @ ${place}`
    })
}

function saveCoords(obj) {
  localStorage.setItem("coords", JSON.stringify(obj))
}
function handleGeoSuccess(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coordsObj = {
    latitude,
    longitude,
  }
  saveCoords(coordsObj)
  getWeather(latitude, longitude)
}
function handleGeoError(position) {
  console.log(position)
}
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}
function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS)
  if (loadedCoords === null) {
    askForCoords()
  } else {
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}
function init() {
  loadCoords()
}
init()
