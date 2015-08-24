(function(){

    var byblis = window.byblis;
    var debug = byblis.config.debug;

    var u = byblis.user;

    var keys = {
        'left': {state: false},
        'up': {state: false},
        'right': {state: false},
        'down': {state: false}
    }

    var getUser = function(){
        var circle = byblis.two.makeCircle(72, 100, byblis.settings.userRadius);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;

        return circle;
    }

    var animationCallback = function(two){

        var elapsed = two.timeDelta;

        // add vector for current velocity
        

        // calculate accelerate for any key that is down

        // average vectors

        // check velocity limit

        // update position
    }

    $(document).on('byblisInitComplete', function(){
        u.graphic = getUser();
        byblis.core.addAnimationCallback(animationCallback);
    });

    $(document).on('byblisInputKeydown', function(e, key){
        if( !key.type === 'direction' ){ return; }
        if( debug ){ console.log('key down: ', key.symbol); }
    })

    $(document).on('byblisInputKeyUp', function(e, key){
        if( !key.type === 'direction' ){ return; }
        if( debug ){ console.log('key up: ', key.symbol); }
    })


}());