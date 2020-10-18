function getAthlete(name) {
  var categoryString = name || "";
  if (categoryString) {
    categoryString = "/category/" + categoryString;
  }
  $.get("/api/posts" + categoryString, function (data) {
    console.log("Posts", data);
    posts = data;
    if (!posts || !posts.length) {
      displayEmpty();
    } else {
      initializeRows();
    }
  });
}
