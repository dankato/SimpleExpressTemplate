const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/about", function(req, res) {
  res.render("about", { title: "About Me" });
});

app.get("/contact", function(req, res) {
  res.render("contact", { title: "Contact Me" });
});

const port = 3000;
app.listen(port);
console.log(`listening on port ${port}`);
