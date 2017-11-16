const express = require("express")
const bodyParser = require("body-parser")
const Axios = require("axios")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Orgin", "*")
  res.header("Access-Control-Allow-Orgin", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.get("/comicvine_api", (req, res) => {
  const searchTerm = req.query.search
  const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
  const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
  Axios.get(URL).then(response => console.log(response.data.results))
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))
