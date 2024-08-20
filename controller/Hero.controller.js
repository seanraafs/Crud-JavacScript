const express = require("express");
const router = express.Router();
const Hero = require("../model/Hero.model");

// get all hero list
router.get("/", (req, res) => {
  Hero.getHero(res);
});

// get hero by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Hero.getHeroById(id, res);
});

// update or edit hero
router.post("/update", (req, res) => {
  const data = {
    id: req.body.id,
    name: req.body.name,
    role: req.body.role,
  };
  Hero.updateHeroById(data, res);
});

// add hero
router.post("/add", (req, res) => {
  const data = {
    name: req.body.name,
    role: req.body.role,
  };
  Hero.addHero(data, res);
});

// remove hero
router.post("/remove", (req, res) => {
  const id = req.body.id;
  Hero.removeHero(id, res);
});

module.exports = router;
