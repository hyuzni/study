const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-clock h1")

function set2Length(time) {
  return time < 10 ? `0` + time : time
}
function getTime() {
  const date = new Date()
  const minute = set2Length(date.getMinutes())
  const hours = set2Length(date.getHours())
  const seconds = set2Length(date.getSeconds())
  clockTitle.innerText = `${hours}:${minute}:${seconds} `
}
function init() {
  getTime()
  setInterval(getTime, 1000)
}
init()
