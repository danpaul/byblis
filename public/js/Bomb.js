var Bomb = function(a) {

    var bomb = this;
    var app = a;
    var model = a.model;

	var tx,ty;
	var id = model.bombcount;

	$('#items').append('<div class="bomb" id="bomb-'+id+'"><div class="tail"></div><div class="body"></div></div>');

	var b = $('#bomb-'+id);
	ty = model.mainBird.yPosition;
	tx = model.mainBird.xPosition;

	TweenMax.to(b, 0.3, {left:tx+'px', top:ty+'px', ease:Bounce.easeOut});

	
	model.bombcount++;

	// (function(){	
	// })();

}