var
	$blocks = $('.scroll'),
	delay = 700;

$blocks.each(function() {
	var
		$block = $(this),
		link = $block.attr('href'),
		$target = $(link);

	$block.on('click', function() {

		if (!$target.length) return;

		var
			headerHeight = $(window).outerWidth() > 991 ? 106 : 40,
			targetPos = $target.offset().top;

		$('html, body')
			.stop(true)
			.animate({
				scrollTop: targetPos - headerHeight + 1
			}, delay);
	});
});