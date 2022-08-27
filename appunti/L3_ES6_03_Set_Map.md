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

## Map

Le Map sono collezioni di coppie chiave/valore, dotete dell proprietà size

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
