var Bomb = function(a) {

    var bomb = this;
    var app = a;
    var model = a.model;

	bomb.id;
    bomb.xPosition;
    bomb.yPosition;

	
	bomb.userCreateBomb = function(data) {
		bomb.id = data.id;
		bomb.xPosition = data.xPosition;
		bomb.yPosition = data.yPosition;

		$('#items').append('<div class="bomb" id="bomb-'+bomb.id+'"><div class="tail"></div><div class="body"></div></div>');
		var b = $('#bomb-'+bomb.id);
		ty = model.mainBird.yPosition;
		tx = model.mainBird.xPosition;

		TweenMax.to(b, 0.3, {left:tx+'px', top:ty+'px', ease:Bounce.easeOut});
	}

	bomb.otherUserCreateBomb = function(data) {
		bomb.id = data.id;
		bomb.xPosition = data.xPosition;
		bomb.yPosition = data.yPosition;

		$('#items').append('<div class="bomb" id="bomb-'+bomb.id+'"><div class="tail"></div><div class="body"></div></div>');
		var b = $('#bomb-'+bomb.id);
		ty = bomb.yPosition;
		tx = bomb.xPosition;

		TweenMax.to(b, 0.3, {left:tx+'px', top:ty+'px'});
	}

	// (function(){	
	// })();

}