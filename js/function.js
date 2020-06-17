// JavaScript Document

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	
	navigation: true,
	navigationPosition: 'left',
	/*onLeave: function(direction){
		var leavingSection = this;
		if(origin.index == 1 && direction =='down'){
			alert("Going to section 3!");
		}
	}*/
});


	$(document).ready(function('cta') { 
	if($(".sec1").hasClass("active")){
		$(".hero_cta").toggleClass("opacity");
	}
	});
	
	
