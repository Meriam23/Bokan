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
      transform: 'translateY(-500px)'
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
      transform: 'translateY(-420px)'
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
      transform: 'translateY(-360px)'
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
      transform: 'translateY(-300px)'
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
      transform: 'translateY(-240px)'
    }
  ], {
    duration: 2000,
  });
}

function moveLift5() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-180px)'
    }
  ], {
    duration: 1800,
  });
}

function moveLift6() {
  lift.animate([{
      transform: 'translateY(0px)'
    },
    {
      transform: 'translateY(-120px)'
    }
  ], {
    duration: 1300,
  });
}

function moveLift7() {
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
liftBtns[3].addEventListener("click", moveLift3);
liftBtns[4].addEventListener("click", moveLift4);
liftBtns[5].addEventListener("click", moveLift5);
liftBtns[6].addEventListener("click", moveLift6);
liftBtns[7].addEventListener("click", moveLift7);
