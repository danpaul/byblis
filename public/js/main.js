$(document).ready(function(){

    var socket = io.connect('http://45.55.91.118:8080');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

});