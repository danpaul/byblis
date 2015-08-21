var Bird = function() {

    var bird = this;
    bird.id;
    bird.points;
    bird.position;
    bird.name;
    bird.direction;
    bird.color;

    var dom;

    bird.createBird = function(d) {

    	var birdID="bird-"+0;
    	$('#canvas').append('<div class="bird" id="'+birdID+'"><div class="circle"></div><div class="triangle"></div></div>')

    	dom = $('#'+birdID);
    } 

    bird.updatePosition = function(d) {

    }

    bird.updatePositionByKey = function(d,k) {

    }

	// (function(){	
	// })();

}