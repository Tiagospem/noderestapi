const express = require("express");

const mongoose = require("mongoose");

const requiredDir = require("require-dir");

const cors = require("cors");

const port = 3333;

const app = express();

//permitir o formato de json via api
app.use(express.json());
app.user(cors())

mongoose.connect(
  "mongodb+srv://evopix:<password>@cluster0-6nple.mongodb.net/<db>?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);
//registra todos os models
requiredDir("./models/");

//define a base url
app.use("/api", require("./routes"));

app.listen(port, function() {
  console.log("servidor rodando na porta ", port);
});
