var categ = ["Movies", "Books", "Musics", "Series", "Cars", "Instruments", "Small Animals", "Danis", "Big Animals", "Dinosaurs", "Pencils", "Trees", "Tomatoes", "Spunkies", "Clouds", "Catapults", "Airplanes", "Bugs", "Roads"];
var catleng = categ.length;
var i;

$(function() { alert('Hola, Jquery funciona') 
});

$(document).ready(function(){
	$('.carus').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 300
	});
});