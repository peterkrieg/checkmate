$(function(){
	
	// Fades in document upon loading
	$('body').hide().fadeIn(2500);

	// This prevents bootstrap from focusing on links when clicked
	$('a').click(function(){
		$(this).blur();
	});

	// jQuery to collapse the navbar on scroll
	$(window).scroll(function() {
		if ($(".navbar").offset().top > 200) {
			$(".navbar-fixed-top").addClass("top-nav-appear");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-appear");
		}
	});

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$('a.page-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});




	$('.moreabout').hide();

	$('a.pluslink').click(function(event){
 		// By blurring the element, it never allows bootstrap to apply weird :focus styling
 		$(this).blur();
 		event.preventDefault();
 		if($(this).hasClass('reveal')){
 			$(this).removeClass('reveal');
 			$('.moreabout').slideToggle(200);
 		}
 		else{
 			$(this).addClass('reveal');
 			$('.moreabout').slideToggle(800);
 		}
 	});





});



