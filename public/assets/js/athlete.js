$(document).ready(function () {
  console.log("connected");

  const nameInput = $("#athlete_name");
  const sportInput = $("#sport");
  const injurySiteInput = $("#injury_site");
  const injuryInput = $("#injury");

  //   $("#add-athlete").click(function () {
  //     $("add-athlete-form").toggle();
  //     $("add-athlete").hide();
  //     console.log("clicked");
  //   });

  $("#submit-athlete").click(function (event) {
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
    upsertAthlete({
      athlete_name: nameInput.val().trim(),
      sport: sportInput.val().trim(),
      injury_site: injurySiteInput.val().trim(),
      injury: injuryInput.val().trim(),
    });
  });

  function handleAthleteFormSubmit(event) {
    event.preventDefault();
    if (
      !nameInput.val().trim() ||
      !injurySiteInput.val().trim() ||
      !injuryInput.val().trim()
    ) {
      return;
    }
    upsertAthlete({
      athlete_name: nameInput.val().trim(),
      sport: sportInput.val().trim(),
      injury_site: injurySiteInput.val().trim(),
      injury: injuryInput.val().trim(),
    });
  }

  function upsertAthlete(athleteData) {
    $.post("/api/athlete", athleteData).then(() => location.reload());
  }
});
