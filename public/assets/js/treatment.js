$(document).ready(function () {
  console.log("connected");

  const treatment_name = $("#treatment_name");
  const progress_note = $("#progress_note");
  const athlete = $("#athlete");


  $("#submit-treatment").click(function (event) {
    event.preventDefault();
    console.log("submit");
    if (
      !treatment_name.val().trim() ||
      !progress_note.val().trim()
    ) {
      return;
    }
    athleteTreatment({
      treatment_name: treatment_name.val().trim(),
      AthleteId: athlete.val(),
      progress_note: progress_note.val().trim(),
    });
  });


  function athleteTreatment(treatmentAthlete) {
    $.post("/api/treatment", treatmentAthlete).then(() => location.reload());
  }
});