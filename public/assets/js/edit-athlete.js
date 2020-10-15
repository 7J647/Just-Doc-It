// $(document).ready(function () {
//   const nameInput = $("#athlete_name");
//   const sportInput = $("#sport");
//   const injurySiteInput = $("#injury_site");
//   const injuryInput = $("#injury");
//   //   UPDATE
//   $("#update-athlete").click(function (event) {
//     event.preventDefault();
//     console.log("update");
//     function updateAthlete(athleteData) {
//       $.put("/api/athlete/:id", athleteData).then(() => location.reload());
//     }
//   });

//   updateAthlete({
//     athlete_name: nameInput.val().trim(),
//     sport: sportInput.val().trim(),
//     injury_site: injurySiteInput.val().trim(),
//     injury: injuryInput.val().trim(),
//   });

//   //     function updateAthlete(athleteData) {
//   //       $.put("/api/athlete/:id", athleteData).then(() => location.reload());
//   //     }
//   //   });
// });
