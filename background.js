var colorCode = document.querySelector(".color-code");
var color1= document.querySelector('.color-1');
var color2= document.querySelector('.color-2'); 
var body = document.getElementById('body');

function setGradient() {
    body.style.background = "linear-gradient(to right," +color1.value + "," + color2.value + ")";

    colorCode.textContent ="Copy the code : "  + body.style.background + ";";
}
color1.addEventListener('input' ,setGradient);

color2.addEventListener('input' ,setGradient);

