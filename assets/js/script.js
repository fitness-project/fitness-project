<<<<<<< HEAD

  .then(function(data) {
    console.log(data);
  });
=======
var quoteButton = document.querySelector('#btn');


var getQuote = function () {

    fetch("https://type.fit/api/quotes").then(function(response) {
    return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
    }

quoteButton.addEventListener('click', getQuote);
  
getQuote();
>>>>>>> 2d373f8734590f72b36ae4be4726fd1e3c2c6263
