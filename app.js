const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const postsRoute = require("./routes/posts_route");
app.use("/posts", postsRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
