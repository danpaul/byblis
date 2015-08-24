(function(){


var keys = {
    '37': {symbol: 'left', state: false, type: 'direction'},
    '38': {symbol: 'up', state: false, type: 'direction'},
    '39': {symbol: 'right', state: false, type: 'direction'},
    '40': {symbol: 'down', state: false, type: 'direction'}
}

var keyWatch = function(direction){

    return function(e){

        var code = e.keyCode.toString();

        if( !keys[code] ){ return; }
        var k = keys[code];
        if( direction === 'down' && k.state ||
            direction === 'up' && !k.state ){
            return;
        }
        k.state = !k.state;
        var e = (direction === 'down') ? 'byblisInputKeydown' :
                                         'byblisInputKeyUp';

        $(document).trigger(e, [k]);
    }
}

$(document).keydown(keyWatch('down'));
$(document).keyup(keyWatch('up'));


}());