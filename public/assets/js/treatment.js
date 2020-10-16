$(document).ready(function () {
  console.log("connected");

  const treatment_name = $("#treatment_name");
  const progress_note = $("#progress_note");
  const athlete = $("#athlete");
  
  //   $("#add-athlete").click(function () {
  //     $("add-athlete-form").toggle();
  //     $("add-athlete").hide();
  //     console.log("clicked");
  //   });

  $("#submit-treatment").click(function (event) {
    event.preventDefault();
    // upsertAthlete();
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

  // function handleAthleteFormSubmit(event) {
  //   event.preventDefault();
  //   if (
  //     !nameInput.val().trim() ||
  //     !injurySiteInput.val().trim() ||
  //     !injuryInput.val().trim()
  //   ) {
  //     return;
  //   }
  //   athleteTreatment({
  //     treatment_name: nameOfTreatment.val().trim(),
  //     length_of_time: lengthOfTime.val().trim(),
  //   });
  // }

  function athleteTreatment(treatmentAthlete) {
    $.post("/api/treatment", treatmentAthlete).then(() => location.reload());
  }
});