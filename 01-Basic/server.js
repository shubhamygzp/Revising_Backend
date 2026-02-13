const express = require("express");

// To create  a server
const app = express(); // It creates instance of the server

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/about", (req, res) => {
    res.send("About Page");
})

app.listen(3000); // To start a server