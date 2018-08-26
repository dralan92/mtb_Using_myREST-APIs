/**
 * @author Alan
 */
$("document").ready( function(){
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
	
	
	
});

function blinker() {
    $('.blink_me').fadeOut(500);
    $('.blink_me').fadeIn(500);
	}

	setInterval(blinker, 1000); //Runs every second
	
	$("#printButton").click( function(){
		 Javascript:window.print();
	});


