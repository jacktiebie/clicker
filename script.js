var buttonClear = document.getElementById("button__clear");
var buttonStart = document.getElementById("button__start");
var clickerScreen = document.getElementById("clicker__screen");
var hr = 0;
var min = 0;
var sec = 0;

buttonStart.addEventListener("click", function () {
  sec = sec + 1;
  clickerScreen.innerHTML = hr + ":" + min + ":" + sec;

  if (sec == 60) {
    sec = 0;
    min += 1;
  }

  if (min == 60) {
    min = 0;
    hr += 1;
  }
});
