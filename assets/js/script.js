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
