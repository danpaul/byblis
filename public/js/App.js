var App = function(s) {

    var app, canvas, socket;

    app = this;
    app.socket = s;
	app.model = new Model();
	app.control = new Control(app, app.socket);
	
	canvas = $('#canvas');

	app.keydown = function(e) {
		// if(!model.mainBird) return;
		switch(e.keyCode) 
		{
			case(37):
    			app.model.mainBird.updatePositionByKey('x',-25);
    		break;
    		case(38):
    			app.model.mainBird.updatePositionByKey('y',-25);
    		break;
    		case(39):
    			app.model.mainBird.updatePositionByKey('x',25);
    		break;
    		case(40):
    			app.model.mainBird.updatePositionByKey('y',25);
    		break;
		}
	}

	app.keyup = function(e) {
		switch(e.keyCode)
        {
            case(91):
                // app.control.placeBomb( app.model.mainBird.xPosition, app.model.mainBird.yPosition);

                var b = new Bomb(app);
                b.userCreateBomb({id:app.model.bombcount, xPosition:0, yPosition:0});
                app.model.bombcount++;
            break;
            case(18):
                new Tree(app);
            break;
        }
	}
	


	// (function(){	
	// })();

}