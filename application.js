$(document).ready(function() {

var trash = '<span class="trash"></span>';
var notification = '<span class="notification"></span>';



function addItem(){
	$('#item').keydown(function(enter){
		if(enter.keyCode ==13) {
			postItem();
		}
	});
}
addItem();

function postItem(){
	var item = $('#item').val();
	var placeIt = $('<li>' + trash + item + notification +'</li>');
	$('.list').prepend(placeIt);
	$('#item').val('');
}

$(document).on('click', '.trash', function() {
	$(this).closest('li').fadeOut(350);
});

$(document).on('click', '.notification', function(){
    $(this).toggleClass('checkmark');
    $(this).closest('li').toggleClass('cross');
});
});

 





