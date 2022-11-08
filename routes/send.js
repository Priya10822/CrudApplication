const express = require("express");
const router = express.Router();
var User = require("../models/index");

router.post("/insert", function (req, res) {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  user.save(() => {
    res.send("<h1>Data send successfully......</h1>");
  });
});

module.exports = router;
