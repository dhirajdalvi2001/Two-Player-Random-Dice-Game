// For Image1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // randomNumbersFrom 1-6

var randomImage1 = "dice" + randomNumber1 + ".png"; // randomImagesFrom dice1.png - dice6.png

var randomImageSource1 = "images/" + randomImage1; // randomImageSourcesFrom images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // image1 = addressOfImg1

image1.setAttribute("src", randomImageSource1);  // changingSourceOfImg1


// For Image2


var randomNumber2 = Math.floor(Math.random() * 6) + 1; // randomNumbersFrom 1-6

var randomImage2 = "dice" + randomNumber2 + ".png"; // randomImagesFrom dice1.png - dice6.png

var randomImageSource2 = "images/" + randomImage2; // randomImageSourcesFrom images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1]; // image2 = addressOfImg2

image2.setAttribute("src", randomImageSource2);  // changingSourceOfImg2


// For Title

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}