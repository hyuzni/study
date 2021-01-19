const COORDS = "coords"

const API_KEY = "7f02ab5bd27ffaebf7dc5fca71eb35b3"
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
  }
}
function init() {
  loadCoords()
}
init()
