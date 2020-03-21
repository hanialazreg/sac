const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.send("just testing  ");
});

app.listen(3000);
