const express = require("express");

const app = express(); //create server

// GET -> Cliente espera datos
app.get("/", (req, res) => {
  //   // sendfile(ruta archivo,objeto de opciones)
  //   res.sendFile("./static/index.html", {
  //     root: __dirname,
  //   });

  // res.end(""Hello world!");
  res.json({
    name: "belen",
    password: "hola",
    age: 40,
    points: [2, 8, 9],
  });
});

app.get("/isalive", (req, res) => {
  res.sendStatus(204);
});

//Cliente envia datos al Server
app.post();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
