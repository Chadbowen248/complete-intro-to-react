const express = require("express")
const cors = require('cors');
const Axios = require("axios")
const fs = require("fs")
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
  const imgUrl = decodeURIComponent(imageData);
  console.log(imgUrl)
  // console.log('content-type:', res.headers['content-type']);
  // console.log('content-length:', res.headers['content-length']);
  // request(imgUrl).pipe(fs.createWriteStream(`public/img/${comicId}.jpg`))
  // 
  request({
  url: imgUrl,
  headers: {
    'User-Agent': 'request'
  }
  // encode: 'binary'
}, function(error, response, body) {
    fs.writeFile(`public/img/${comicId}.jpg`, body, 'binary', function (err) {console.log(err)});
  });
  // res.send("sent ok")
  });
  // console.log(imgUrl, ' yup this is working')
// })

app.listen(3000, () => console.log("Example app listening on port 3000!"))



// var download = function(uri, filename, callback){
// request.head(uri, function(err, res, body){

// };

// download('https://www.google.com/images/srpr/logo3w.png', 'google.png', function(){
// console.log('done');
// });