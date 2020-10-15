const express = require("express");
const router = express.Router();
const db = require("../models");


//VIEWS ROUTES

router.get("/trainer", (req, res) => {
    db.Trainer.findAll().then((allTrainers) => {
        res.render("trainers/trainers", { allTrainers: allTrainers });
    });
});


// router.get ("/trainers/new", (req, res) => {
//     res.render("trainers/new-trainer");
// });

// router.get ("/trainer/:id", (req, res) => {
//     db.Trainer.findOne({
//         where: {
//             id: res.params.id,
//         },
//     }).then((foundTrainer) => {
//         console.log(foundTrainer);
//         res.render("single-trainer", {
//             trainer_name: foundTrainer.trainer_name,
//             id: foundTrainer.id,
//         });
//     });
// });
//     res.render("trainers/single-trainer");
// });

// router.get("/thing/:id", (req, res) => {
//     db.Thing.findOne({
//       where: {
//         id: req.params.id,
//       },
//     }).then((foundThing) => {
//       console.log(foundThing);
//       res.render("single-thing", {
//         name: foundThing.name,
//         price: foundThing.price,
//         id: foundThing.id,
//       });
//     });
//   });

router.get ("/trainers/:id/edit", (req, res) => {
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

//   router.put("/api/trainer/:id", (req, res) => {
//       db.Thing.update(req.body, {
//           where: {
//               id: req.params.id,
//           },
//       }).then((updatedTrainer) => {
//           console.log(updatedTrainer);
//           res.end();
//       });
//   });


//   router.put("/api/thing/:id", (req, res) => {
//     db.Thing.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     }).then((updatedObject) => {
//       console.log(updatedObject);
//       res.end();
//     });
//   });


// router.post("/api/trainers", function(req, res) {
//     trainer.create([
//       "trainer_name" 
//     ], [
//       req.body.trainer_name,
//     ], function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });






//API ROUTES









module.exports = router;