var App = function(s) {

    var app, canvas, socket;

    app = this;
    app.socket = s;
	app.model = new Model();
	app.control = new Control(app, app.socket);
	app.bird = new Bird();

	model.mainBird = app.bird;
	
	canvas = $('#canvas');

	app.keydown = function(e) {
		// if(!model.mainBird) return;
		switch(e.keyCode) 
		{
			case(37):
    			bird.updatePositionByKey('x',-25);
    		break;
    		case(38):
    			bird.updatePositionByKey('y',-25);
    		break;
    		case(39):
    			bird.updatePositionByKey('x',25);
    		break;
    		case(40):
    			bird.updatePositionByKey('y',25);
    		break;
		}
	}

	app.keyup = function(e) {
		switch(e.keyCode)
        {
            case(91):
                new Bomb(app.model, app);
            break;
            case(18):
                new Tree(app.model, app);
            break;
        }
	}
	


	// (function(){	
	// })();

}