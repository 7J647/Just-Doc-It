$(document).ready(function () {
    const nameInput = $("#athlete_name");
    const sportInput = $("#sport");
    const injurySiteInput = $("#injury_site");
    const injuryInput = $("#injury");
    const athleteID = $("#id");
    const athleteList = $("tbody");
    const athleteContainer = $(".author-container");



$("#update-athlete").click(function (event) {
    event.preventDefault();
    // upsertAthlete();
    console.log("add");
    if (
      !nameInput.val().trim() ||
      !injurySiteInput.val().trim() ||
      !injuryInput.val().trim()
    ) {
      return;
    }
    console.log($(this).attr("data-id"));
    updateAthlete({
      athlete_name: nameInput.val().trim(),
      sport: sportInput.val().trim(),
      injury_site: injurySiteInput.val().trim(),
      injury: injuryInput.val().trim(),
    },
        $(this).attr("data-id")
     );
  });

//   function handleUpdateFormSubmit(event) {
//     event.preventDefault();
//     if (
//       !nameInput.val().trim() ||
//       !injurySiteInput.val().trim() ||
//       !injuryInput.val().trim()
//     ) {
//       return;
//     }
//     updateAthlete({
//       athlete_name: nameInput.val().trim(),
//       sport: sportInput.val().trim(),
//       injury_site: injurySiteInput.val().trim(),
//       injury: injuryInput.val().trim(),
//     });
//   }

  function updateAthlete(athleteData,id) {
    $.ajax({method: "PUT", url: "/api/athlete/" + id, data: athleteData}).then(() => location.reload());
  }
});



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
