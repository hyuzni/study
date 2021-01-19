const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-grettings")

const USER_LS = "currentUser",
  SHOW_CN = "show"

function handlerSubmit(e) {
  e.preventDefault()
  const currentValue = input.value
  localStorage.setItem(USER_LS, currentValue)
  paintGreeting(currentValue)
}
function askForName() {
  gretting.classList.remove(SHOW_CN)
  form.classList.add(SHOW_CN)
  form.addEventListener("submit", handlerSubmit)
}
function paintGreeting(text) {
  form.classList.remove(SHOW_CN)
  gretting.classList.add(SHOW_CN)
  gretting.innerText = `Hello, ${text}`
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS)
  if (currentUser === null) {
    askForName()
  } else {
    paintGreeting(currentUser)
  }
}
function init() {
  loadName()
}
init()
