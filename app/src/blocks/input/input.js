/* Маска ввода телефона */
$('.input_tel').mask('+7 (999) 999-99-99');
/* ===== */

/* Маска ввода даты */
$('.input_date').mask('99.99.9999');
/* ===== */

/* Ввод только цифр */
$('.input_number').on('input', function() {
	var $this = $(this);

	$this.val(
		parseInt($this.val()) || ''
	);
});
/* ===== */
