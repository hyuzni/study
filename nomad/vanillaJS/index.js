// String
const value01 = "alice"

// Boolean
const value02 = true // true = 1 or false = 0

// Number
const value03 = 123

// float
const value04 = 55.555

// Array(camel case)
const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

// Object
const aliceInfo = {
  name: "alice",
  age: 32,
  favStar: ["BTS", "CNblue", "IU"],
  favFood: [
    { name: "chicken", flavor: "spicy" },
    { name: "coffee", flavor: "americano" },
  ],
}
// const 의 변수 데이터는 바꿀 수 없지만 object value 값은 변경 가능
// alert(aliceInfo)
console.log(aliceInfo)

function sayHello(name, age) {
  console.log("HELLO " + name + "you are " + age + "years old")
  return `Hello ${name}! you are ${age} years old`
}

const greetAlice = sayHello("alice", 32)
console.log(greetAlice) // sayHello return

const calculator = {
  plus: function (x, y) {
    return x + y
  },
  minus: function (x, y) {
    return x - y
  },
}

console.log(calculator.plus(1, 45))

//const title = document.getElementById("title")
const title = document.querySelector("#title")
// title is DOM
// Document Object Model
title.innerHTML = "inner HTML !"
title.style.color = "red"
console.dir(title)

document.title = "change title"

function handleResize(e) {
  console.log(e)
  console.log("i have been resized")
}
window.addEventListener("resize", handleResize()) // 바로 호출되는 함수
window.addEventListener("resize", handleResize) // 이벤트가 발생할 때만 실행되는 함수

function handleClick(e) {
  title.style.color = "black"
}
title.addEventListener("click", handleClick)
