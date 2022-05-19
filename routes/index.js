const express = require("express");
const router = express.Router();

const gamegratisRouters = require("./gamegratis.route");

router.use("/gamegratis", gamegratisRouters);

router.get("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = router;
