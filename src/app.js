require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./router");
const app = express();

app.set("port", 3000);
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(router);

module.exports = app;
