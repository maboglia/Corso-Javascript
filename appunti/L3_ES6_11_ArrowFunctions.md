# Arrow Functions

Le arrow function permettono di semplificare il codice in tre modi

* puoi omettere la keyword function.
* se la funzione ha un solo argomento, puoi omettere le parentesi.
* se il corpo della funzione ha una singola espressione, puoi omettere le graffe e il return

Le Arrow functions sono sempre anonime. 

Puoi assegnarle ad una variabile, ma non si può creare una _named function_ .

```javascript
const f1 = function() { return "hello!"; }
// OR
const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
// OR
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) { return a + b; }
// OR
const f3 = (a,b) => a + b;

```

---

## esempi 'estremi' 

le variazioni possibili nella sintassi sono un rischio: si perde chiarezza

* sintatticamente anonime
* problemi nella minificazione
* meglio assegnarle ad una variabile

```javascript
=>3
()=>3
x=>3
(...x)=>3
(x,y)=>3
//uno  statement deve essere wrappato
x => { try {5; } catch(e){}  }
x => { return true;  }
//se ritorni un oggetto devi wrapparlo tra parentesi
x => ({ x: y  })

```

Le arrow functions si utilizzano principalmente nei nuovi costrutti inseriti dalla versione ES2015 ([.filter](./L3_ES6_15_filter.md), [.map](L3_ES6_17_map.md), ...)

---

Ecco un esercizio che mostra il funzionamento delle arrow function in ES6:

**Obiettivo dell'esercizio:** Creare una funzione freccia che calcoli la somma di due numeri e restituisca il risultato.

```javascript
// Definire una funzione freccia che accetti due parametri
const somma = (a, b) => {
  return a + b;
};

// Chiamare la funzione e memorizzare il risultato in una variabile
const risultato = somma(5, 7);

// Stampare il risultato a console
console.log(`La somma è: ${risultato}`);
```

In questo esercizio, abbiamo definito una funzione freccia chiamata `somma` che prende due parametri `a` e `b` e restituisce la loro somma. Successivamente, abbiamo chiamato la funzione con gli argomenti `5` e `7` e abbiamo memorizzato il risultato nella variabile `risultato`. Infine, abbiamo stampato il risultato a console.

Le arrow function sono una sintassi più compatta per definire funzioni in ES6 e sono particolarmente utili quando si desidera mantenere il contesto della funzione padre, come nell'esempio sopra.