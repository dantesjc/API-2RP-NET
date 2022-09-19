const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.post("/cadastro", function (req, res) {
    res.send("Código" + req.body.code)
})

app.listen(3000, () => {
    console.log("rodando na porta 3000");
  });