const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json()); //parsea json a objeto
// Middleware Thirdparty to create logger
app.use(morgan("dev"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
