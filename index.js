const express = require("express");

const app = express(); //create server

// Middleware => Functions que se ejecutan previas a la respuesta del servidor

// middleware: logger
app.use((req, res, next) => {
  console.log(`Logger => Route:${req.url}, Method:${req.method}`);
  next();
});

app.get("/profile", (req, res) => {
  res.send("Profile page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

// middleware: isAuthenticated
app.use((req, res, next) => {
  if (req.query.login === "belen@gmail.com") {
    next();
  } else {
    res.send("Not authorized");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
