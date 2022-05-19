const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  short_description: {
    type: String,
    default: "",
  },
  game_url: {
    type: String,
  },
  platform: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    default: "",
  },
  developer: {
    type: String,
    default: "",
  },
  release_date: {
    type: String,
    default: "",
  },
  freetogame_profile: {
    type: String,
  },
});

const Books = mongoose.model("games", gamesSchema);
module.exports = Books;
