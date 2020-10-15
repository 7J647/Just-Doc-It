$(document).ready(function () {
    // Getting jQuery references to the post body, title, form, and treatment select
    const bodyInput = $("#body");
    const injuryLocation = $("#injuryLocation");
    const treatmentForm = $("#treatment-form");
    const athleteSelect = $("athlete");

    // add event listener when form is saved
    $(treatmentForm).on("save", handleTreatmentForm);

    const url = window.location.search;
    const postId;
    const athleteId;
    const updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In '?post_id=1', postId is 1
    if (url.indexOf("?post_id=") !== -1) {
        postId = url.split("=")[1];
        getPostData(postId, "post");
    }
    // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    else if (url.indexOf("?athlete_id=") !== -1) {
        athleteId = url.split("=")[1];
    }

    getAthletes();

    function handleTreatmentForm(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a injury-site, injury, treatment, or athlete
        if (!titleInput.val().trim() || !bodyInput.val().trim() || !athleteSelect.val()) {
          return;
        }
        // Constructing a newPost object to hand to the database
        var newPost = {
          injuryLocation: injuryLocation
            .val()
            .trim(),
          body: bodyInput
            .val()
            .trim(),
          AthleteId: athleteSelect.val()
        };

        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        }
        else {
            submitPost(newPost);
        }
    }

    // Submits a new post and brings user to athlete page upon completion
  function submitPost(post) {
    $.post("/api/athlete", post, function() {
      window.location.href = "/athlete";
    });
  }

  // Gets post data for the current post if we're editing, or if we're adding to an athlete's existing treatments
  function getPostData(id, type) {
    var queryUrl;
    switch (type) {
    case "post":
      queryUrl = "/api/athlete/" + id;
      break;
    case "athlete":
      queryUrl = "/api/athlete/" + id;
      break;
    default:
      return;
    }
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AthleteId || data.id);
        // If this post exists, prefill our cms forms with its data
        injuryLocation.val(data.injuryLocation);
        bodyInput.val(data.body);
        athleteId = data.AthleteId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get Authors and then render our list of Authors
  function getAthletes() {
    $.get("/api/athlete", renderAthleteList);
  }
  // Function to either render a list of authors, or if there are none, direct the user to the page
  // to create an author first
  function renderAthleteList(data) {
    if (!data.length) {
      window.location.href = "/athlete";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createAthleteRow(data[i]));
    }
    athleteSelect.empty();
    console.log(rowsToAdd);
    console.log(athleteSelect);
    athleteSelect.append(rowsToAdd);
    athleteSelect.val(athleteId);
  }

   // Update a given post, bring user to the blog page when done
   function updatePost(post) {
    $.ajax({
      method: "PUT",
      url: "/api/athlete",
      data: post
    })
      .then(function() {
        window.location.href = "/athlete";
      });
  }



})