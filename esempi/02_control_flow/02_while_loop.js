/**
 * esempio while loop
 */

var moneta = Math.floor(Math.random() * 2);

while (moneta === 0) {
    console.log("Testa! Prova ancora...");
    moneta = Math.floor(Math.random() * 2);
}
console.log("Croce! :)");


/**
 * esempio do..while
 * @param {*} distanza in km 
 */

var maratona = function(distanza) {
    do {
        console.log("Continua a correre, mancano " + distanza + " km all'arrivo!");
        distanza -= 1;
    } while (distanza > 0)

};

maratona(5);