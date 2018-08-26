/**
 * @author Alan
 */
var keyDown_count = 0;



	
$("document").ready( function(){
	

	var $checkboxes = $(':input[type="checkbox"]');
	
	var fn = $("$first_name").val();
	var ln = $("$last_name").val();
	
	
	$("#topSliderMenu2").hide();
						
						
	$("#topSliderMenu").hide()
						.delay(2000)
						.slideDown(3000);
						
	$("#applyNow").click( function(){
		$("#topSliderMenu2").slideDown(1000);
	});
		
	$("#topSliderMenu2").mouseleave( function(){
		$("#topSliderMenu2").hide();
	});					
	
	$("#fname").keydown( function(){
		
		$("#fname").css("textTransform", "capitalize");
		$("#lname").css("textTransform", "capitalize");
	});
	
	$("#regForm").validate({
		rules:{
			
		},
		messages:{
			
		}
	});
	
	$checkboxes.change( function(){
			alert("sss");
		});
	
});

$(document).keydown( function(){
		
		$("#keyCount").text(keyDown_count += 1); 
		
	});

function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
	}

	setInterval(blinker, 1000); //Runs every second
	
	$("#printButton").click( function(){
		 Javascript:window.print();
	});


