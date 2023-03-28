const express = require("express");
require("dotenv").config();

const app = express();
const indexRouter = require("./routes/index");
const postRouter = require("./routes/post");
/**
 * Middleware
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * Route
 */
app.use("/", indexRouter);
app.use("/bfhl", postRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.log("Error in listening");
  console.log("Server listening on port " + process.env.PORT);
});
