var elemento = document.getElementById('titoloFoto');
var immagine = document.getElementById('fotoCopertina');
var contatore = 0;
var foto = [
	'img/gatti_abbracciati.jpg',	
	'img/gatto_gomitolo.png',	
	'img/gatto_volante.jpg',	
	'img/gatto_zampa.jpg',		
	'img/gattoinsu.png',
	'img/gatto_volante.jpg',
	'http://best5.it/b5/wp-content/uploads/2017/05/Le-5-razze-di-gatti-piu%CC%80-eleganti3-800x400-800x400.jpg'	
];

var titoli = [
	'gatti abbracciati',//0	
	'gatto gomitolo',	//1
	'gatto volante',	//2
	'gatto zampa',		//3
	'gatto in su',		//4
	'gatto volante',	//5
	'gatto remoto'		//6
];
var slideshow = "";
//alert();

console.dir(elemento);

immagine.onclick = function () {
	bloccaSlideshow();
};

function cambiaImmagine() {

	elemento.innerHTML = titoli[contatore];
	// if (contatore == foto.length - 1) 
	// 	immagine.src = foto[contatore];
	// else
		immagine.src = ""+foto[contatore];
	contatore++;
	console.log(contatore);
	if(contatore >= foto.length) contatore = 0;

}

function lanciaSlideshow() {
	slideshow = setInterval(cambiaImmagine, 2000);
};

function bloccaSlideshow() {
	clearInterval(slideshow);
}










