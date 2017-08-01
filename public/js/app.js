var socket = io();

socket.on('connect', function(){
console.log('connected to socket.io server');
});

socket.on('message', function(message){
	console.log('New message:');
	console.log(message.text);
	jQuery('.messages').append('<p>' + message.text + '</p>');
});

//handles submitting of new message
var $form = jQuery('#message-form');

$form = jQuery('#message-form');
$form.on('submit', function(event){
	event.preventDefault();
	
var $message = $form.find('input[name=message]');
	socket.emit('message', {
		text: $message.val()
	});
	
	$message.val('');
});
/*$form.on('submit', function(event){
	event.preventDefault();
	alert($form.find('input[name=message').val());

	socket.emit('message', {
		text: $form.find.('input[name=message]').val()	
	});
});*/


