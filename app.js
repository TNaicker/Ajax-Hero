console.log("App loaded");
console.log("Jquery select #search right away", $("#search"));

//WRAPPING ALL CODE INSIDE taco
// 1. Avoid global variables
// 2. Have a function we can call to run our App
// 3. Give that function to something like $(document).ready...
function taco() {
  console.log("Dom loaded!", $("#search"));

  var search = $("#search-title");
  var myImg = $("#results");
  var myDiv = $("#myResults");

  $("#search").on("submit", function (event) {
    event.preventDefault();
    console.log("Searching omdbapi");
    console.log(search.val());


    //SHORTHAND FOR ajax
    //AJAX STILL USED FOR MORE INFORMATIONAL BASED REQUESTS
    $.get("https://omdb-api.now.sh/?s=" + search.val(), {
    }).done(function(data) {
        console.log("COMPLETE!", data.Search);
        $(myDiv).empty();
        console.log(data);
        data.Search.forEach(function(el) {
          //Creating and pasting each image to new div
          var div = $("<div>").addClass("pictureDiv");
          var img = $("<img>").attr("src", el.Poster);
          var imageTitle = $("<h3>").text(el.Title);
          $(div).append(img);
          $(div).append(imageTitle);
          //Appending the div with the img to the holder div
          $(myDiv).append(div);
        })
      });
    })
}

//Wait for dom to be ready
//$ automatically waits for dom to be ready
$(taco);
