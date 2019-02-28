var
	classAside = 'aside',
	classAsideOpened = classAside + '_opened',
	classToggle = 'toggle',
	classToggleActive = classToggle + '_opened',
	classToggleInactive = classToggle + '_closed',
	classAsideToggle = 'js-' + classAside + '__' + classToggle,
	$aside = $('.' + classAside),
	$toggle = $('.' + classAsideToggle),
	delay = 300;

/* Скрытие / раскрытие бокового меню при клике на гамбургер */
$toggle.on('click', function() {

	if ($aside.hasClass(classAsideOpened)) {
		toggleAside('close');
	} else {
		toggleAside('open');
	}
});
/* ===== */

/* Закрытие бокового меню при ресайзе */
$(window).on('resize', function() {
	if ($(window).outerWidth() < 992) return;

	if ($aside.hasClass(classAsideOpened)) {
		toggleAside('close');
	}
});
/* ===== */

/* Закрытие бокового меню при нажатии ESC */
var closeAsideOnEsc = function(event) {
	if (event.keyCode !== 27) return;
	toggleAside('close');
};
/* ===== */

/* Показывает или скрывает боковое меню */
function toggleAside(action) {

	if (action === 'open') {
		$aside.addClass(classAsideOpened);
		$(document).on('keydown', closeAsideOnEsc);
		toggleBodyScroll();
	}

	if (action === 'close') {
		$(document).off('keydown', closeAsideOnEsc);
		$aside.removeClass(classAsideOpened);
		$toggle
			.removeClass(classToggleActive)
			.addClass(classToggleInactive);

		setTimeout(function() {
			toggleBodyScroll(false);
		}, delay / 2);
	}
}
/* ===== */