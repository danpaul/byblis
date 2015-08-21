$(document).ready(function(){

	var app;
	var socket = io.connect('http://45.55.91.118:8080');
    
    var startApp = function() {
        app = new App(socket);
        document.addEventListener('keyup', app.keyup, false);
        document.addEventListener('keydown', app.keydown, false);
   }

   startApp();

});