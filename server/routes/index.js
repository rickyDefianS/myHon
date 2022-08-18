const express = require("express");
const router = express.Router();
const favoriteBookController = require("../controllers/favoriteBookController");

router.get("/favorites", favoriteBookController.getFavoriteBooks);
router.post("/favorites", favoriteBookController.postFavoriteBook);

module.exports = router;
