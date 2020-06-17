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
		$(".hero_cta").addClass("opacity");
			}
			
			
	}else if(origin.index == 1 && direction == 'up'){
		
		$(".hero_cta").removeClass("opacity");
			
	}
		
			

	
		}
	
		
});


	
	
