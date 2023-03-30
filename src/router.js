const jobSearch = require("./controllers");

const router = require("express").Router();

const path = require("path");

router.get("/jobs/:word", jobSearch);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

router.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "public", "html", "404.html"));
});

router.use((err, req, res) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, "..", "public", "html", "500.html"));
});
