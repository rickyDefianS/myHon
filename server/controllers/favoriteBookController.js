const FavoriteBook = require("../models/FavoriteBook");

class favoriteBookController {
  static async getFavoriteBooks(req, res) {
    try {
      await FavoriteBook.find()
        .select("-__v")
        .sort({ title: "asc" })
        .then((favoriteBooks) => {
          res.status(200).json(favoriteBooks);
        });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }

  static async postFavoriteBook(req, res) {
    try {
      const { title, imgUrl, author, rating } = req.body;
      const newFavoriteBook = new FavoriteBook({
        title,
        imgUrl,
        author,
        rating,
      });

      await newFavoriteBook.save().then((newFavoriteBook) => {
        res.status(201).json(newFavoriteBook);
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  }
}

module.exports = favoriteBookController;
