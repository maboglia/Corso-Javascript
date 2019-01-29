//modo letterale per definire un oggetto
var moto = { 
	"marca": "Yamaha", 
	"modello": "MT09", 
	"cilindrata": 850, 
	marcia: 0, 
	velocita: 0, 
	NUM_GIRI: 1000,
	acceso: false, 
	cambiaMarcia : function  (argument) {
	this.marcia = argument;
	console.log("hai cambiato marcia!")
	//alert("cambio " + this.marcia);
	this.calcoloVelocita();
	},
	calcoloVelocita : function  () {
	this.velocita = (this.NUM_GIRI / (this.marcia * 100) );	
	}
};

moto.colore= "giallo";

console.log(moto);

moto.cambiaMarcia(1);
console.log("la marcia è " + moto.marcia);
console.log(moto.velocita);

moto.cambiaMarcia(2);
console.log("la marcia è " + moto.marcia);
console.log(moto.velocita);