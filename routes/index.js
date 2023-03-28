const express = require("express");
const router = express.Router();
router
  .route("/")
  .get((req, res) => {
    res.status(200).send("<h1>Welcome! to Chitkara University</h1>");
  })
  .post((req, res) => {
    res.status(200).json({
      message: "Welcome! to Chitkara University",
    });
  });

module.exports = router;
