# ES6 - EcmaScript 2015

## Set 

Come in Java, si tratta di una collezione che non ammette duplicati

per aggiungere valori si usa il metodo `add()`

```javascript
let moto = new Set();
moto.add('Yamaha');
moto.add('Honda');
moto.add('BMW');
moto.add('BMW');//non viene aggiunto
console.log(moto.size);// 3
console.log(moto.has('BMW'));// true

```

Eliminare duplicati da un array

```javascript
let viaggi = ['Roma', 'Torino', 'Milano','Roma'];
let cittaVisitate  = new Set(viaggi);
for (let citta of cittaVisitate.values()){
    console.log(citta);
    
}
```

---

Ecco un esercizio che mostra come funziona l'oggetto `Set` in ES6:

**Obiettivo dell'esercizio:** Utilizzare l'oggetto `Set` per gestire un insieme unico di elementi.

```javascript
// Creare un nuovo set vuoto
const set = new Set();

// Aggiungere alcuni elementi al set
set.add("mela");
set.add("banana");
set.add("fragola");

// Verificare se un elemento esiste nel set
const elementoDaCercare = "banana";
if (set.has(elementoDaCercare)) {
  console.log(`${elementoDaCercare} è presente nel set.`);
} else {
  console.log(`${elementoDaCercare} non è presente nel set.`);
}

// Stampare la dimensione del set
console.log(`Il set contiene ${set.size} elementi.`);

// Rimuovere un elemento dal set
const elementoDaRimuovere = "mela";
set.delete(elementoDaRimuovere);

// Stampare tutti gli elementi del set
console.log("Elementi nel set:");
for (const elemento of set) {
  console.log(elemento);
}

// Svuotare completamente il set
set.clear();

// Verificare se il set è vuoto
if (set.size === 0) {
  console.log("Il set è vuoto.");
} else {
  console.log("Il set non è vuoto.");
}
```

In questo esercizio, iniziamo creando un nuovo oggetto `Set` vuoto chiamato `set`. Quindi, aggiungiamo alcuni elementi al set usando il metodo `add()`. Successivamente, verifichiamo se un elemento specifico esiste nel set con il metodo `has()`. Stampiamo anche la dimensione del set utilizzando la proprietà `size`. Rimuoviamo un elemento dal set con il metodo `delete()`, quindi stampiamo tutti gli elementi del set con un ciclo `for...of`. Infine, svuotiamo completamente il set con il metodo `clear()` e verifichiamo se è vuoto.

---

## Map

Le Map sono collezioni di coppie chiave/valore, dotate della proprietà size

```javascript
let garage = new Map();
let auto = "Ferrari";
let moto = {marca: 'BMW', velocita: 200};

garage.set("auto", auto);
garage.set("moto", moto);
console.log(garage);

```

Simile ad un array bidimensionale

```javascript
let voti = [  ['A', 100], ['B', 90]. ['C',80]  ];
let mappaVoti = new Map(voti);
console.log(mappaVoti);

for (const [chiave, valore] of mappaVoti) {
    console.log(`se prendi ${valore} vale ${chiave}`);
}

```

Creare una mappa da un altro dato strutturato e contare le occorrenze

```javascript
//stringa rappresentante i valori del dado lanciato 20 volte
let dadi = '1354652215463322';
//creouna mappa per riclassificare i lanci
let lanciDado = new Map();

for (let index = 0; index < dadi.length; index++) {
    //estraggo il singolo valore
    let element = dadi[index];
    //se il valore non è compreso tra la chiavidella mappa, 
    //slo inserisco ed inizializzo ad 1
    if (!lanciDado.has(element)) {
        lanciDado.set(element, 1)
    //altrimenti incremento il contatore delle uscite
    } else {
        lanciDado.set(element, lanciDado.get(element)+ 1);
        
    }
    
}
//stampo la  mappa
console.log(lanciDado);
```

---

Ecco un esercizio che mostra come funziona l'oggetto `Map` in ES6:

**Obiettivo dell'esercizio:** Utilizzare l'oggetto `Map` per gestire coppie chiave-valore.

```javascript
// Creare una nuova mappa vuota
const mappa = new Map();

// Aggiungere alcune coppie chiave-valore alla mappa
mappa.set("nome", "Alice");
mappa.set("età", 30);
mappa.set("linguaggio", "JavaScript");

// Ottenere il valore di una chiave specifica
const chiaveDaCercare = "età";
if (mappa.has(chiaveDaCercare)) {
  console.log(`${chiaveDaCercare}: ${mappa.get(chiaveDaCercare)}`);
} else {
  console.log(`${chiaveDaCercare} non è presente nella mappa.`);
}

// Stampare la dimensione della mappa
console.log(`La mappa contiene ${mappa.size} coppie chiave-valore.`);

// Rimuovere una coppia chiave-valore dalla mappa
const chiaveDaRimuovere = "nome";
mappa.delete(chiaveDaRimuovere);

// Stampare tutte le chiavi e i valori della mappa
console.log("Chiavi e Valori nella mappa:");
for (const [chiave, valore] of mappa) {
  console.log(`${chiave}: ${valore}`);
}

// Svuotare completamente la mappa
mappa.clear();

// Verificare se la mappa è vuota
if (mappa.size === 0) {
  console.log("La mappa è vuota.");
} else {
  console.log("La mappa non è vuota.");
}
```

In questo esercizio, iniziamo creando una nuova mappa vuota chiamata `mappa`. Quindi, aggiungiamo alcune coppie chiave-valore alla mappa utilizzando il metodo `set()`. Otteniamo il valore di una chiave specifica con il metodo `get()` e verifichiamo se una chiave esiste nella mappa con il metodo `has()`. Stampiamo anche la dimensione della mappa utilizzando la proprietà `size`. Rimuoviamo una coppia chiave-valore dalla mappa con il metodo `delete()`, quindi stampiamo tutte le chiavi e i valori della mappa utilizzando un ciclo `for...of`. Infine, svuotiamo completamente la mappa con il metodo `clear()` e verifichiamo se è vuota.