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
        }, 2100);
    }

// LIFT ANIMATION

var lift = document.getElementById("elevator");
var liftBtns = document.querySelectorAll(".liftBtn");

var delayInMilliseconds = 2000;

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
      transform: 'translateY(-320px)'
    }
  ], {
    duration: 2000,
  });
}

function moveLift1() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-260px)'
    }
  ], {
    duration: 2000,
  });
}

function moveLift2() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-190px)'
    }
  ], {
    duration: 2000,
  });
}

function moveLift3() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-130px)'
    }
  ], {
    duration: 2000,
  });
}

function moveLift4() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-60px)'
    }
  ], {
    duration: 2000,
  });
}






liftBtns[0].addEventListener("click", moveLift0);
liftBtns[1].addEventListener("click", moveLift1);
liftBtns[2].addEventListener("click", moveLift2);
liftBtns[3].addEventListener("click", moveLift3);
liftBtns[4].addEventListener("click", moveLift4); 
