var modal = null

 function pop() {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

   if(modal === null) {
     document.getElementById("box").style.display = "block";
     modal = true
   } else {
     document.getElementById("box").style.display = "none";
     modal = null
   }
 }

 var saveScores = function() {
  localStorage.setItem("scores", JSON.stringify(scores));
};


