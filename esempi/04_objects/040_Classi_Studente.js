class Studente {

    //non puoi  dichiarare variabili di istanza qui
    //let a =  "non si può";

    constructor(cognome, nome) {
        this.cognome = cognome;
        this.nome = nome;
        this.matricola = ++Studente.matricola;
    }

    stampaInfo() {
        return this.nome + " " + this.cognome + " mat: " + this.matricola;
    }

}

Studente.matricola = 0;
let studente = new Studente("mauro", "bogliaccino");
let studente2 = new Studente("paolo", "bogliaccino");

console.log(studente.cognome)
console.log(studente.nome)
console.log(studente.stampaInfo())
console.log(studente2.stampaInfo())