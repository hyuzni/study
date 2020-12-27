var fs = require("fs")

//readFileSync. 동기
console.log("A") // 1
var result = fs.readFileSync("./nodejs/sample.txt", "utf-8")
console.log(result) // 2
console.log("B") // 3

//readFile. 비동기
console.log("C") // 1
fs.readFile("./nodejs/sample.txt", "utf-8", (err, result) => {
  console.log(result) // 3
})
console.log("D") // 2