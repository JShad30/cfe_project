const beerContainer = document.querySelector(".beers-section-top");
const loadMoreButton = document.getElementById('loadMoreButton');

function loadBeers() {
    fetch('http://api.punkapi.com/v2/beers')
        .then(response => {
            return response.json();
        })
    .then(data => {
        var beerString = "";
        for (var i = 0; i < data.length; i++) {            
            if (i < 10) {         
                var beerId = data[i].id;       
                var beerName = data[i].name;
                var beerDesc = data[i].description;
                var beerImg = data[i].image_url;                
                beerString = beerString +
                    "<div class='beer-info'>" +
                    "<div class='beer-text-container'>" +
                    "<h3 class='beer-title'>" + beerName + "</h3>" +
                    "<p class='beer-paragraph'>" + beerDesc + "</p>" +
                    "</div>" +
                    "<div class='beer-image-container' onclick='changeHeart'><img src='assets/images/heart-thin-32.png' class='heart-thin' id='beerId" + beerId + "'><img class='beer-image' src='" + beerImg + "'></div>" +
                    "</div>"                
            }            
        }   
        beerContainer.innerHTML = beerString;            
    }); 
}

document.addEventListener('DOMContentLoaded', () => {
    loadBeers();    
});




