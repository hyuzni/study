const fs = require("fs")
const download = require("image-downloader")

// crawling website for download image file with .har file
// HAR (HTTP Archive) is a file format used by several HTTP session tools to export the captured data
const fileContents = fs.readFileSync("./download/m.nonghyupmall.com.har")
const jsonContents = JSON.parse(fileContents)
const entries = jsonContents.log.entries

entries.forEach((entry) => {
  if (entry._resourceType === "image") {
    //
    options = {
      url: entry.request.url,
      dest: "./download/images",
      // dest: '/path/to/dest/photo.jpg', save with an another filename
      // extractFilename: false,
    }
    download
      .image(options)
      .then(({ filename }) => {
        console.log("Saved to", filename) // saved to /download/images
      })
      .catch((err) => console.error(err))
  }
})
