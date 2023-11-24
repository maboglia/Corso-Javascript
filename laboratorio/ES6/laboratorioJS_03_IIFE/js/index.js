let contatore = (function() {
    let conteggio = 0;
    return function() {
        return `Il valore del contatore è: ${conteggio++}`;
    }
})();

console.log(contatore());
console.log(contatore());
console.log(contatore());
console.log(contatore());
console.log(contatore());