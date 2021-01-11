var http = require("http")
var fs = require("fs") // file system
var qs = require("querystring")
var url = require("url")
const { query } = require("express")
var path = require("path")

var template = require("./lib/template.js")

//import sanitizeHtml from "sanitize-html"

var app = http.createServer(function (request, response) {
  var _url = request.url
  var queryData = url.parse(_url, true).query
  var pathname = url.parse(_url, true).pathname
  var title = queryData.id
  // var sanitizedTitle = sanitizeHtml(title)
  var filteredId = ""
  if (title === undefined) {
    var filteredId = ""
  } else {
    // path.parse 의 argument 는 string 형식만 받는다
    var filteredId = path.parse(queryData.id).base
  }
  // var filteredIdpath = queryData.id ? path.parse(queryData.id).base : ""

  if (pathname === "/") {
    fs.readdir("data", (err, files) => {
      var list = template.LIST(files)
      var control = ""
      fs.readFile(`data/${filteredId}`, "utf-8", (err, content) => {
        if (title === undefined) {
          title = "welcome"
          content = "hello, node js"
          control = `<a href="/create">create</a>`
        } else {
          control = `<a href="/create">create</a> 
                     <a href="/update?id=${title}">update</a>
                     <form action="/delete_process" method="post">
                       <input type="hidden" name="id" value="${title}" >
                       <input type="submit" value="delete" >
                     </form>
                     `
        }
        response.writeHead(200)
        response.end(template.HTML(title, list, content, control))
      })
    })
  } else if (pathname === "/create") {
    fs.readdir("./data", (err, files) => {
      var title = "WEB - create"
      var list = template.LIST(files)
      var body = template.HTML(
        title,
        list,
        `
          <form action="/create_process" method="post">
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
      response.end(body)
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
      var list = template.LIST(files)
      var control = ""
      fs.readFile(`data/${filteredId}`, "utf-8", (err, content) => {
        if (title === undefined) {
          title = "welcome"
          content = "hello, node js"
          control = `<a href="/create">create</a>`
        } else {
          control = `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
        }
        response.writeHead(200)
        response.end(
          template.HTML(
            title,
            list,
            `
              <form action="/update_process" method="post">
                <p>
                  <input type="hidden" name="id" value="${title}"/>
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
  } else if (pathname === "/update_process") {
    var body = ""
    request.on("data", (data) => {
      body = body + data
    })
    request.on("end", () => {
      var post = qs.parse(body)
      var id = post.id
      var title = post.title
      var description = post.description
      let fileId = path.parse(id).base

      fs.rename(`data/${fileId}`, `data/${title}`, (err) => {})

      console.log(post)
      fs.writeFile(`data/${title}`, description, "utf-8", (err) => {
        response.writeHead(302, { Location: `/?id=${title}` }) // 302 : page redirection
        response.end("success")
      })
    })
  } else if (pathname === "/delete_process") {
    var body = ""
    request.on("data", (data) => {
      body = body + data
    })
    request.on("end", () => {
      var post = qs.parse(body)
      var id = post.id
      let fileId = path.parse(id).base
      fs.unlink(`data/${fileId}`, function (err) {
        response.writeHead(302, { Location: `/` })
        response.end()
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
