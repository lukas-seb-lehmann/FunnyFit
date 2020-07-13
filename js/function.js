// JavaScript Document

//Preloader
window.addEventListener("load", () => {
	const preload = document.querySelector(".preload");
	preloader.classlist.add("preload-finish");
	
	
});


//Navi
function span1rot() {

	$('.span1').toggleClass("active1");
}

function span2dis() {
	$('.span2').toggleClass("active2");
}

function span3rot() {
	$('.span3').toggleClass("active3");
}

function menu() {
	$('.main-nav').toggleClass("active-main-nav");
	$('.ham span').toggleClass("active-nav-span");
	$('.navi-background').toggleClass("active-back");
}

function closemenu(){
	
		$('.main-nav').toggleClass("active-main-nav");
		$('.ham span').toggleClass("active-nav-span");
	$('.navi-background').toggleClass("active-back");
}




//Fulpage

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	verticalCentered:false,
	
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
		if(origin.index == 0){
			$(".side-navi").addClass("opacity-nav");
		}if(destination.index == 0){
			$(".side-navi").removeClass("opacity-nav");
		}
		//kleines Logo bei Landscape und kleinen geräten
		
		if(origin.index == 0 && $(window).width() < 1200 && $(window).width() > $(window).height()){
			$(".logo").addClass("smalllogo");
		}if(destination.index == 0){
			$(".logo").removeClass("smalllogo");
		}
		
		
		// seitliche Chips Navi
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
		
		if(destination.index == 7){
		$(".nav8").addClass("activ-nav");
		}if(origin.index == 7){
		$(".nav8").removeClass("activ-nav");
		}
		
		if(destination.index == 7){
			$(".polyunten").addClass("display");
			$(".polyoben").addClass("display");
		}if(origin.index == 7){
			$(".polyunten").removeClass("display");
			$(".polyoben").removeClass("display");
		}
		
		},
	
	
});


	
