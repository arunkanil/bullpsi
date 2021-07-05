jQuery(document).ready(function ($) {
								 
 	// $(document).mousemove(function (e) {
    //     $("#pointer").css({ left: e.pageX, top: e.pageY });
    // });	
	
	$('#hamburger').click(function() {
		var navState = $('#nav').data('state');						   
		if ( navState==1 ) {
			$('#nav').slideUp(.2);
			$('#nav').data('state',0);
			$('#hamburger').removeClass('opened');
		} else {
			$('#nav').slideDown(.2);
			$('#nav').data('state',1);
			$('#hamburger').addClass('opened');
		}
	});								 


    function goToByScroll(dataslide) {

		var currentPosition = -1*($('html').offset().top);
		var clickedPosition = $('.slide[data-slide="' + dataslide + '"]').offset().top;
		if(clickedPosition>currentPosition){
			htmlbody.animate({
				scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
			}, 2000, 'easeInOutQuint');
		} else{
			console.log("up");
			htmlbody.animate({
				scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top - 20 
			}, 2000, 'easeInOutQuint'); 

     	}

    }
	
	
	// (function(){
	
	//   var doc = document.documentElement;
	//   var w = window;
	
	//   var prevScroll = w.scrollY || doc.scrollTop;
	//   var curScroll;
	//   var direction = 0;
	//   var prevDirection = 0;
		
	//   var checkScroll = function() {
	
	// 	/*
	// 	** Find the direction of scroll
	// 	** 0 - initial, 1 - up, 2 - down
	// 	*/
	
	// 	curScroll = w.scrollY || doc.scrollTop;
	// 	if (curScroll > prevScroll) { 
	// 	  //scrolled up
	// 	  direction = 2;
	// 	}
	// 	else if (curScroll < prevScroll) { 
	// 	  //scrolled down
	// 	  direction = 1;
	// 	}
	
	// 	if (direction !== prevDirection) {
	// 	  toggleHeader(direction, curScroll);
	// 	}
		
	// 	prevScroll = curScroll;
	//   };
	
	//   var toggleHeader = function(direction, curScroll) {	  
	// 	if (direction === 2 && curScroll > 150) { 	
	// 	  $('#header').addClass('hide');
	// 	  if ( $('#nav').data('state')==1 ) {
	// 			$('#nav').slideUp(.2);
	// 			$('#hamburger').removeClass('opened');
	// 	  }
	// 	  prevDirection = direction;
	// 	}
	// 	else if (direction === 1) {
	// 	  $('#header').removeClass('hide');
	// 	  prevDirection = direction;
	// 	}
	//   };
	  
	//   window.addEventListener('scroll', checkScroll);
	
	// })();
	
	
	
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {					  
		if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 50px
			$('#header').addClass('shade');
		} else {
			$('#header').removeClass('shade');
		}
	});
	// $('#return-to-top').click(function() {      // When arrow is clicked
	// 	$('body,html').animate({
	// 		scrollTop : 0                       // Scroll to top of body
	// 	}, 500);
	// });
	



});