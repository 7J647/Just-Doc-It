const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/athlete", (req, res) => {
    db.Athlete.findAll().then((allAthlete) => {
      res.render("athletes/athletes", { allAthlete: allAthlete });
    });
  });

//   router.get ("/athlete/new", (req, res) => {
//     res.render("athlete/new-athlete");
// });

router.get ("/athlete/:id", (req, res) => {
    db.Athlete.findOne({
        where: {
            id: req.params.id,
        },
    }).then((foundAthlete) => {
        console.log(foundAthlete);
        res.render("athletes/single-athlete", {
            athlete_name: foundAthlete.athlete_name,
            sport: foundAthlete.sport,
            injury_site: foundAthlete.injury_site,
            injury:  foundAthlete.injury
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
})


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

  router.put("/api/athlete/:id", (req, res) => {
    db.Athlete.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((updatedAthlete) => {
      console.log(updatedAthlete);
      res.json({
        error: false,
        data: updatedAthlete,
        message: "Successfully updated athlete.",
      });
      // res.end();
    // });
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update athlete.",
    });
  });
});

  router.delete("/api/athlete/:id", (req, res) => {
    db.Athlete.destroy({
      where: {
        id: req.params.id,
      },
    }).then((deletedAthlete) => {
      console.log(deletedAthlete);
      res.json({
        error: false,
        data: deletedAthlete,
        message: "Successfully deleted athlete.",
      });
   })
     .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "Unable to delete athlete.",
    });
  });
});

  module.exports = router;