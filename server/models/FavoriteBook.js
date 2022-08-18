const mongoose = require("mongoose");

const FavoriteBook = mongoose.model("FavoriteBook", {
  title: String,
  imgUrl: String,
  author: String,
  rating: Number,
});

module.exports = FavoriteBook;
