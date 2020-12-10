
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



// 25e9ad0cf5fb80a20fbf5efde01e10c1d03eace5

getQuotes();