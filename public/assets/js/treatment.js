$(document).ready(function () {
  console.log("connected");

  const nameOfTreatment = $("#treatment_name");
  const lengthOfTime = $("#length_of_time");
  
  //   $("#add-athlete").click(function () {
  //     $("add-athlete-form").toggle();
  //     $("add-athlete").hide();
  //     console.log("clicked");
  //   });

  $("#submit-treatment").click(function (event) {
    event.preventDefault();
    // upsertAthlete();
    console.log("add");
    if (
      !nameOfTreatment.val().trim() ||
      !lengthOfTime.val().trim() 
     ) {
      return;
    }
    athleteTreatment({
      treatment_name: nameOfTreatment.val().trim(),
      length_of_time: lengthOfTime.val().trim(),
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
    athleteTreatment({
      treatment_name: nameOfTreatment.val().trim(),
      length_of_time: lengthOfTime.val().trim(),
    });
  }

  function athleteTreatment(treatmentAthlete) {
    $.post("/api/treatment", treatmentAthlete).then(() => location.reload());
  }
});