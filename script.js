window.onload = choosePic;

var myPix = new Array("Images/1.GIF", "Images/2.GIF", "Images/3.GIF", "Images/4.GIF", "Images/5.GIF", "Images/6.GIF");
function choosePic() {
    var randomNumber1= parseInt(Math.floor(Math.random() * (5 + 1)));
    document.getElementById("diceImage1").src = myPix[randomNumber1];
    var randomNumber2= parseInt(Math.floor(Math.random() * (5 + 1)));
    document.getElementById("diceImage2").src = myPix[randomNumber2];
    if (randomNumber1==randomNumber2){
        // console.log("Draw!");
        document.getElementsByClassName("winner")[0].innerHTML="Draw!";
        document.getElementsByClassName("winner")[1].innerText = String.fromCodePoint(0x23F9);
    }else if (randomNumber1>randomNumber2){
        document.getElementsByClassName("winner")[0].innerHTML="Player 1 wins!";
        document.getElementsByClassName("winner")[1].innerText = String.fromCodePoint(0x23EE);
    }else{
        document.getElementsByClassName("winner")[0].innerHTML="Player 2 wins!";
        document.getElementsByClassName("winner")[1].innerText = String.fromCodePoint(0x23ED);
    }
}