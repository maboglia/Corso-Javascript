function Moto (_marca, _marcia, _cilindrata) {
	
	this.marca = _marca;
	this.marcia = _marcia;
	this.cilindrata = _cilindrata;
	this.info = function  () {
		return "La moto è della marca " + this.marca + 
		" la marcia inserita è " +
		this.marcia;	
	};
	this.bollo = function(){
		return this.cilindrata * 5; 
	}
}


var moto1 = new Moto("Yamaha", 1, 850);

var moto2 = new Moto("Ducati", 2, 1000);

console.log(moto1.bollo());
console.log(moto2.bollo());

