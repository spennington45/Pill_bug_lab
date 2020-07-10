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

	

	$("#buttion_one").on( "click", function() {
     		
     	// change color
		document.documentElement.style.setProperty("--color", "green");
		alert( "clicked" );
			
 	});
 	//$('#panel_three_reset_button').on({'click': function(){
     		
     	// Swaps the image
		//$('#panel_three_pic_one').attr('src','images/lipids_plate_one.png');
		//enable buttons
		//document.getElementById("panel_three_button").disabled = false;
     		} 
 	//});
 
 });
 


 