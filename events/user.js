var userManager = require('../lib/user_manager');
var bombManager = require('../lib/user_manager');

var _ = require('underscore');

module.exports = function(data){

    var socket = data.socket;
    var gameSate = data.gameSate;
    var socketMap = data.socketMap;
    var io = data.io;

    this.getUserId = function(socket){
        var userId = null;
        _.each(socketMap, function(socketData){
            if(socketData.socketId === socket.id){
                userId = socketData.userId;
            }
        })
        return userId;
    }

    socket.on('userInit', function(callback){

        // create user
        var user = userManager.create();

        // add to socket map
        socketMap.push({
            socketId: socket.id,
            userId: user.id
        });

        // add to user array
        gameSate.users.push(user);

        // pass back user data
        callback(null, {user: user, gameSate: gameSate});

        // socket.emit('test', {});
    });

    socket.on('userUpdatePostion', function(userObject){
        socket.broadcast.emit('userUpdatePosition', userObject);
    });

    socket.on('disconnect', function () {
        console.log('user disconnect');
        // unmap
        // remove user from socket map
        var userId = null;
        var newSocketMap = [];
        _.each(socketMap, function(socketData){
            if(socketData.socketId === socket.id){
                userId = socketData.userId;                
            } else {
                newSocketMap.push(socketData);
            }
        })
        socketMap = newSocketMap;

        console.log('num users', gameSate.users.length);

        gameSate.users = _.filter(gameSate.users, function(user){
            return user.id !== userId;
        })

        // console.log('Setting new socket map', newSocketMap.length);
        // console.log('num users', gameSate.users.length);
        // console.log('User left: ', userId);

        // console.log('emitting disconnect');

        socket.broadcast.emit('userDisconnect', {userId: userId});
    });

    /**
        Requires:
            data.xPosition
            data.yPosition
            callback

    */
    socket.on('userPlaceBomb', function(data){
        var userId = this.getUserId(socket);
        if( userId === null ){ return; }
        


    })
}