var moto = new Object();
//dati, attributi, proprietà
moto.marca = "Yamaha";
moto.modello = "MT09";
moto.cilindrata = 850;
moto.marcia = 0;
moto.velocita = 0;
moto.NUM_GIRI = 1000;
//metodi:operazioni su dati
moto.cambiaMarcia = function  (argument) {
	this.marcia = argument;
	console.log("hai cambiato marcia!")
	//alert("cambio " + this.marcia);
	this.calcoloVelocita();
};
moto.calcoloVelocita = function  () {
	this.velocita = (this.NUM_GIRI / (this.marcia * 100) );	
};

console.log(moto);

moto.cambiaMarcia(1);
console.log("la marcia è " + moto.marcia);
console.log(moto.velocita);

moto.cambiaMarcia(2);
console.log("la marcia è " + moto.marcia);
console.log(moto.velocita);