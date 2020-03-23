const express = require("express");
const bodyParser = require("body-parser");
const dbconnection = require("./backend/config/database");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.send("just testing  ");
});
let con = dbconnection();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
