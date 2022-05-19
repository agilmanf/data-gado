const Games = require("../models/gamegratis/games.model");

async function getData(req, res) {
  try {
    const offset = req.query.offset | 0;
    const limit = req.query.limit | 0;

    // filter params
    const search = req.query.search ? req.query.search : ".*";
    const platform = req.query.platform ? req.query.platform : ".*";
    const category = req.query.category ? req.query.category : ".*";

    //sort params
    let sortParams = { release_date: "desc" };
    switch (req.query.sort) {
      case "asc":
        sortParams = { title: "asc" };
        break;
      case "desc":
        sortParams = { title: "desc" };
        break;
    }

    const data = await Games.find({
      $and: [
        { genre: { $regex: new RegExp(category, "i") } },
        { platform: { $regex: new RegExp(platform, "i") } },
        { title: { $regex: new RegExp(search, "i") } },
      ],
    })
      .skip(offset)
      .limit(limit)
      .sort(sortParams);

    res.json(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

module.exports = getData;
