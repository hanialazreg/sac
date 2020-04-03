const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dbconnection = require("./backend/config/database");
const adminRoutes = require("./backend/routes/adminroute");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

let con = dbconnection();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
app.use("/admin", adminRoutes);
