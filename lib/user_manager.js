var generateName = require('sillyname');
var uuid = require('node-uuid');
var config = require('../config');
// var one = require('onecolor');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var userManager = {
    create: function(){
        var user = {};
        user.id = uuid.v1();
        user.name = generateName();
        user.points = config.startingPoints;
        user.xPosition = getRandomInt(0, config.mapX);
        user.yPosition = getRandomInt(0, config.mapY);
        user.velocity = 0.0;
        user.direction = 0.0;
        user.color = getRandomColor();
        return user;
    },
    updatePoints: function(userObject, points, userDiesCallback, updatePointsCallback){
        userObject.points += points;
        updatePointsCallback(userObject.id, userObject.points);
        if( userObject.points <= 0 ){
            userDiesCallback(userObject.id);
        }
    }
}

module.exports = userManager;