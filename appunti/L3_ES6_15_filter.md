# filter

ritorna un array con gli elementi filtrati.
    
```javascript

// un mazzo di carte da gioco
const cards = [];


// ciclo 4 semi: cuori, quadri, fiori, picche
for(let seme of ['C', 'Q', 'F', 'P']) 

    //ciclo 13 carte per seme con valore 1-13 
    for(let valore=1; valore<=13; valore++) 
        //riempio l'array di carte
        cards.push({ seme, valore });

// filtri sulla collezione di carte

// ritorna tutte le carte con valore 2:
cards.filter(c => c.valore === 2);

// [
//    { seme: 'C', valore: 2 },
//    { seme: 'Q', valore: 2 },
//    { seme: 'F', valore: 2 },
//    { seme: 'P', valore: 2 }
// ]

// torna tutte le carte di fiori:
cards.filter(c => c.seme === 'F'); // numero di carte: 13

// torna tutte le carte con valore superiore a 10 (le figure)
cards.filter(c => c.valore > 10); // numero di carte: 12 

// torna tutte le carte di cuori con valore superiore a 10
cards.filter(c => c.valore > 10 && c.seme === 'C'); // numero di carte: 3
```

---

Ecco un esercizio che mostra come funziona il metodo `filter()` in ES6 per filtrare gli elementi di un array:

**Obiettivo dell'esercizio:** Filtrare gli elementi di un array per selezionare solo quelli che soddisfano una condizione specifica.

```javascript
// Definire un array di numeri
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utilizzare il metodo filter() per selezionare solo i numeri pari
const numeriPari = numbers.filter(numero => numero % 2 === 0);

// Stampare l'array risultante
console.log("Numeri pari:", numeriPari);
```

In questo esercizio, abbiamo un array chiamato `numbers` contenente una serie di numeri. Utilizziamo il metodo `filter()` per selezionare solo i numeri pari. La funzione di callback passata a `filter()` verifica se un numero è pari (cioè il resto della divisione per 2 è uguale a 0) e restituisce `true` o `false` di conseguenza. Il risultato è un nuovo array chiamato `numeriPari` contenente solo i numeri pari dall'array originale.
