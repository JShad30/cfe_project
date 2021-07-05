function fullHeart(imageId) {

    var heartImages = ["beerId1", "beerId2", "beerId3", "beerId4", "beerId5", "beerId6", "beerId7", "beerId8", "beerId9", "beerId10"];

    for (var i = 0; i < heartImages.length; i++) {
        var imgId = document.getElementById(heartImages[i]);
        if (imgId == imageId) {
            if (imgId.src.match("assets/images/heart-thin-32.png")) {
                imgId.src = "assets/images/heart-thin-white-32.png";
            }
            else {
                imgId.src = "assets/images/heart-thin-32.png";
            }
        }
    }
}