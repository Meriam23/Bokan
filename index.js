const today = new Date();
const currentYear = today.getFullYear();

var footerParagraph = document.getElementById("footer-date");
footerParagraph.textContent += " " + currentYear;

function openNav() {
  document.getElementById(
    "myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById(
    "myNav").style.width = "0%";
}

function closeNav2() {
  document.getElementById(
    "myNav").style.width = "0%";
}

function timeFunction() {
        setTimeout(function(){
          document.getElementById(
            "myNav").style.width = "0%";
        }, 1050);
    }

// LIFT ANIMATION

var lift = document.getElementById("elevator");
var liftBtns = document.querySelectorAll(".liftBtn");

var delayInMilliseconds = 1300;

function closeNavBtns() {


  for (i = 0; i < liftBtns.length; i++) {
    liftBtns[i].addEventListener("click", closeNav2);
  }
}




function moveLift0() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-165px)'
    }
  ], {
    duration: 1300,
  });
}

function moveLift1() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-110px)'
    }
  ], {
    duration: 1300,
  });
}

function moveLift2() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-55px)'
    }
  ], {
    duration: 1300,
  });
}





liftBtns[0].addEventListener("click", moveLift0);
liftBtns[1].addEventListener("click", moveLift1);
liftBtns[2].addEventListener("click", moveLift2);
