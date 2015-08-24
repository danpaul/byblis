// Initializes byblis global object and sets config
window.byblis = {};

byblis.config = {
    socketUrl: 'http://danb.ngrok.io',
    debug: true
}

// should get these from server
byblis.settings = {
    canvasWidth: 400,
    canvasHeight: 400,

    userRadius: 50
};

// core functionality
byblis.core = {};

byblis.user = null;
byblis.socket = null;
byblis.two = null;

byblis.animationCallbacks = [];

byblis.users = [];
byblis.bombs = [];
byblis.trees = [];