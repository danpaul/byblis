var generateName = require('sillyname');
var uuid = require('node-uuid');
var config = require('../config');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var userManager = {
    create: function(){
        var user = {};
        user.id = uuid.v1();
        user.name = generateName();
        user.points = config.startingPoints;
        user.xPosition = getRandomInt(0, config.mapX);
        user.yPosition = getRandomInt(0, config.mapY);
        return user;
    }
}

module.exports = userManager;