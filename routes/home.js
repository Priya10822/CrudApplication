const express = require("express");
const router = express.Router();
var User = require("../models/index.js");
router.get("/", function (req, res) {
  res.render("insert");
});

router.get("/delete/:id", async function (req, res) {
  await User.findByIdAndDelete(req.params.id);
  res.redirect("/show");
});

router.get("/edit/:id", function (req, res) {
  User.findById(req.params.id, function (err, result) {
    res.render("edit", { users: result });
  });
});

router.post("/update/:id", async function (req, res) {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/show");
});

module.exports = router;
