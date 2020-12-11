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
        url:'https://www.googleapis.com/youtube/v3',
        data: {
            key:'AIzaSyA25njXqA1hhSmQoaLgcRqfrOOL2hTIc_k',
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
        url: 'https://www.googleapis.com/youtube/v3',
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

