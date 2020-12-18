var http = require("http")
var fs = require("fs") // file system
var url = require("url")

var app = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query
  var title = queryData.id

  if (title == null) {
    title = "welcome"
  }
  if (request.url == "/") {
    request.url = "/index.html"
  }
  if (request.url == "/favicon.ico") {
    // return response.writeHead(404)
    response.writeHead(404)
    response.end()
    return
  }
  fs.readFile(`data/${queryData.id}`, "utf-8", (err, description) => {
    var template = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>WEB | ${title}</title>
          <meta charset="utf-8" />
        </head>
        <body>
          <h1><a href="/">${title}</a></h1>
          <ul>
            <li><a href="?id=html">HTML</a></li>
            <li><a href="?id=css">CSS</a></li>
            <li><a href="?id=JavaScript">JavaScript</a></li>
          </ul>
          <h2>${title}</h2>
          ${description}
        </body>
      </html>`

    response.writeHead(200)
    response.end(template)
  })

  // response.end(fs.readFileSync(__dirname + "/" + title))
  //   response.end(fs.readFileSync(__dirname + "/" + queryData.id))
})
app.listen(4000)
