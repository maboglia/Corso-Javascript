//una funzione base

//var modificaNome = function (nome) { return nome;};
//var modificaNome = (a,b) => { if(a>b)  a; else  b };

//utilizzo di map su collezioni

const carrello = [{desc: "pantaloni", prezzo: 35.50}, {desc: "maglia", prezzo: 10.25}];

const descrizioni = carrello.map( c => c.desc);
const prezzi = carrello.map( c => c.prezzo);

const descrizioniUPPER = descrizioni.map(x => x.toUpperCase());

console.log(carrello);
console.log(descrizioni);
console.log(prezzi);
console.log(descrizioniUPPER);