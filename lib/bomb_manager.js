var uuid = require('node-uuid');
var config = require('../config');

/**
    Requires:
        data.userId
        data.xPostion
        data.yPosition
*/
var userManager = {
    create: function(data){
       var bomb = {};
        bomb.id = uuid.v1();
        bomb.xPosition = data.xPosition;
        bomb.yPosition = data.yPosition;
        return bomb;
    }
}

module.exports = userManager;