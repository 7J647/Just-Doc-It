const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/treatment", (req, res) => {
    db.Treatment.findAll().then((allTreatment) => {
      res.render("treatments/treatments", { allTreatment: allTreatment });
    });
  });

  router.get ("/treatment/:id", (req, res) => {
    db.Treatment.findOne({
        where: {
            id: req.params.id,
        },
    }).then((foundTreatment) => {
        console.log(foundTreatment);
        res.render("treatments/single-treatment", {
            treatment_name: foundTreatment.treatment_name,
            length_of_time: foundTreatment.length_of_time,
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "there has been an error.",
      });
});
});

router.post("/api/treatment", (req, res) => {
    console.log(req.body);
    db.Treatment.create(req.body)
      .then((newTreatment) => {
        res.json({
          error: false,
          data: newTreatment,
          message: "Successfully created new treatment.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to create new treatment.",
        });
      });
  });

  module.exports = router;