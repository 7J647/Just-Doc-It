const express = require("express");
const router = express.Router();


//VIEWS ROUTES

router.get("/trainers", (req, res) => {
    ///what needs to be displayed
    //DB query

    res.render("trainers");
});

router.get ("/trainers/new", (req, res) => {
    res.render("new-trainer");
});

router.get ("/trainers/:id", (req, res) => {
    res.render("single-trainer");
});

router.get ("/trainers/:id/edit", (req, res) => {
    res.render("edit-trainer");
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