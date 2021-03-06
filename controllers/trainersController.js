const express = require("express");
const router = express.Router();
const db = require("../models");


//VIEWS ROUTES

router.get("/trainer", (req, res) => {
  db.Trainer.findAll().then((allTrainers) => {
    res.render("trainers/trainers", { allTrainers: allTrainers });
  });
});


router.get("/trainers/:id/edit", (req, res) => {
  res.render("trainers/edit-trainer");
});


// //API ROUTES

router.post("/api/trainer", (req, res) => {
  console.log(req.body);
  db.Trainer.create(req.body)
    .then((newTrainer) => {
      res.json({
        error: false,
        data: newTrainer,
        message: "Successfully created new trainer.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to create new trainer.",
      });
    });
});


module.exports = router;