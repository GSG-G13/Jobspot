const jobSearch = require("./controllers");

const router = require("express").Router();

router.get("/jobs/:word", jobSearch);

module.exports = router;
