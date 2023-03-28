const express = require("express");
const router = express.Router();
const { handlePostRequest } = require("../controllers/post.controller");

router
  .route("/")
  .get((req, res) => {
    console.log("Get request in Post request handler", req.url);
    res.status(200).send("<h1>hit /bfhl endpoint with post request</h1>");
  })
  .post((req, res) => {
    console.log("/bfhl post request");
    // console.log(req.body);
    handlePostRequest(req, res);
  });

module.exports = router;
