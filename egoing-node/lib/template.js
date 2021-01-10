module.exports = {
  HTML: function (title, list, content, control) {
    return `<!DOCTYPE html>
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
  },
  LIST: function (files) {
    if (files.length === 0) {
      return
    }
    var list = `<ul>`
    files.forEach((file) => {
      list += `<li><a href="?id=${file}">${file}</a></li>`
    })
    list += `</ul>`

    return list
  },
}
