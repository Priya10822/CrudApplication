const mongoose = require("mongoose");
const dbURL = require("./url");
mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
var connection = mongoose.connection;

connection.once("open", function () {
  console.log("connect successfully");
});
