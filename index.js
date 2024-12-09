const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.set("view engine", "njk");

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index", { authError: null });
});


app.listen(PORT, () => {
  console.log(`server started => http://localhost:${PORT}`);
});
