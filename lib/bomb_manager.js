var uuid = require('node-uuid');
var config = require('../config');

var userManager = {
    create: function(){
        var user = {};
        user.id = uuid.v1();
        user.name = generateName();
        user.points = config.startingPoints;
        user.xPosition = getRandomInt(0, config.mapX);
        user.yPosition = getRandomInt(0, config.mapY);
        user.direction = 90;
        user.color = getRandomColor();
        return user;
    }
}

module.exports = userManager;