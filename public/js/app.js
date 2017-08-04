var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);
	jQuery('.room-title').text(room);

socket.on('connect', function(){

	console.log('connected to socket.io server');
	socket.emit('joinRoom', {
		name: name,
		room: room
	});

});

socket.on('message', function(message){
	var momentTimestamp = moment.utc(message.timestamp);
	var $messages = jQuery('.messages');
	var $message = jQuery('<li class="list-group-item"></li>');
	console.log('New message:');
	console.log(message.text);
	console.log(message.room)
	$message.append('<p><strong>'+ message.name + ' '+ momentTimestamp.local().format('h:mm A') + '</p></strong>');
	$message.append('<p>'+ message.text + '</p>');
	$messages.append($message);
});

//handles submitting of new message
var $form = jQuery('#message-form');

$form = jQuery('#message-form');
$form.on('submit', function(event){
	event.preventDefault();
	
var $message = $form.find('input[name=message]');
	socket.emit('message', {
		name: name,
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


