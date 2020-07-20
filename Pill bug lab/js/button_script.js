/*
Button Script  version 1.0
Date: 7 July 2020
Author: Steven Pennington

This script runs buttons for pill bug lab
*/


// Check that document is fully loaded
$(document).ready(function() {

  var trial = 0;
  var dish1count = 5;
  var dish2count = 5;
  var report = [];
  var buttonOneOn = false;
  var buttonTwoOn = false;
  var buttonThreeOn = false;
  var buttonFourOn = false;
  var modify = 0;
	var xpos = 0;
	var ypos = 0;
	var i = 0;

  window.onload = function() {
    for (i = 0; i < dish1count; i++) {
      xpos = Math.random(300);
      ypos = Math.random(300);
      document.getElementById("left_canvas").drawImage("images/pillbug.png", xpos, ypos);
    }
    for (i = 0; i < dish2count; i++) {
      xpos = Math.random(300);
      ypos = Math.random(300);
      document.getElementById("right_circle").getContext("2d").drawImage("images/pillbug.png", xpos, ypos);
    }
  };


  $("#button_one").on("click", function() {

    // change color and check if button is on or off
    if (buttonOneOn === false && buttonTwoOn === false) {
      document.documentElement.style.setProperty("--colorLeft", "lightblue");
      buttonOneOn = true;
    } else if (buttonOneOn === true && buttonTwoOn === false) {
      document.documentElement.style.setProperty("--colorLeft", "white");
      buttonOneOn = false;
    } else if (buttonOneOn === true && buttonTwoOn === true) {
      document.documentElement.style.setProperty("--colorLeft", "lightgreen");
      buttonOneOn = false;
    } else if (buttonOneOn === false && buttonTwoOn === true) {
      document.documentElement.style.setProperty("--colorLeft", "lightgray");
      buttonOneOn = true;
    }
  });

  $("#button_two").on("click", function() {

    // change color and check if button is on or off
    if (buttonOneOn === false && buttonTwoOn === false) {
      document.documentElement.style.setProperty("--colorLeft", "lightgreen");
      buttonTwoOn = true;
    } else if (buttonOneOn === false && buttonTwoOn === true) {
      document.documentElement.style.setProperty("--colorLeft", "white");
      buttonTwoOn = false;
    } else if (buttonOneOn === true && buttonTwoOn === true) {
      document.documentElement.style.setProperty("--colorLeft", "lightblue");
      buttonTwoOn = false;
    } else if (buttonOneOn === true && buttonTwoOn === false) {
      document.documentElement.style.setProperty("--colorLeft", "lightgray");
      buttonTwoOn = true;
    }
  });

  $("#button_three").on("click", function() {

    // change color and check if button is on or off
    if (buttonThreeOn === false && buttonFourOn === false) {
      document.documentElement.style.setProperty("--colorRight", "lightblue");
      buttonThreeOn = true;
    } else if (buttonThreeOn === true && buttonFourOn === false) {
      document.documentElement.style.setProperty("--colorRight", "white");
      buttonThreeOn = false;
    } else if (buttonThreeOn === true && buttonFourOn === true) {
      document.documentElement.style.setProperty("--colorRight", "lightgreen");
      buttonThreeOn = false;
    } else if (buttonThreeOn === false && buttonFourOn === true) {
      document.documentElement.style.setProperty("--colorRight", "lightgray");
      buttonThreeOn = true;
    }
  });

  $("#button_four").on("click", function() {

    // change color and check if button is on or off
    if (buttonThreeOn === false && buttonFourOn === false) {
      document.documentElement.style.setProperty("--colorRight", "lightgreen");
      buttonFourOn = true;
    } else if (buttonThreeOn === false && buttonFourOn === true) {
      document.documentElement.style.setProperty("--colorRight", "white");
      buttonFourOn = false;
    } else if (buttonThreeOn === true && buttonFourOn === true) {
      document.documentElement.style.setProperty("--colorRight", "lightblue");
      buttonFourOn = false;
    } else if (buttonThreeOn === true && buttonFourOn === false) {
      document.documentElement.style.setProperty("--colorRight", "lightgray");
      buttonFourOn = true;
    }
  });

  $("#button_five").on("click", function() {
    // Generate a random number for the exp and modify it
    if (buttonOneOn) {
      modify -= 0.01;
    }
    if (buttonTwoOn) {
      modify -= 0.02;
    }
    if (buttonThreeOn) {
      modify += 0.01;
    }
    if (buttonFourOn) {
      modify += 0.02;
    }
    var num = Math.random();
    var numMod = num + modify;
    // build report as button five is pressed and progress to the next minute
    if (trial < 11) {
      report.push([trial, dish1count, dish2count]);
      trial += 1;
      if (numMod <= 0) {
        dish1count += 5;
      } else if (numMod <= 0.10) {
        dish1count += 4;
      } else if (numMod <= 0.20) {
        dish1count += 3;
      } else if (numMod <= 0.30) {
        dish1count += 2;
      } else if (numMod <= 0.04) {
        dish1count += 1;
      } else if (numMod >= 1) {
        dish1count -= 5;
      } else if (numMod >= 0.90) {
        dish1count -= 4;
      } else if (numMod >= 0.80) {
        dish1count -= 3;
      } else if (numMod >= 0.70) {
        dish1count -= 2;
      } else if (numMod >= 0.60) {
        dish1count -= 1;
      }
      //make sure count is within range of 0-10
      if (dish1count > 10) {
        dish1count = 10;
      } else if (dish1count < 0) {
        dish1count = 0;
      }
      // set count in each dish
      dish2count = 10 - dish1count;
      // for (i = 0; i < dish1count; i++) {
      //   xpos = Math.random(300);
      //   ypos = Math.random(300);
      //   document.getElementById('fileinput').addEventListener('add', function() {
      //
      //   });
      // }
      // for (i = 0; i < dish2count; i++) {
      //   xpos = Math.random(300);
      //   ypos = Math.random(300);
      //   document.getElementById("right_circle").drawImage("images/pillbug.png", xpos, ypos);
      // } //TODO: add result portion of function
    }
  });

});
