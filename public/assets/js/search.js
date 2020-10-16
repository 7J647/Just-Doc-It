// var url = window.location.search;
// var authorId;
// if (url.indexOf("Athlete") !== -1) {
//   authorId = url.split("=")[1];
//   getPosts(authorId);
// }
// // If there's no authorId we just get all posts as usual
// else {
//   getPosts();
// }

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
