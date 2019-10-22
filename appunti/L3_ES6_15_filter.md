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
