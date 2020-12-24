const download = require("image-downloader")

options = {
  url: "http://m.nonghyupmall.com/img/logo_mall_1.png",
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
