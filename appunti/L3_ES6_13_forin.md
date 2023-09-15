# for ... in

Il costrutto  `for...in` fornisce un modo per enumerare le proprietà di un oggetto. 


## for/in
```javascript
for(variabile in collezion){
    frasi
}
```

In ES6, è più comune utilizzare il ciclo `for...of` per iterare attraverso gli elementi di un array o di un oggetto iterabile, mentre il ciclo `for...in` viene utilizzato per iterare attraverso le chiavi (proprietà) di un oggetto. Ecco un esercizio che mostra come funziona il ciclo `for...in`:

**Obiettivo dell'esercizio:** Utilizzare un ciclo `for...in` per iterare attraverso le chiavi di un oggetto e stamparle.

```javascript
// Definire un oggetto con alcune chiavi
const person = {
  nome: "Mario",
  cognome: "Rossi",
  età: 30,
  professione: "Ingegnere"
};

// Utilizzare il ciclo for...in per iterare attraverso le chiavi dell'oggetto
console.log("Chiavi dell'oggetto 'person':");
for (const key in person) {
  console.log(key);
}
```

In questo esercizio, abbiamo un oggetto chiamato `person` con alcune chiavi come "nome", "cognome", "età" e "professione". Utilizzando il ciclo `for...in`, iteriamo attraverso le chiavi dell'oggetto e stampiamo ciascuna chiave a console. Questo è utile quando si desidera ottenere l'elenco delle chiavi di un oggetto per scopi di introspezione o manipolazione dei dati.


E' anche possibile iterare col  `for...in` su un array (che in JS è un oggetto), ma non è una pratica consigliata.

---

### Object.keys

Object.keys è un modo per ricevere le chiavi di un oggetto sotto forma di array 

```javascript
const SYM = Symbol();
const o={a:1,b:2,c:3,[SYM]:4}; 
Object
    .keys(o).
    forEach(prop => console.log(`${prop}: ${o[prop]}`));
```

ad esempio per listare tutte le proprietà di un oggetto che cominciano per x:

```javascript
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(o)
.filter(prop => prop.match(/^x/))
.forEach(prop => console.log(`${prop}: ${o[prop]}`));
```