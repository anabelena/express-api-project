const express = require("express");
const app = express(); //create server

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
