var http = require("http")
var fs = require("fs") // file system
var qs = require("querystring")
var url = require("url")
const { query } = require("express")

function templateHTML(title, list, content, control) {
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
      ${control}
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
      var control = ""
      fs.readFile(`data/${title}`, "utf-8", (err, content) => {
        if (title === undefined) {
          title = "welcome"
          content = "hello, node js"
          control = `<a href="/create">create</a>`
        } else {
          control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        }
        response.writeHead(200)
        response.end(templateHTML(title, list, content, control))
      })
    })
  } else if (pathname === "/create") {
    fs.readdir("./data", (err, files) => {
      var title = "WEB - create"
      var list = templateList(files)
      var template = templateHTML(
        title,
        list,
        `
          <form action="http://localhost:4000/create_process" method="post">
            <p><input type="text" name="title" placeholder="title" /></p>
            <p>
              <textarea name="description" placeholder="description"></textarea>
            </p>
            <p><input type="submit" /></p>
          </form>
        `,
        "" // control
      )
      response.writeHead(200)
      response.end(template)
    })
  } else if (pathname === "/create_process") {
    var body = ""
    request.on("data", (data) => {
      body = body + data
    })
    request.on("end", () => {
      var post = qs.parse(body)
      var title = post.title
      var description = post.description

      fs.writeFile(`data/${title}`, description, "utf-8", (err) => {
        response.writeHead(302, { Location: `/?id=${title}` }) // 302 : page redirection
        response.end("success")
      })
    })
  } else if (pathname === "/update") {
    fs.readdir("data", (err, files) => {
      var list = templateList(files)
      var control = ""
      fs.readFile(`data/${title}`, "utf-8", (err, content) => {
        if (title === undefined) {
          title = "welcome"
          content = "hello, node js"
          control = `<a href="/create">create</a>`
        } else {
          control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        }
        response.writeHead(200)
        response.end(
          templateHTML(
            title,
            list,
            `
              <form action="/update_process" method="post">
                <p>
                  <input type="hidden" id="title" value="${title}"/>
                  <input type="text" name="title" placeholder="title" value="${title}"/></p>
                <p>
                  <textarea name="description" placeholder="description">${content}</textarea>
                </p>
                <p><input type="submit" /></p>
              </form>
            `,
            ""
          )
        )
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
