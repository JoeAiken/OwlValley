// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

app.get("/hops", function(req, res) {
  res.sendFile(path.join(__dirname, "public/hops.html"));
});

app.get("/liveStock", function(req, res) {
  res.sendFile(path.join(__dirname, "public/liveStock.html"));
});

app.get("/crops", function(req, res) {
  res.sendFile(path.join(__dirname, "public/crops.html"));
});

app.get("/message", function(req, res) {
  res.sendFile(path.join(__dirname, "public/message.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);
});