const express = require("express");
const router = express.Router();


//VIEWS ROUTES

router.get("/trainers", (req, res) => {
    ///what needs to be displayed
    //DB query

    res.render("trainers/trainers");
});

router.get ("/trainers/new", (req, res) => {
    res.render("trainers/new-trainer");
});

router.get ("/trainers/:id", (req, res) => {
    res.render("trainers/single-trainer");
});

router.get ("/trainers/:id/edit", (req, res) => {
    res.render("trainers/edit-trainer");
});




// //API ROUTES
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