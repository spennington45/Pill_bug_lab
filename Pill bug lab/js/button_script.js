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


  window.onload = bug_draw();


  function bug_draw() {

    for (i = 0; i < dish1count; i++) {

      xpos = Math.floor(Math.random(300) * 250);
      ypos = Math.floor(Math.random(300) * 100);

      var canvas = document.getElementById('left_circle');
      var ctx = canvas.getContext('2d');
      var img = document.getElementById("pic_two");

      ctx.drawImage(img, xpos, ypos, 30, 30);

    }

    for (i = 0; i < dish1count; i++) {

      xpos = Math.floor(Math.random(300) * 250);
      ypos = Math.floor(Math.random(300) * 100);

      var canvas = document.getElementById('right_circle');
      var ctx = canvas.getContext('2d');
      var img = document.getElementById("pic_two");

      ctx.drawImage(img, xpos, ypos, 30, 30);
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
      // Resets left canvas
      const parentLeft = document.getElementById('div-left');
      parentLeft.innerHTML = "";
      const reloadedCanvasLeft = document.createElement('canvas');
      reloadedCanvasLeft.setAttribute('id', 'left_circle');
      reloadedCanvasLeft.setAttribute('style', 'height: 300px; width: 300px; border: 1px solid #000;');
      parentLeft.appendChild(reloadedCanvasLeft);
      // Draws bugs on left canvas
      for (i = 0; i < dish1count; i++) {
        xpos = Math.floor(Math.random(300) * 100);
        ypos = Math.floor(Math.random(300) * 100);
        var canvas = document.getElementById('left_circle');
        var ctx = canvas.getContext('2d');
        var img = document.getElementById("pic_two");
        ctx.drawImage(img, xpos, ypos, 30, 30);
      }
      //resets right canvas
      const parentRight = document.getElementById('div-right');
      parentRight.innerHTML = "";
      const reloadedCanvasRight = document.createElement('canvas');
      reloadedCanvasRight.setAttribute('id', 'Right_circle');
      reloadedCanvasRight.setAttribute('style', 'height: 300px; width: 300px; border: 1px solid #000;');
      parentRight.appendChild(reloadedCanvasRight);
      // Draws bugs on right canvas
      for (i = 0; i < dish2count; i++) {
        xpos = Math.floor(Math.random(300) * 250);
        ypos = Math.floor(Math.random(300) * 100);
        var canvas = document.getElementById('right_circle');
        var ctx = canvas.getContext('2d');
        var img = document.getElementById("pic_two");
        ctx.drawImage(img, xpos, ypos, 30, 30);
        ctx.drawImage(dish2count)
      } //TODO: add result portion of function
    }
  });

});
