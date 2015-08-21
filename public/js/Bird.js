var Bird = function() {

    var bird = this;
    bird.id;
    bird.xPosition;
    bird.yPosition;
    bird.name;
    bird.direction;
    bird.color;

    var figure;

    bird.createBird = function(d) {

    	bird.id = d.id;
    	bird.xPosition = d.xPosition;
    	bird.yPosition = d.yPosition;
    	bird.name = d.name;

    	var birdID="bird-"+bird.id;
    	$('#canvas').append('<div class="bird" id="'+birdID+'"><div class="circle"></div><div class="triangle"></div></div>')

    	figure = $('#'+birdID);
    } 

    bird.updatePosition = function(d) {

    }

    bird.updatePositionByKey = function(d,a) {
    	var p = figure.position();
		var tx, ty, r;
		if(d=='x')
		{
			tx = a+p.left;
			if(a<0){r=-90} else {r=90}
			TweenMax.to(figure, 0.4, {left:tx+'px', rotation:r, ease:Power2.easeOut, overwrite:1});
			bird.xPosition = tx;
		}
		else {
			ty = a+p.top;
			if(a<0){r=0} else {r=180}
			TweenMax.to(figure, 0.4, {top:ty+'px', rotation:r, ease:Power2.easeOut, overwrite:1});
			bird.yPosition = ty;
		}
    }

	// (function(){	
	// })();

}