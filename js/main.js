$(function(){
	
	// ---------------Basic Preliminary actions-------------

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


	// Hides the extra science content, until user clicks plus
	$('.moreabout').hide();

	// Expand more info on about page
	$('a.pluslink').click(function(event){
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

	// Expand bio for each person
 	$('a.pluslinkperson').click(function(event){
 		event.preventDefault();
 		if($(this).hasClass('reveal')){
 			$(this).removeClass('reveal');
 			$(this).next().slideToggle(200);
 		}
 		else{
 			$(this).addClass('reveal');
 			$(this).next().slideToggle(800);
 		}
 	});

 	// Reveal Team drop down menu when mouseover
 	$('li.teamDropDownItem').on('mouseenter', function(){
 		// Show a small div that just blocks certain pixels of gold border, a messy hack around solution
 		$('div.blockGoldBorder').show();
 		$('ul.teamDropDownMenu').slideDown(500);
 	})
 	$('li.teamDropDownItem').on('mouseleave', function(){
 		$('div.blockGoldBorder').delay(199).hide();
 		$('ul.teamDropDownMenu').slideUp(200);
 	})


 	// Drop down Accordions for team section
 	// Terminology: panel refers to rectangle--3 rectangles present upon page load
 	// Accordion refers to content that opens when panel is clicked.  Max one accordion open at a time

 	// Event whenever one of 3 panels managemenet, board of directors, or advisor is clicked
 	// $('.panel').click(function(event){
 	// 	// First hide any accordions that were open before, and re-show panel
 	// 	$('.reveal').removeClass('reveal').toggle();
 	// 	$('.panel-hidden').toggle().removeClass('panel-hidden');
 	// 	event.preventDefault();
 	// 	var $accordion = $(this).parent().next();
 	// 	$(this).parent().addClass('panel-hidden').slideToggle();
 	// 	$accordion.removeClass('hidden').addClass('reveal').hide().fadeIn(500);
 	// 	$('html, body').stop().animate({
		// 		scrollTop: $($accordion).offset().top-190
		// 	}, 0, 'easeInOutExpo');	
 	// })

 	function openPanel(category){
 		//  Just to be same any defaults prevented.. not sure exactly about this
 		// first hide accordions that were open before
 		$('.accordion.reveal').removeClass('reveal').toggle();
 		// Show the panel that was hidden before, if it applies
 		$('.panel-hidden').removeClass('panel-hidden').toggle();
 		// Access DOM elements based on category
 		var $accordion = $('.accordion.'+category);
 		var $panel = $accordion.prev();
 		// Hide panel that was chosen, and reveal accordion selected
 		$panel.addClass('panel-hidden').slideToggle();
 		$accordion.removeClass('hidden').addClass('reveal').hide().fadeIn(500);
 		// Scroll page to location of accordion
 		$('html, body').stop().animate({
				scrollTop: $($accordion).offset().top-190
			}, 0, 'easeInOutExpo');
 	};

 	// Event when one of 3 panels is clicked (managemenet, directors, or advisor)
 	$('.panel').click(function(event){
 		event.preventDefault();
 		var category = $(this).attr('name');
 		console.log(category);
 		openPanel(category);
 	});

 	// Event when one of 3 links is clicked on team drop down menu
 	





});



