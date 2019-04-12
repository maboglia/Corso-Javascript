/**
 * Esempio for
 */

console.log("Io conto");
for (var i = 1; i < 5; i++) {
    console.log("Conto fino a " + i);
    var count = 0;
    while (count < i + 1) {
        console.log(count);
        count += 1;
    }

}


for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divisibile per 3 e 5");
    } else if (i % 3 === 0) {
        console.log("Divisibile per 3 ");
    } else if (i % 5 === 0) {
        console.log("Divisibile per 5 ");
    } else {
        console.log(i);
    }
}


/**
 * Esempio for con array di stringhe
 */


var citta = ["Torino", "Milano", "Roma", "Napoli", "Firenze", "Bologna"];

for (var i = 0; i < citta.length; i++) {
    console.log("Vorrei visitare " + citta[i]);
}


/**
 * Esempio for con array di stringhe
 */

var nomi = ["Mauro", "Paolo", "Anna", "Barbara", "Andrea"];

for (var i = 0; i < nomi.length; i++) {
    console.log("Conosco qualcuno che si chiama " + nomi[i]);
}