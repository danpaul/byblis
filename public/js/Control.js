var Control = function(a, s) {

	var control = this;
	var app = a;
	var socket = s;

	socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

    

	// (function(){	
	// })();

}