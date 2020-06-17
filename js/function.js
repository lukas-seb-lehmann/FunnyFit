// JavaScript Document

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	
	
	navigation: true,
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
		
			

	
		}
	
		
});


	
	
