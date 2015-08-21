var userManager = require('../lib/user_manager');

module.exports = function(data){

    var socket = data.socket;
    var gameSate = data.gameSate;
    var socketMap = data.socketMap;

    socket.on('userInit', function(callback){

        // create user
        var user = userManager.create();

        // add to socket map
        socketMap.push({
            socketId: socket.id,
            userId: user.id
        });

        // add to user array
        gameSate.users.push;

        // pass back user data
        callback(null, {user: user, gameSate: gameSate});
    });
}