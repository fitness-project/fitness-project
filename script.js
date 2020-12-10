$(document).ready(function() {
  getQuote();
  var colors = getRandomColor();
  $("title").css("background-color", colors);
  $("#get-next").on("click", function(e) {
    e.preventDefault();
    getQuote();
    var color = getRandomColor();
    $("title").css("background-color", color);
  });
});

function getRandomColor() {
  var letters = "789ABCD";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 6)];
  }
  return color;
}

function getQuote() {
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/?",
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(response) {
      $("#rnd-quote").html(
        "<p id='random_quote' class='lead text-center'>" +
          response.quoteText +
          "<br/>&dash; " +
          response.quoteAuthor +
          " &dash;</p>"
      );
    }
  });
}


var quotes = [];


//Show Quote button pop up
var modal = null
  function pop() {

    if(modal === null) {
      document.getElementById("box").style.display = "block";
      modal = true
    } else {
      document.getElementById("box").style.display = "none";
      modal = null
    }
 }

 //Saved button pop up
 var modal = null
  function pop2() {

    if(modal === null) {
      document.getElementById("box2").style.display = "block";
      modal = true
    } else {
      document.getElementById("box2").style.display = "none";
      modal = null
    }
 }


var savedQuotes = function() {
    localStorage.setItem("quotes", JSON.stringify(quotes));
};

var getQuotes = function() {
  if (quotes.length > 0) {
      quotes = localStorage.getItem("quotes");
      quotes = JSON.parse(quotes);
 }
}; 



getQuotes();