// //check for Navigation Timing API support
// if (window.performance) {
//     console.info("window.performance works fine on this browser");
//   }
//   console.info(performance.navigation.type);
//   if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
//     console.info( "This page is reloaded" );
//   } else {
//     console.info( "This page is not reloaded");
//   }

window.onload = choosePic;

var myPix = new Array("Images/1.GIF", "Images/2.GIF", "Images/3.GIF", "Images/4.GIF", "Images/5.GIF", "Images/6.GIF");

function choosePic() {
    var randomNumber1= parseInt(Math.floor(Math.random() * (5 + 1)));
    document.getElementById("diceImage1").src = myPix[randomNumber];
    var randomNumber2= parseInt(Math.floor(Math.random() * (5 + 1)));
    document.getElementById("diceImage2").src = myPix[randomNumber];

}