var firstColorInput = document.querySelector("#color1");
var secondColorInput = document.querySelector("#color2");
var gradientBackground = document.getElementById("gradient");
var cssInfo = document.querySelector("h3");
var button = document.querySelector(".randomize");
var randomColor = function() {
  return Math.floor(Math.random() * 256);
}

// console.log(fullColorHex(255, 255, 255));

function fullColorHex(r, g, b) {
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#" + red + green + blue;
}

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function createGradient() {
  gradientBackground.style.background =
    "linear-gradient(to right, "
    + firstColorInput.value
    + ","
    + secondColorInput.value
    +")";
  cssInfo.textContent = gradientBackground.style.background + ";"

}

function randomFirstInput() {
  var randomizedRed = randomColor();
  var randomizedGreen = randomColor();
  var randomizedBlue = randomColor();
  firstColorInput.value = fullColorHex(randomizedRed, randomizedGreen, randomizedBlue);
  createGradient();
  var randomizedRed = "";
  var randomizedGreen = "";
  var randomizedBlue = "";
}

function randomSecondInput() {
  var randomizedRed = randomColor();
  var randomizedGreen = randomColor();
  var randomizedBlue = randomColor();
  secondColorInput.value = fullColorHex(randomizedRed, randomizedGreen, randomizedBlue);
  createGradient();
  var randomizedRed = "";
  var randomizedGreen = "";
  var randomizedBlue = "";
}

function randomGradient() {
  randomFirstInput();
  randomSecondInput();
}

firstColorInput.addEventListener ("input", createGradient);

secondColorInput.addEventListener ("input", createGradient);
button.addEventListener ("click", randomGradient);
document.addEventListener ("DOMContentLoaded", createGradient);
