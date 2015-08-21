$(document).ready(function(){

	var app;
	// var socket = io.connect('http://45.55.91.118:8080');
    var socket = io.connect('http://danb.ngrok.io');    
   
    var startApp = function() {
        app = new App(socket);
        document.addEventListener('keyup', app.keyup, false);
        document.addEventListener('keydown', app.keydown, false);
   }


// socket.emit('userUpdatePostion', userObject);

//  socket.on('connect', function (data) {
//         // console.log('in connect event');
//         socket.emit('userInit', function(err, data){

//             if( err ){
// console.log(4)
//                 console.log('Error: ', err);
//                 return;
//             }
// console.log(data)
//         });
//     });


   startApp();

});