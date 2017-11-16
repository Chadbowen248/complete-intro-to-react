const express = require("express")
const cors = require('cors');
const Axios = require("axios")

const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Orgin", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next()
// })
app.use(cors()); 

app.get("/comicvine_api", (req, res) => {
  const searchTerm = req.query.search_term
  console.log(req.query)
  const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
  // const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=batman&resources=volume`
  const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
  console.log(URL)
  Axios.get(URL).then(response => res.send(response.data.results))
})

app.listen(3000, () => console.log("Example app listening on port 3000!"))
