const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

router.get("/", (req, res) => {
  Hero.getHero(res);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Hero.getHeroById(id, res);
});

module.exports = router;
