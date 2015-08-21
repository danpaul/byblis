$(document).ready(function(){

    // var socket = io.connect('http://a4317462.ngrok.io:8080');
    var socket = io.connect('http://danb.ngrok.io');

    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

    socket.on('connect', function (data) {
        console.log('in connect event');
        socket.emit('userInit', function(err, data){
            if( err ){
                console.log('Error: ', err);
                return;
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

});