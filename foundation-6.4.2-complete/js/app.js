$(document).foundation()

window.prettyPrint && prettyPrint();

$('#dp2').fdatepicker({
	initialDate: '11-10-2017',
	format: 'dd-mm-yyyy',
	disableDblClickSelection: true,
	leftArrow:'<',
	rightArrow:'>',
	closeIcon:'X',
	closeButton: true
});