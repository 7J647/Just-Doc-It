$(document).ready(function () {

    const nameInput = $("#athlete_name");
    const sportInput = $("#sport");
    const injurySiteInput = $("#injury_site");
    const injuryInput = $("#injury");

    $(document).on("click", ".delete-athlete", deletedAthlete);


    $("#delete-athlete").click(function (event) {
        event.preventDefault();
        // upsertAthlete();
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

    // Function for handling what happens when the delete button is pressed
// function handleDeleteButtonPress() {
//     var listItemData = $(this).parent("td").parent("tr").data("author");
//     var id = listItemData.id;
//     $.ajax({
//       method: "DELETE",
//       url: "/api/athlete/" + id
//     })
//     //   .then(getAuthors);
//   }
// });




