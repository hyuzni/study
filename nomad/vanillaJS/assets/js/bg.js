const body = document.querySelector("body")

const IMG_NUMBER = 3

function paintImage(imageNumber) {
  const image = new Image()
  image.src = `../assets/images/${imageNumber + 1}.jpg`
  image.classList.add("bg-img")

  body.append(image)
}
function getRandom() {
  const number = Math.floor(Math.random() * 3) // 0 ~ 2
  return number
}
function init() {
  const randomNumber = getRandom()
  paintImage(randomNumber)
}
init()
