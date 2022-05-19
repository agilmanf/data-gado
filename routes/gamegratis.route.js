const express = require("express");
const router = express.Router();

const getData = require("../controllers/gamegratis.controller");

router.get("/", getData);

module.exports = router;
