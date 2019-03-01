var
	classBlock = 'slider',
	classDots = classBlock + '__dots',
	classDot = classBlock + '__dot',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$this = $(this),
		sliderRows = +$this.attr('data-rows') || 1,
		sliderCols = +$this.attr('data-cols') || 1,
		sliderSmRows = +$this.attr('data-sm-rows') || sliderRows || 1,
		sliderSmCols = +$this.attr('data-sm-cols') || sliderCols || 1,
		sliderMdRows = +$this.attr('data-md-rows') || sliderSmRows || sliderRows || 1,
		sliderMdCols = +$this.attr('data-md-cols') || sliderSmCols || sliderCols || 1,
		sliderLgRows = +$this.attr('data-lg-rows') || sliderMdRows || sliderRows || 1,
		sliderLgCols = +$this.attr('data-lg-cols') || sliderMdCols || sliderCols || 1,
		sliderXlRows = +$this.attr('data-xl-rows') || sliderLgRows || sliderRows || 1,
		sliderXlCols = +$this.attr('data-xl-cols') || sliderLgCols || sliderCols || 1;

	$this.slick({
		rows: sliderRows,
		slidesToShow: sliderCols,
		slidesToScroll: sliderCols,
		infinite: false,
		arrows: false,
		dotsClass: classDots,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		},
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					rows: sliderSmRows,
					slidesToShow: sliderSmCols,
					slidesToScroll: sliderSmCols,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					rows: sliderMdRows,
					slidesToShow: sliderMdCols,
					slidesToScroll: sliderMdCols,
					dots: true
				}
			},
			{
				breakpoint: 991,
				settings: {
					rows: sliderLgRows,
					slidesToShow: sliderLgCols,
					slidesToScroll: sliderLgCols,
					dots: true
				}
			},
			{
				breakpoint: 1199,
				settings: {
					rows: sliderXlRows,
					slidesToShow: sliderXlCols,
					slidesToScroll: sliderXlCols,
					dots: true
				}
			}
		]
	});
});