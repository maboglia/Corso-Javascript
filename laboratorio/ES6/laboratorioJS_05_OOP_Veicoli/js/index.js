class Veicolo {

    constructor(marca, modello) {

        this.marca = marca;
        this.modello = modello;
        this.km = 0;
        this.immatricola();
        this._targa = 'TO' + Veicolo.targa; //binding with 'static' property
        //create function immatricola()

        console.log("Veicolo immatricolato");
    }

    immatricola() {
        return Veicolo.targa += 1;
    }

    //custom toString
    libretto() {
        console.log(`Il veicolo targato ${this._targa} è stato immatricolato`); //backtick to interpolate properties
        console.log(`targa: ${this._targa} 
        marca: ${this.marca} modello: ${this.modello}`); //backtick to interpolate properties

    }

}

/** create static 'property' */
Veicolo.targa = 0;

/** override del metodo toString */
Veicolo.prototype.toString = function() {
    return `--------------------
targa: ${this._targa} 
marca: ${this.marca} 
modello: ${this.modello}
`; //backtick to interpolate properties

}


/** moto extends Veicolo - inheritance */
class Moto extends Veicolo {

    constructor(marca, modello) {
        //call superclass constructor
        super(marca, modello);

        //Moto properties
        this.tipo = "Moto";
        console.log("tipo di veicolo immatricolato: " + this.tipo);
        Moto.immatricolate++;

    }

}
/** create static 'property' */
Moto.immatricolate = 0;

/** auto extends Veicolo - inheritance */
class Auto extends Veicolo {

    constructor(marca, modello) {
        //call superclass constructor
        super(marca, modello);

        //Auto properties
        this.tipo = "Auto";
        console.log("tipo di veicolo immatricolato: " + this.tipo);
        Auto.immatricolate++;

    }

}
/** create static 'property' */
Auto.immatricolate = 0;




//like java, c#, ...
let v = new Auto("FIAT", "500");
v.libretto();
let v2 = new Auto("FERRARI", "TestaRossa");
v2.libretto();
let m1 = new Moto("Yamaha", "MT09");
m1.libretto();

// console.log(typeof Veicolo);
// console.log(typeof Moto);
// console.log(typeof Auto);
// console.log(typeof m1);
// console.log(typeof v2);


// console.log(m1 instanceof Veicolo); //true
// console.log(m1 instanceof Moto); //true
// console.log(m1 instanceof Auto); //false


/** array di veicoli */
let veicoli = [v, v2, m1];
//array.foreach() con arrow function
veicoli.forEach(vei => console.log(vei.toString()));

veicoli.forEach(function (veicolo){
    console.log(veicolo.toString());
});

console.log("Totale veicoli immatricolati ", Veicolo.targa);
console.log("Totale moto immatricolate ", Moto.immatricolate);
console.log("Totale auto immatricolate ", Auto.immatricolate);