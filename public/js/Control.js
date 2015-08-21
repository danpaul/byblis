var Control = function(a, s) {

	var control = this;
	var app = a;
	var socket = s;
	var init = false;

	socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

	control.sendUpdatedUser = function() {
		// console.log(app.model.mainBird)
		socket.emit('userUpdatePostion', app.model.mainBird);
	}

	socket.on('userUpdatePosition', function (data) {
	   // data is user object
	   console.log(data);
	});

	control.userDisconnect = function()
	{
		socket.emit('userDisconnect', {userId: userId});
	}
	
	// socket.on('userPlaceBomb', {xPosition: ..., yPosition});

    socket.on('connect', function (data) {
        console.log('in connect event');
        socket.emit('userInit', function(err, data){
            if( err ){
                console.log('Error: ', err);
                return;
            }

            console.log(data);

            if( init == false )
            {         	
	            var b = new Bird(app);
	            b.createMainBird(data.user);
	            app.model.mainBird = b;

	            init = true;

	            var u = data.gameSate.users;

	            for( var i=0; i<u.length; i++ )
	            {
	            	var otherBird = new Bird(app);
	            	otherBird.createBird(u[i]);
	            }
	        }

			// data will looks like this:
			// {  
			//     "user":{  
			//         "id":"754c8930-4828-11e5-b242-5ff81680b6ad",
			//         "name":"Bowleopard Gorilla",
			//         "xPosition":7579,
			//         "yPosition":1523
			//     },
			//     "gameSate":{  
			//         "time":null,
			//         "users":[  

			//         ],
			//         "trees":[  

			//         ],
			//         "bombs":[  

			//         ]
			//     }
			// }
        })






    });



}