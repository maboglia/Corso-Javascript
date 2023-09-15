# for ... of

Il costrutto for...of fornisce un modo per ciclare su elementi di una collection. 

La sintassi è:

```javascript
    for(variable of object)
        statement
```

Il ```for...of``` può essere utilizzato con qualsiasi oggetto iterabile. 


```javascript
const hand = [randFace(), randFace(), randFace()]; 
for(let face of hand)
console.log(`You rolled...${face}!`);
```

```for...of``` si utilizza quando non è importante conoscere l'inidice dell'iterazione.

---

### HTMLCollection
I metodi del DOM ritornano oggetti di tipo HTMLCollection, che è un oggetto simile all'array. Si può scorrere con i cicli for tradizionali, ma non si possono usare i nuovi metodi Array.prototype.

Per poterli utilizzare, devi convertire la HTMLCollection in un array, usando l'operatore spread `...`

```javascript
[...document.getElementsByTag Name(p)].
```

---

Ecco un esercizio che mostra il funzionamento del ciclo `for...of` in ES6:

**Obiettivo dell'esercizio:** Utilizzare un ciclo `for...of` per iterare attraverso gli elementi di un array e stampare ciascun elemento.

```javascript
// Definire un array di elementi
const colors = ["Rosso", "Verde", "Blu", "Giallo"];

// Utilizzare il ciclo for...of per iterare attraverso gli elementi dell'array
console.log("Colori dell'array:");
for (const color of colors) {
  console.log(color);
}
```

In questo esercizio, abbiamo un array chiamato `colors` che contiene una lista di colori. Utilizzando il ciclo `for...of`, iteriamo attraverso gli elementi dell'array e stampiamo ciascun colore a console. Il ciclo `for...of` semplifica notevolmente l'iterazione attraverso array e oggetti iterabili in JavaScript.