const express = require("express") // commonJS
// import express from "express" // es6
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send(`Hello, test express module`)
})

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`)
})
