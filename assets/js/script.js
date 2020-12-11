var quotes = [];

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


var saveQuote = function () {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

var getSavedQuotes = function() {
  saveQuote = JSON.parse(localStorage.getItem("quotes"));
}


var printSavedQuotes = function() {
    listOfQuotes.innerHTML = "";
    if (saveQuote.length === 0) {
        listOfQuotes.textContent = "No Saved Quotes"
    } else {
        for (i = 0; i < saveQuote.length; i++) {
            var newQuoteAddedEl = document.createElement("li");
            listOfQuotes.appendChild(newQuoteAddedEl);
        }
    }
};


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

getSavedQuotes();

let categories = Array.from(document.getElementsByClassName("category")[0].children);
categories.forEach(function(category) {
    category.addEventListener("click", function() {
        buttonState();
        //
        var workoutType = category.id;
        //
        let button = document.getElementById(workoutType);
        button.classList.add('active');
        //
        return getVideos(workoutType);
    });
});
function buttonState() {
    for (i = 0; i < categories.length; i++) {
        if (categories[i].classList.contains('active') === true) {
            categories[i].classList.remove('active');
        };
      }
}
function getVideos(filter) {
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyA25njXqA1hhSmQoaLgcRqfrOOL2hTIc_k',
            q: filter,
            part: 'snippet',
            maxResults: 50,
            type: 'video',
            videoDefinition: 'high',
            videoEmbeddable: true,
        },
        success: function(data){
            selectOneVideo(data);
        },
        error: function(response){
           getVideosBackUp(filter);
        }
    });
}
function getVideosBackUp(filter){
    $.ajax({
        type: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        data: {
            key: 'AIzaSyA25njXqA1hhSmQoaLgcRqfrOOL2hTIc_',
            q: filter,
            part: 'snippet',
            maxResults: 50,
            type: 'video',
            videoDefinition: 'high',
            videoEmbeddable: true,
        },
        success: function(data){
            selectOneVideo(data);
        },
        error: function(response){
            document.querySelector('#section-video').innerHTML = '<div class="error-message"><center><font size="7px">&#128565</font></center><br>Sorry - We have reached the maximum number of API calls for today. Please try again tomorrow </div>';
        }
    });
}
function selectOneVideo(data){
    var random = getRandomIntInclusive(1, 25);
    var chosenVideo = data.items[random];
    embedVideo(chosenVideo);
    }
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function embedVideo(data) {
    if (document.querySelector('img') != null) {
        document.querySelector('img').parentElement.innerHTML = '<div class="videoWrapper" id="video"><iframe src="" frameborder="0" allowfullscreen></iframe></div>';
    };
      $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.id.videoId);
}

