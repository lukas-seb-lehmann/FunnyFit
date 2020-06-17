// JavaScript Document

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	
	
	navigation: false,
	navigationPosition: 'left',
	onLeave: function(origin, destination, direction){
		
		var leavingSection = this;

	
				
			
		
		
		//after leaving section 2
	if(origin.index == 0 && direction =='down'){
		
			if($(".sec1").hasClass("active")){
		$(".cta").addClass("opacity");
				$(".pfeil").addClass("opacity");
			}
			
			
	}else if(destination.index == 0 && direction == 'up'){
		
		$(".cta").removeClass("opacity");
		$(".pfeil").removeClass("opacity");
	}
		
		if(destination.index == 0){
		$(".nav1").addClass("activ-nav");
		}if(origin.index == 0){
		$(".nav1").removeClass("activ-nav");
		}
		
		if(destination.index == 1){
		$(".nav2").addClass("activ-nav");
		}if(origin.index == 1){
		$(".nav2").removeClass("activ-nav");
		}
		
		if(destination.index == 2){
		$(".nav3").addClass("activ-nav");
		}if(origin.index == 2){
		$(".nav3").removeClass("activ-nav");
		}
		
		if(destination.index == 3){
		$(".nav4").addClass("activ-nav");
		}if(origin.index == 3){
		$(".nav4").removeClass("activ-nav");
		}
		
		if(destination.index == 4){
		$(".nav5").addClass("activ-nav");
		}if(origin.index == 4){
		$(".nav5").removeClass("activ-nav");
		}
		
		if(destination.index == 5){
		$(".nav6").addClass("activ-nav");
		}if(origin.index == 5){
		$(".nav6").removeClass("activ-nav");
		}
		
		if(destination.index == 6){
		$(".nav7").addClass("activ-nav");
		}if(origin.index == 6){
		$(".nav7").removeClass("activ-nav");
		}
		
		
		},
	
	
});


	
