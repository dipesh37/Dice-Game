var randomNumber1= Math.floor(Math.random() * 6) +1;  // 1-6

var randomImage = "dice" + randomNumber1 + ".png";  // concatatination to , for selecting pngs randomly, so that rondom allocation of pngs is seen
                                                     // eg dice1.png  , dice2.png dice3.png it's all about logic
var randomImageSource = "images/" + randomImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource); 


var randomNumber2 =  Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 +".png";
var randomImage2Source = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImage2Source);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 1 Wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🏆 Player 2 wins";
}

else{
    document.querySelector("h1").innerHTML="Its a draw😅";
}