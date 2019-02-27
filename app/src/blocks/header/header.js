var
	$header = $('.header'),
	$menu = $header.find('.menu'),
	$logo = $menu.find('.logo'),
	classHeaderPinned = 'header_pinned',
	classMenuWhite = 'menu_color_white',
	classMenuSm = 'menu_size_sm',
	classLogoWhite = 'logo_color_white';

$(window).on('scroll resize', function() {
	var scrollTop = $(window).scrollTop();

	if (scrollTop) {
		$header.addClass(classHeaderPinned);
		$menu
			.removeClass(classMenuWhite)
			.addClass(classMenuSm);
		$logo.removeClass(classLogoWhite);
	} else {
		$header.removeClass(classHeaderPinned);
		$menu
			.addClass(classMenuWhite)
			.removeClass(classMenuSm);
		$logo.addClass(classLogoWhite);
	}
});