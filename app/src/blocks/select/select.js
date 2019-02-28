var
	classBlock = 'select', // Класс блока
	$selects = $('.' + classBlock + '__origin'); // Нативные селекты

$selects.each(function() {
	var
		$thisNative = $(this), // Нативный селект
		$thisBlock = $thisNative.closest('.' + classBlock), // Контейнер селекта
		classList = classBlock + '__list'; // Класс всплывающего списка

	/* Установка дополнительных классов для всплывающего списка */
	if ($thisBlock.hasClass(classBlock + '_size_md')) {
		classList += ' ' + classList + '_size_md';
	}

	if ($thisBlock.hasClass(classBlock + '_size_lg')) {
		classList += ' ' + classList + '_size_lg';
	}
	/* ===== */

	/* Инициализация селекта */
	$thisNative.selectmenu({

		// Установка классов
		classes: {
			'ui-selectmenu-button': classBlock + '__current', // Кнопка селекта
			'ui-selectmenu-button-open': classBlock + '__current_active', // Состояние кнопки при открытом селекте
			'ui-selectmenu-text': classBlock + '__text', // Текст внутри кнопки
			'ui-selectmenu-menu': classList // Выпадающий список
		},

		// Действия после инициализации
		create: function() {
			var $this = $(this); // Текущий нативный селект

			/* Обработка обычного селекта */
			$this
				.next()
				.append('' +
					'<svg class="' + classBlock + '__icon">' +
					'<use xlink:href="img/sprite.svg#svg-arrow-down"></use>' +
					'</svg>'
				);
			/* ===== */
		},

		// Действия при смене значения
		change: function() {
			$thisNative.trigger('change');
		}
	});
	/* ===== */
});

/* Закрытие селекта при ресайзе */
$(window).on('resize', function() {
	$selects.selectmenu('close');
});
/* ===== */