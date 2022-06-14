const { Router } = require("express");
const { gamesGet, gamesPost } = require("../endpoints/games");

const router = Router();

router.get("/games", gamesGet);

router.post("/games", gamesPost);

module.exports = router;
