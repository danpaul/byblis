var Bird = function(app) {

    var bird = this;
    bird.id;
    bird.xPosition;
    bird.yPosition;
    bird.name;
    bird.direction;
    bird.color;

    var figure;

    bird.createMainBird = function(d) {

    	bird.id = d.id;
    	bird.xPosition = 10;
    	bird.yPosition = 10;
    	bird.name = d.name;
    	bird.color = d.color;
    	bird.direction = d.direction;

    	var birdID="bird-"+bird.id;
    	$('#users').append('<div class="bird" id="'+birdID+'"><div class="circle"></div><div class="triangle"></div></div>');

    	figure = $('#'+birdID);

    	$('#'+birdID+' .circle').css('background-color', bird.color );
		$('#'+birdID+' .triangle').css('border-bottom-color', bird.color );

		TweenMax.to( figure, 0.3, {rotation:bird.direction, left:bird.xPosition, top:bird.yPosition});
    } 

    bird.createBird = function(d) {

    	bird.id = d.id;
    	bird.xPosition = d.xPosition;
    	bird.yPosition = d.yPosition;
    	bird.name = d.name;
    	bird.color = d.color;
    	bird.direction = d.direction;

    	// console.log(bird.xPosition);
    	// console.log(bird.yPosition);

    	var birdID="bird-"+bird.id;
    	$('#users').append('<div class="bird" id="'+birdID+'"><div class="circle"></div><div class="triangle"></div></div>');

    	figure = $('#'+birdID);

    	$('#'+birdID+' .circle').css('background-color', bird.color );
		$('#'+birdID+' .triangle').css('border-bottom-color', bird.color );

		// TweenMax.to( figure, 0.3, {rotation:bird.direction, left:bird.xPosition, top:bird.yPosition});

		TweenMax.to( figure, 0.3, {rotation:bird.direction} );
		figure.css('left', bird.xPosition);
		figure.css('top', bird.yPosition);

    } 

    bird.updatePosition = function(d) {
// console.log('updating');
    	TweenMax.to( figure, 0.3, {rotation:bird.direction, left:bird.xPosition, top:bird.yPosition});
    }

    bird.updatePositionByKey = function(d,a) {
    	var p = figure.position();
		var tx, ty, r;
		if(d=='x')
		{
			tx = a+p.left;
			if(a<0){r=-90} else {r=90}
			TweenMax.to(figure, 0.4, {left:tx+'px', rotation:r, ease:Power2.easeOut, overwrite:1});
			app.model.mainBird.xPosition = tx;
		}
		else {
			ty = a+p.top;
			if(a<0){r=0} else {r=180}
			TweenMax.to(figure, 0.4, {top:ty+'px', rotation:r, ease:Power2.easeOut, overwrite:1});
			app.model.mainBird.yPosition = ty;
		}

		app.model.mainBird.direction = r;
		app.control.sendUpdatedUser();
    }

	// (function(){	
	// })();

}