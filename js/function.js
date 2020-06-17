// JavaScript Document

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
	
	navigation: true,
	navigationPosition: 'left',
	
});


	
	if($(".sec1").hasClass("active")){
		$(".hero_cta").css('opacity', '1');
	}else{
		$(".hero_cta").css('opacity', '0');
	}
	
	
	
