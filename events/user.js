var userManager = require('../lib/user_manager');
var bombManager = require('../lib/user_manager');

var _ = require('underscore');

// returns true if collision
var collisionDetection = function(x1, y1, x2, y2, radius){
    var dx = x2 - x1;
    var dy = y2 - y1;
    var distance = Math.sqrt(dx*dx + dy*dy);
    return(distance < radius);
}

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

    this.getUser = function(userId){
        var user = null;
        _.each(gameSate.user, function(u){
            if(u.id === userId){
                user = u;
            }
        });
        return user;
    }

    this.userDies = function(userId){
        socket.emit('userDies', {userId: userId});
    }

    this.updatePoints = function(userId, points){
        socket.emit('userUpdatePoints', {userId: userId, points: points});
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

        socket.broadcast.emit('userDisconnect', {userId: userId});
    });


    /**
        Requires:
            data.xPosition
            data.yPosition
    */
    socket.on('userPlaceBomb', function(data){

        console.log('placing bomb');

        var self = this;

        var userId = this.getUserId(socket);
        if( userId === null ){ return; }

        data.userId = userId;

        var user = this.getUser(userId);
        var bomb = bombManager.create(data);

        userManager.updatePoints(user,
                                 config.pointsPlantBomb,
                                 this.userDies,
                                 this.updatePoints);

        socket.emit('userPlaceBomb', bomb);

        setTimeout(function(){
            socket.emit('bombExploded', {id: bomb.id});
            // iterate through all users and see if any have collision
            _.each(gameSate.users, function(u){
                if(u.id === userId){ return; }
                if( collisionDetection(u.xPosition,
                                       u.yPosition,
                                       bomb.xPosition,
                                       bomb.yPosition,
                                       config.explosionRadius) ){

                    self.updatePoints(u,
                                      config.pointsHitBomb,
                                      self.userDies,
                                      self.userUpdatePoints);
                }
            });
        }, config.bombExplosionTime);
    })
}