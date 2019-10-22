/* eslint-disable no-console */
function Giocatore(n, s, r) {
    this.name = n;
    this.score = s;
    this.rank = r;
}
Giocatore.prototype.stampaInfo = function() {
    console.log("Io mi chiamo:", this.name);
};
Giocatore.prototype.incrementa = function() {
    this.rank++;
    console.log("Il mio piazzamento: ", this.rank);

};
var pietro = new Giocatore("pietro ", 10000, 5);
pietro.stampaInfo();
pietro.incrementa();
var paolo = new Giocatore("paolo ", 30000, 15);
paolo.stampaInfo();
paolo.incrementa();
var carlo = new Giocatore("carlo ", 50000, 10);
carlo.stampaInfo();
carlo.incrementa();