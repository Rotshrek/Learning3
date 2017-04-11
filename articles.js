var art = [
	{name:"Alosaurio", img:"/img/alo.jpg", desc:"Soy un alosaurio", size:3, fam:"Terópodo"},
	{name:"Tiranosaurio", img:"/img/trex.jpg", desc:"Soy un tiranosaurio", size:5, fam:"Terópodo"},
	{name:"Triceratops", img:"/img/tric.jpg", desc:"En realidad me llamo torosaurio", size:2.5, fam:"Ornitisquia"},
	{name:"Anquilosaurio", img:"/img/anqui.jpg", desc:"Ráscame la wata", size:2, fam:"Anquilosaurido"},
	{name:"Brontosaurio", img:"/img/bronto.jpg", desc:"Cuello largo", size:15, fam:"Sauropodo"},
	{name:"Paquicefalosaurio", img:"/img/paqui.jpg", desc:"Golpea cosas con la cabeza", size:1, fam:"Ornitisquia"},
	{name:"Velocirraptor", img:"/img/raptor.jpg", desc:"Emparentado con las viejas del metro", size:1, fam:"Terópodo"},
	{name:"Compsognatus", img:"/img/compi.jpg", desc:"Soy chuiquilin", size:0.3, fam:"Terópodo"},
	{name:"Iguanodón", img:"/img/iguan.jpg", desc:"Iguanas a mi!", size:4, fam:"Ornitisquia"},
	{name:"Estegosaurio", img:"/img/estego.jpg", desc:"Este goza saurio", size:4, fam:"Ornitisquia"},
	{name:"Pteranodón", img:"/img/ptera.jpg", desc:"Mis alas son mis manitas", size:1, fam:"Pterosaurio"},
	{name:"Ictiosaurio", img:"/img/icti.jpg", desc:"Soy el delfín antiguo", size:1, fam:"Ictioperagia"},
];
var artleng = art.length;
var x;

function sortname () {
	art.sort (function (a, b) {
		var x = a.name.toLowerCase ();
		var y = b.name.toLowerCase ();
		if (x > y) {return 1;}
		if (x < y) {return -1;}
		return 0;
	});
	articles ();
};

function sortsize () {
	art.sort (function (a, b) {return a.size - b.size});
	articles ();
};

function sortfam () {
	art.sort (function (a, b) {
		var x = a.fam.toLowerCase ();
		var y = b.fam.toLowerCase ();
		if (x > y) {return 1;}
		if (x < y) {return -1;}
		return 0;
	})
	articles ();
}

function articles () {
	var arts = "<article>";
	for (i = 0; i < artleng; i++) {arts += "<div class=articulo>" + "<img src='" + art[i].img + "' alt='" + art[i].name + "'>" + "<p class=desc>" + art[i].desc + "</p>" + "<p class=fam>" + art[i].fam + "</p>" + "</div>" ;}
		arts += "</article>";
	document.getElementById("sec1").innerHTML = arts;
	} 