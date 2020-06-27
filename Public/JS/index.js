//jshint esversion:6

setTimeout(function slideBoxesIn() {
  var wineBoxL = document.querySelector(".wine-box-left");
  var wineBoxR = document.querySelector(".wine-box-right");
  var opacityL = Number(
    window.getComputedStyle(wineBoxL).getPropertyValue("opacity")
  );
  var opacityR = Number(
    window.getComputedStyle(wineBoxR).getPropertyValue("opacity")
  );

  var CO = setInterval(changeOpacity, 10);
  function changeOpacity() {
    if (opacityR >= 1 && opacityL >= 1) {
      clearInterval(CO);
    } else {
      wineBoxR.style.opacity = opacityR += 0.025;
      wineBoxL.style.opacity = opacityL += 0.025;
    }
  }
}, 1000);

setTimeout(function fadeImg() {
  var img = document.querySelector(".seeing-eye");
  var imgOpacity = Number(
    window.getComputedStyle(img).getPropertyValue("opacity")
  );
  var CO = setInterval(changeOpacity, 20);
  function changeOpacity() {
    if (imgOpacity >= 1) {
      clearInterval(CO);
    } else {
      img.style.opacity = imgOpacity += 0.025;
    }
  }
}, 1000);
