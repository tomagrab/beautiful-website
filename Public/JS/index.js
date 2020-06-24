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
  var rectL = wineBoxL.getBoundingClientRect();
  var rectR = wineBoxR.getBoundingClientRect();
  rectL.left = 0;
  rectR.right = 0;

  var SI = setInterval(slideIn, 50);
  var pos = 0;
  wineBoxL.style.transform = "translateX(" + pos + "px)";
  wineBoxR.style.transform = "translateX(" + -pos + "px)";
  function slideIn() {
    if (pos == 10) {
      clearInterval(SI);
    } else {
      pos += 1;
      console.log(rectL.right, rectR.left);
      wineBoxL.style.transform = "translateX(" + pos + "px)";
      wineBoxR.style.transform = "translateX(" + -pos + "px)";
    }
  }

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
