//global e block scope


// dichiaro 2 var globali
//trasformo in un oggetto
// const studente = {

//     nome: "mauro",
//     matricola: 1500
// };

// //dichiaro 2 funzioni

// function saluta() {
//     console.log(`${studente.nome} ha il numero di matricola ${studente.matricola}`);
// }

// function riSaluta() {
//     console.log(`ti saluta ${studente.nome}`);
// }

// saluta();
// riSaluta();

/**
 * Block
 */

console.log("prima del blocco"); {
    console.log("dentro al blocco");
    //dichiaro una const
    const x = 7;
    console.log(x); //la vedo
}

console.log(x); // x is not defined
console.log("dopo il blocco");