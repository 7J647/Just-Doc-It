const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/athlete", (req, res) => {
    db.Athlete.findAll().then((allAthlete) => {
      res.render("athletes/athletes", { allAthlete: allAthlete });
    });
  });

  router.post("/api/athlete", (req, res) => {
    console.log(req.body);
    db.Athlete.create(req.body)
      .then((newAthlete) => {
        res.json({
          error: false,
          data: newAthlete,
          message: "Successfully created new athlete.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to create new athlete.",
        });
      });
  });

  module.exports = router;