$(document).ready(function() {
	$("#item").keypress(function (e) {
		if(e.which ==13) {
			alert('You entered an item');
		}
	});		
});