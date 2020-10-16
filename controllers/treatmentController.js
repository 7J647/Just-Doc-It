const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/treatment", (req, res) => {
    db.Treatment.findAll().then((allTreatment) => {
        res.render("treatments/treatments", { allTreatment: allTreatment });
    });
});

router.get("/treatment/:id", (req, res) => {
    db.Treatment.findAll({
        where: {
            AthleteId: req.params.id,
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
    const newTreatment = req.body;
    newTreatment.AthleteId = 1;
    db.Treatment.create(newTreatment)
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

router.put("/api/treatment/:id", (req, res) => {
    db.Treatment.update(req.body, {
        where: {
            id: req.params.id,
        },
    }).then((updatedTreatment) => {
        console.log(updatedTreatment);
        res.json({
            error: false,
            data: updatedTreatment,
            message: "Successfully updated athlete's treatment.",
        });
        // res.end();
        // });
    })
        .catch((err) => {
            console.log(err);
            res.status(500).json({
                error: true,
                data: null,
                message: "Unable to update athlete's treatment.",
            });
        });
});


router.delete("/api/treatment/:id", (req, res) => {
    db.Treatment.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deletedTreatment) => {
      console.log(deletedTreatment);
      res.json({
        error: false,
        data: deletedTreatment,
        message: "Successfully deleted athlete's treatment even though I'm not supposed to.",
      });
   })
     .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to delete athlete's treatment.",
    });
  });
});



module.exports = router;