// connects to socket and emits the init event
$(document).ready(function(){

    var byblis = window.byblis;    
    var debug = byblis.config.debug;
    byblis.socket = io.connect(byblis.config.socketUrl);

    byblis.core.addAnimationCallback = function(cb){
        byblis.animationCallbacks.push(cb);
    }

    // init method
    byblis.socket.on('connect', function (data) {

        if( debug ){
            console.log('Connected to socket');
        }

        byblis.socket.emit('userInit', function(err, data){

            if( err ){
                console.log('userInit error: ', err);
                return;
            }

            if( debug ){ console.log('userInit success:', data); }

            _.each(data.gameSate.users, function(u){
                if( data.user.id === u.id ){ byblis.user = u; }
            });

            byblis.users = data.gameSate.users;
            byblis.bombs = data.gameSate.bombs;
            byblis.trees = data.gameSate.trees;

            // init Two.js
            byblis.two = new Two({
                width: byblis.settings.canvasWidth,
                height: byblis.settings.canvasHeight
            }).appendTo(document.getElementById('byblisCanvas').children[0]);
            byblis.two.bind('update', function(frameCount){
                _.each(byblis.animationCallbacks,
                       function(cb){ cb(byblis.two); });
            }).play();

            // trigger init complete event
            $(document).trigger('byblisInitComplete');
        });
    });
});