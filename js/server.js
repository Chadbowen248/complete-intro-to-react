const express = require("express");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Orgin", "*");
  res.header("Access-Control-Allow-Orgin", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.get("/test", (req, res) => {
  const testing = req.body.search_term
  console.log(req.body)
  res.send(testing)
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
