
function over() {
  document.getElementById("certificadosdiv").style.display = "block";
  document.getElementById("firstli").style.display = "block";
  document.getElementById("secondli").style.display = "block";
  document.getElementById("thirdli").style.display = "block";
  document.getElementById("fourthli").style.display = "block";
  document.getElementById("fifthli").style.display = "block";
  document.getElementById("sixthli").style.display = "block";
  document.getElementById("seventhli").style.display = "block";
  document.getElementById("certificados").onclick = function() {
    off()
  };
  document.getElementById("Down").onclick = function() {
    off()
  };
}

function off() {
  document.getElementById("certificadosdiv").style.display = "none";
  document.getElementById("firstli").style.display = "none";
  document.getElementById("secondli").style.display = "none";
  document.getElementById("thirdli").style.display = "none";
  document.getElementById("fourthli").style.display = "none";
  document.getElementById("fifthli").style.display = "none";
  document.getElementById("sixthli").style.display = "none";
  document.getElementById("seventhli").style.display = "none";
  document.getElementById("certificados").onclick = function() {
    over()
  };
  document.getElementById("Down").onclick = function () {
    over()
  };
}

myBtn = document.getElementById("myBtn");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myBtn.id = "myBtnn"
  } else {
    myBtn.id = "myBtn"
  }
};
window.addEventListener("scroll", myScrollFunc);

function exhale() {
  document.getElementById("navbarr").style.display = "block";
  document.getElementById("Down").style.display = "block";
  document.getElementById("Bmenu").onclick = function() {
    inhale()
  };
}

function inhale() {
  document.getElementById("navbarr").style.display = "none";
  document.getElementById("Down").style.display = "none";
  document.getElementById("Bmenu").onclick = function() {
    exhale()
  };
}
