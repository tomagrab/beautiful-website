//jshint esversion:6

// Function to decrease the opacity of a DOM object
function decreaseOpacity(elem, int, rate, limit) {
  var elOp = Number(window.getComputedStyle(elem).getPropertyValue("opacity"));
  console.log(elOp);
  var CO = setInterval(chanOp, int);
  function chanOp() {
    if (elOp <= limit) {
      clearInterval(CO);
    } else {
      elem.style.opacity = elOp -= rate;
    }
  }
}

// Function to increase the opacity of a DOM object
function increaseOpacity(elem, int, rate, limit) {
  var elOp = Number(window.getComputedStyle(elem).getPropertyValue("opacity"));
  console.log(elOp);
  var CO = setInterval(chanOp, int);
  function chanOp() {
    if (elOp >= limit) {
      clearInterval(CO);
    } else {
      elem.style.opacity = elOp += rate;
    }
  }
}

// Function to increase the opacity of two DOM objects
function increaseOpacityTwoObjects(elem1, elem2, int, rate, limit) {
  var elOp = Number(window.getComputedStyle(elem1).getPropertyValue("opacity"));
  console.log(elOp);
  var CO = setInterval(chanOp, int);
  function chanOp() {
    if (elOp >= limit) {
      clearInterval(CO);
    } else {
      elem1.style.opacity = elOp += rate;
      elem2.style.opacity = elOp += rate;
    }
  }
}

setTimeout(function () {
  var wineBoxL = document.querySelector(".wine-box-left");
  var wineBoxR = document.querySelector(".wine-box-right");
  increaseOpacityTwoObjects(wineBoxL, wineBoxR, 10, 0.025, 1);
}, 1000);

setTimeout(function () {
  var img = document.querySelector(".seeing-eye");
  var imgCap = document.querySelector(".seeing-eye-caption");
  increaseOpacityTwoObjects(img, imgCap, 20, 0.025, 1);
}, 1000);

function openNav() {
  document.getElementById("sidePanel").style.width = "250px";
  var wrapper = document.querySelector(".wrapper");
  decreaseOpacity(wrapper, 20, 0.025, 0.7);
}

function closeNav() {
  document.getElementById("sidePanel").style.width = "0px";
  var wrapper = document.querySelector(".wrapper");
  increaseOpacity(wrapper, 20, 0.025, 1);
}
