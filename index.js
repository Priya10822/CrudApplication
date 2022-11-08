var express = require("express");
var app = express();

var bodyparser = require("body-parser");

var homeRoutes = require("./routes/home");
var insertRoutes = require("./routes/send");
var showRoutes = require("./routes/admin");

require("./models/mongoose");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("view engine", "ejs");

app.use(homeRoutes);
app.use(insertRoutes);
app.use(showRoutes);
app.use("/delete/:id", homeRoutes);
app.use("/edit/:id", homeRoutes);
app.use("/update/:id", homeRoutes);

var server = app.listen(4000, function () {
  console.log("Go to port number 4000");
});
