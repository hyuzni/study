var http = require("http")
var fs = require("fs") // file system
var url = require("url")

function templateHTML(title, list, content) {
  var template = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>WEB | ${title}</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <h1><a href="/">${title}</a></h1>
      ${list}
      <h2>${title}</h2>
      ${content}
    </body>
  </html>`

  return template
}

function templateList(files) {
  if (files.length === 0) {
    return
  }
  var list = `<ul>`
  files.forEach((file) => {
    list += `<li><a href="?id=${file}">${file}</a></li>`
  })
  list += `</ul>`

  return list
}
var app = http.createServer(function (request, response) {
  var _url = request.url
  var queryData = url.parse(_url, true).query
  var pathname = url.parse(_url, true).pathname
  var title = queryData.id

  if (pathname === "/") {
    fs.readdir("data", (err, files) => {
      var list = templateList(files)

      fs.readFile(`data/${queryData.id}`, "utf-8", (err, content) => {
        if (title === undefined) {
          title = "welcome"
          content = "hello, node js"
        }
        response.writeHead(200)
        response.end(templateHTML(title, list, content))
      })
    })
  } else {
    response.writeHead(400)
    response.end("not found")
  }
  // response.end(fs.readFileSync(__dirname + "/" + title))
  // response.end(fs.readFileSync(__dirname + "/" + queryData.id))
})
app.listen(4000)
