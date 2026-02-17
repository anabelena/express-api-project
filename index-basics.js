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

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Cliente envia datos al Server
app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("new user created");
});

//Request Params (son de tipo string)
app.get("/hello/:username", (req, res) => {
  console.log(req.query);
  console.log(req.query.user);
  console.log(req.query.age);
  res.send(`Bonjour ${req.params.username.toUpperCase()}!`);
});

app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("lista de libros de js");
  } else {
    res.send("pagina normal");
  }
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(x) + parseInt(y);
  console.log(result);
  res.send(`result: ${result}`);
});

app.get("/name/:nombre/age/:age", (req, res) => {
  res.send(`User ${req.params.nombre} has ${req.params.age} years.`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
