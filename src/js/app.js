$(document).ready(function() {
	
	// Show/Hide top-right user menu.
	$('#top-profile-wrap').click(function(){
		$('#top-profile-menu-wrap').toggleClass('visible');
	});

	var $profileMenuWrap = $('#top-profile-menu-wrap');

	// Hide top-right user menu if we click outside the element.
	$(document).click(function(e){
		if ($profileMenuWrap.hasClass('visible') && !$(e.target).closest('#top-profile-wrap').length) {
			if (!$(e.target).hasClass('top-profile-menu-link')) {
				$profileMenuWrap.removeClass('visible');
			}
		}
	});

	$(window).on('resize', function(){

		// Elements with class full-height gets adjusted on window resize.
		$('.full-height').css({
			'height': $(window).height() - 52
		});

		// Elements with center-vert gets verticalled centered on window resize.
		$('.center-vert').each(function() {
			var $this = $(this);
			$this.css({
				'marginTop': $this.height() / 2 * -1
			});
		});
	});

	// Run window resize at least once so that the styles get apples.
	$(window).resize();

	// Preload the series cover then animate in.
	$('<img/>').attr('src', $('#series-cover-bg').data('bg')).on('load', function() {
		$(this).remove();
		$('#series-cover-bg').css('background-image', 'url(' + $('#series-cover-bg').data('bg') + ')')
		.velocity({
			scale: [1.1, 1.05],
			opacity: [1, 0],
			translateX: [0, 20],
			translateY: [0, -20],
			borderTopLeftRadius: [0, $(window).height() / 2],
			borderTopRightRadius: [0, $(window).height() / 4],
			borderBottomRightRadius: [0, $(window).height() / 2],
			borderBottomLeftRadius: [0, $(window).height() / 1]
		}, {
			delay: 200,
			duration: 600,
			easing: [0.23, 1, 0.32, 1]
		});
	});

	// Custom slideUpIn transition that allows use for the stagger property.	
	$.Velocity.RegisterEffect('herro.slideUpIn', {
		defaultDuration: 300,
		calls: [
			[{
				opacity: [1, 0],
				translateY: [0, 30],
				translateX: [0, 0]
			}, 1, {
				easing: [0.23, 1, 0.32, 1]
			}]
		]
	});
});