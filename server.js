var express = require("express");
var bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var app = express()
var PORT =  process.env.PORT || 3000;

//Can I just require this in scripts?
// var axios = require("axios");
// var cheerio = require("cheerio");

var routes = require("./routes");

app.use(express.static("public"));

// Connect Handlebars to our Express app (boilerplate)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser in our app (boilerplate)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScraper";

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);






app.listen(PORT, function() {
  console.log("App running on port " + PORT + ".");
});