const express = require("express");
const router = express.Router();

var User = require("../models/index");

router.get("/show", function (req, res) {
  User.find({}, function (err, result) {
  res.render("show", { users: result });
  });
});

module.exports = router;
