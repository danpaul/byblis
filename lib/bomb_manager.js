var uuid = require('node-uuid');
var config = require('../config');

/**
    Requires:
        data.userId
        data.explosionCallback
        data.xPostion
        data.yPosition
*/
var userManager = {
    create: function(data){

        - id
        - position[x, y]
        - owner
        - created (time)
        var bomb = {};
        bomb.id = uuid.v1();
        bomb.xPosition = data.xPosition;
        bomb.yPosition = data.yPosition;

        setTimeout(data.explosionCallback, config.bombExplosionTime);

        return bomb;
    }
}

module.exports = userManager;