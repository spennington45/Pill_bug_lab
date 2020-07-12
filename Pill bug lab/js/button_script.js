/*
Button Script  version 1.0
Date: 7 July 2020
Author: Steven Pennington

This script runs buttons for pill bug lab
*/


// Check that document is fully loaded
$(document).ready(function(){

	// Below are the two separate functions executing to
	var percentChance = 50;
	// set the single or plural variable for minute(s)
	// and the time lapsed count to zero
	var sp = "";
	var tl = 0;
	var trial = 1;
	var dish1count = [];
	var dish2count = [];
	var report = [];
	var buttonOneOn = false;
	var buttonTwoOn = false;
	var buttonThreeOn = false;
	var buttonFourOn = false;
	var modify = 1;


	$("#button_one").on( "click", function() {

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

	$("#button_two").on( "click", function() {

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

	$("#button_three").on( "click", function() {

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

$("#button_four").on( "click", function() {

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

	$("#button_five").on( "click", function() {
			alert("modify = " modify)
	     	// Generate a random number for the exp and modify it
			if (buttonOneOn === True) {
				modify += 0.01;
			}
			if (buttonTwoOn === true) {
				modify += 0.02;
			}
			if (buttonThreeOn === true) {
				modify -= 0.01;
			}
			if (buttonFourOn === true) {
				modify -= 0.02;
			}
			var num = Math.floor(Math.random());
			var numMod = num + modify;
			if (tiral < 11) {
				if (buttonOneOn === true) {
					modify
				}
			}
	 	});

 });
