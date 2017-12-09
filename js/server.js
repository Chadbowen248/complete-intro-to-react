const express = require("express")
const cors = require('cors');
const Axios = require("axios")
// const fs = require("fs")
const request = require("request")

const app = express()
app.use(cors());

app.get("/comicvine_api", (req, res) => {
  const searchTerm = req.query.search_term
  const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
  const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
  Axios.get(URL).then(response => res.send(response.data.results))
})

app.get("/saveImage/:imageUrl/:id", (req, res) => {
  const imageData = req.params.imageUrl
  const comicId = req.params.id
  // res.set({
  //   'Content-Type': 'text/plain',
  //   'Content-Length': '123',
  //   'fuck': 'public'
  // })
  res.writeHead(200, {
    'Content-Type': 'image/jpeg' ,
    'Cache-Control': 'max-age=31536000',
    'etag': `${Date.now()}`

  });
  const imgUrl = decodeURIComponent(imageData);
  request.get({
    url: imgUrl,
    headers:{
      'User-Agent': 'request'
    }
  })
  .pipe(res)
  // .pipe(fs.createWriteStream(`public/img/${comicId}.jpg`))
  // .on("close", () => res.send())

})


app.listen(3000, () => console.log("Example app listening on port 3000!"))
