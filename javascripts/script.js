$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows:false,
		dots: false
	});

	$('.nota').on("mouseenter", function() {
				$(this).css("opacity", "0");
				$(this).parent().find("img").css("opacity", '1');


		});

	$('.nota').on("mouseleave", function() {
				$(this).css("opacity", "1");
				$(this).parent().find("img").css("opacity", '0.5');

		});

	$.get("./datos.json", function(datos){
		$.each(datos.notas, function(nota){
		var div = '<div id="box" class="col-xs-4"><img class="imagenes" src="' + nota.imagen + '" width="100%"/><a class="nota" href="#"><h2 id="texto">'+nota.titulo+'</h2></a></div>';	
		$("#notasContainer").append(div);
		});
	});
});