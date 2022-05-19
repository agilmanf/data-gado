const Games = require("../models/gamegratis/games.model");

async function getData(req, res) {
  const offset = req.query.offset | 0;
  const limit = req.query.limit | 0;

  const data = await Games.find().skip(offset).limit(limit);
  res.json(data);
}

module.exports = getData;
