var Tree = function(a) {

    
	var tree = this;
	var app = a;
	var id = app.model.treecount;
	app.model.treecount++;


	//$('#canvas').append("<span class='tree' id='tree-"+id+"'></span>");
	// $('#items').append('<div class="tree" id="tree-'+id+'"><div class="oval"></div><div class="rectangle"></div></div>' );

	$('#items').append('<div class="tree" id="tree-'+id+'"><div class="branch"></div><div class="leaf1"></div><div class="leaf2"></div><div class="leaf3"></div></div>');



	var b = $('#tree-'+id);
	ty = a.model.mainBird.yPosition;
	tx = a.model.mainBird.xPosition;

	TweenMax.to(b, 0.3, {left:tx+'px', top:ty+'px', ease:Elastic.easeOut})
	// (function(){	
	// })();

}