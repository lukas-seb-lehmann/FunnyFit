// JavaScript Document

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	
	navigation: true,
	navigationPosition: 'left',
	
});


	$(document).ready(function() { 
	if($("#sec1_selec").hasClass("active")){
		$(".hero_cta").addClass("opacity");
	}else{
		$(".hero_cta").removeClass("opacity");
	}
	});
	
	
