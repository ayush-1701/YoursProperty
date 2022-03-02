// importing packages
const express = require("express");
const admin = require("firebase-admin");
const bcrypt = require("bcrypt");
const path = require("path");

// declare static path
let staticPath = path.join(__dirname, "public");

// initializing express.js
const app = express();

// middlewares
app.use(express.static(staticPath));

// routes
// home route
app.get("/", (req, res) => {
  res.sendFile(path.join(staticPath, "home.html"));
});

// buy route
app.get("/buy", (req, res) => {
    res.sendFile(path.join(staticPath, "buy.html"));
});

// sell route
app.get("/sell", (req, res) => {
    res.sendFile(path.join(staticPath, "sell.html"));
});

// rent route
app.get("/rent", (req, res) => {
  res.sendFile(path.join(staticPath, "rent.html"));
});

// login route
app.get("/login", (req, res) => {
    res.sendFile(path.join(staticPath, "login.html"));
});

// signup route
app.get("/signup", (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
});

// adminlogin route
app.get("/login/admin", (req, res) => {
    res.sendFile(path.join(staticPath, "adminlogin.html"));
});

// profile route
app.get("/profile", (req, res) => {
    res.sendFile(path.join(staticPath, "profile.html"));
});

// adminlogin route
app.get("/profile/admin", (req, res) => {
    res.sendFile(path.join(staticPath, "adminprofile.html"));
});

// 404 route
app.get("/404", (req, res) => {
  res.sendFile(path.join(staticPath, "404.html"));
});

app.use((req, res) => {
  res.redirect("/404");
});

app.listen(3000, () => {
  console.log("listening on port 3000....");
});
