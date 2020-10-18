$(document).ready(function () {

    const nameInput = $("#athlete_name");
    const sportInput = $("#sport");
    const injurySiteInput = $("#injury_site");
    const injuryInput = $("#injury");

    $(document).on("click", ".delete-athlete", deletedAthlete);


    $("#delete-athlete").click(function (event) {
        event.preventDefault();
        console.log("delete");
        if (
            !nameInput.val().trim() ||
            !injurySiteInput.val().trim() ||
            !injuryInput.val().trim()
        ) {
            return;
        }
        console.log($(this).attr("data-id"));
        deletedAthlete({
            athlete_name: nameInput.val().trim(),
            sport: sportInput.val().trim(),
            injury_site: injurySiteInput.val().trim(),
            injury: injuryInput.val().trim(),
        },
            $(this).attr("data-id")
        );
    });

    function deletedAthlete(athleteData, id) {
        $.ajax({ method: "DELETE", url: "/api/athlete/" + id, data: athleteData })
            .then(() => window.location.assign("/athlete"));
    }
});





