## 1  Somma di numeri

```javascript
/*
Scrivere una funzione sum() che ritorni la somma di un numero arbitrario di valori passati in argomento.

*/


// Scrivi il codice qui

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110
```

---

```javascript

function sum(...args) {
  var total;
  total = args.reduce((acc, elem) => acc + elem, 0);
  console.log(total);
}

sum(1, 3);
//4

sum(10, 20, 5);
//35

sum(2, 5, 80, 1, 10, 12);
//110

```

---

## 2 Const

```javascript
/* 
Rispondi alle seguenti domande:
  1. Perché nessun errore viene generato DOPO la linea 14?
  2. Perché DOPO la linea 19 TypeError viene generato?

cambia una linea di codice per far scomparire l'errore.
Non cambiare le linee 14, 19.
*/


const arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// PRIMA: Uncaught TypeError:
//   Assignment to constant variable.
// DOPO: nessun errore

console.log(arr);
// [1, 2, 3, 4]

```

---

```javascript

var arr = [1, 2];

arr.push(3);

console.log(arr);
// [1, 2, 3]

arr = [1, 2, 3, 4];
// PRIMA: Uncaught TypeError:
//   Assignment to constant variable.
// DOPO: nessun errore

console.log(arr);
// [1, 2, 3, 4]

```

---

## 3 Let

```javascript
/*
cambia codice per generare l'ouput indicato.
*/


var i = 10;

for (var i = 0; i < 5; i++) {
  // some stuff
  console.log(i);
}

console.log(i);
//output:
// PRIMA: 5
// DOPO: 10

```

---

```javascript

var i = 10;

for (let i = 0; i < 5; i++) {
  // some stuff
  console.log(i);
}

console.log(i);
// PRIMA: 5
// DOPO: 10

```

---

## 4 Hoisting

```javascript
/*
cambia codice sistemare l'errore DOPO la linea 15.
L'errore DOPO la linea 20 dovrebbe persistere.
*/


var a = 5,
  b = 10;

if (b > a) {
  c = a + b + c;
  let c = 2;
  console.log(c);
  // PRIMA: Uncaught ReferenceError: c è not defined
  // DOPO: 17
}

console.log(c);
// Uncaught ReferenceError: c è not defined

```

---

```javascript

var a = 5,
  b = 10;

if (b > a) {
  let c = 2;
  c = a + b + c;
  console.log(c);
  // PRIMA: Uncaught ReferenceError: c è not defined
  // DOPO: 17
}

console.log(c);
// Uncaught ReferenceError: c è not defined

```

---

## 5  Ternary Operator

```javascript
/*
cambia i contenuti della funzione tipoNumerico 
usando l'operatore ternario.
*/


function tipoNumerico(a) {
  if (typeof a === "number") {
    return "E' un numero";
  } else {
    return "Non è un numero";
  }
}

console.log(tipoNumerico(10));
// E' un numero

console.log(tipoNumerico("Buongiorno a tutti"));
// Non è un numero

console.log(tipoNumerico(true));
// Non è un numero

```

---

```javascript

function tipoNumerico(a) {
  return typeof a === "number" ? "E' un numero" : "Non è un numero";
}

console.log(tipoNumerico(10));
// E' un numero

console.log(tipoNumerico("Buongiorno a tutti"));
// Non è un numero

console.log(tipoNumerico(true));
// Non è un numero

```

---

## 6  Arrow Functions

```javascript
/*
Usa le arrow functions invece delle funzioni tradizionali,
ove possibile.
*/


function prodotto(a, b) {
  return a * b;
}

setTimeout(function() {
  console.log(prodotto(5, 10));
}, 1000);
// 50

```

---

```javascript

var prodotto = (a, b) => a * b;

setTimeout(() => console.log(prodotto(5, 10)), 1000);
// 50

```

---

## 7  Default parameters

```javascript
/*
Rispondi alle seguenti domande:
1. Perché alla linea 14 non possiamo usare le seguenti istruzioni:
prodotto = prodotto || 2;

Setta il valore di default del parametro  prodotto
nella funzione moltiplicaPer().
*/


function moltiplicaPer(a, prodotto) {
  prodotto = prodotto !== undefined ? prodotto : 2;
  console.log(a * prodotto);
}

moltiplicaPer(2);
// 4

moltiplicaPer(2, undefined);
// 4

moltiplicaPer(2, 0);
// 0

moltiplicaPer(5, 10);
// 50

```

---

```javascript

function moltiplicaPer(a, prodotto = 2) {
  console.log(a * prodotto);
}

moltiplicaPer(2);
// 4

moltiplicaPer(2, undefined);
// 4

moltiplicaPer(2, 0);
// 0

moltiplicaPer(5, 10);
// 50

```

---

## 8  Controllare la presenza dei parametri in una funzione

```javascript
/*
Lancia un Error quando la funzione quadrato() viene chiamata senza argomenti.

Scrivi una nuovafinzione e usala come parametro di default.
*/


function quadrato(a) {
  console.log(a * a);
}

quadrato(10);
// 100

quadrato();
// PRIMA: NaN
// DOPO: Uncaught Error: Function quadrato requires
// an argument!

```

---

```javascript

function argomentoMancante() {
  throw new Error("Function quadrato requires an argument!");
}

function quadrato(a = argomentoMancante()) {
  console.log(a * a);
}

quadrato(10);
// 100

quadrato();
// PRIMA: NaN
// DOPO: Uncaught Error: Function quadrato requires
// an argument!

```

---

## 9  Object Destructuring

```javascript
/*
Dichiara la funzione prodotto() che dovrà moltiplicare i valori 
di x, y, z dell'oggetto passato in argomento.
*/


var obj = {
  x: 5,
  y: 20,
  z: 3
};

// Scrivi qui la funzione prodotto()

console.log(prodotto(obj));
// 300

```

---

```javascript

var obj = {
  x: 5,
  y: 20,
  z: 3
};

function prodotto({ x, y, z }) {
  return x * y * z;
}

console.log(prodotto(obj));
// 300

```

---

## 10  Destructuring e Rest Operator

```javascript
/*
Assegna i valori alle variabili a, b, c usando la destrutturazione e il parametro rest.
*/


var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

// Scrivi il codice qui

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]

```

---

```javascript

var a, b, c;

var arr = [1, 2, 3, 4, 5, 6, 7];

[a, b, ...c] = arr;

console.log(a);
// 1

console.log(b);
// 2

console.log(c);
// [3, 4, 5, 6, 7]

```

---

## 11  Spread Operator

```javascript
/*
Usa lo Spread Operator per costruire un array di variabili.
*/


var a, b, c, d, arr;

a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

// Scrivi il codice qui

console.log(arr);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

```

---

```javascript

var a, b, c, d, arr;

a = [1, 2];
b = [4, 5];
c = [8, 9, 10];
d = 11;

arr = [0, ...a, 3, ...b, 6, 7, ...c, d];

console.log(arr);
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

```

---

## 12  Copiare Array

```javascript
/*
Crea una copia dell'array a
*/


var a = [1, 2, 3];

var b;

//Copy array here

b.push("nuovoElemento");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "nuovoElemento"]

```

---

```javascript

var a = [1, 2, 3];

var b;

// b = a.slice();
b = [...a];

b.push("nuovoElemento");

console.log(a);
// [1, 2, 3]

console.log(b);
// [1, 2, 3, "nuovoElemento"]

```

---

## 13  Template Literals

```javascript
/*
Scrivi una funzione carInfo() che ritorni informazioni su ciascuna auto.

L'auto è considerata economica se il suo prezzo è <= 20000
L'auto è considerata costosa se il suo prezzo è > 20000
*/


var cars = [
  { brand: "Honda", prezzo: 13000 },
  { brand: "Rolls-Royce", prezzo: 120000 }
];

// Scrivi carInfo() qui

cars.forEach(car => console.log(carInfo(car)));
/* Il prezzo della mia Honda è 13000€
 ed è un'auto economica. */

/* Il prezzo della mia Rolls-Royce
è 120000€ ed è un'auto costosa. */

```

---

```javascript

var cars = [
  { brand: "Honda", prezzo: 13000 },
  { brand: "Rolls-Royce", prezzo: 120000 }
];

function carInfo(car) {
  return `Prezzo of my new ${car.brand} \
è ${car.prezzo}$ and it è \
${car.prezzo <= 20000 ? "cheap" : "expensive"} car.`;
}

cars.forEach(car => console.log(carInfo(car)));
/* Il prezzo della mia Honda è 13000€
 ed è un'auto economica. */

/* Il prezzo della mia Rolls-Royce
è 120000€ ed è un'auto costosa. */

```

---

## 14  Object Destructuring

```javascript
/*
Scrivi la funzione shortPerson() che servirà a destrutturare l'oggetto persona.
Esempio:
{n: "Mauro", c: "Italia", a: 30, p: 100}

Se l'oggetto in ingresso non ha la prop numeroPost riceve come valore di default 0.
*/


var person1 = {
  nome: "Mauro",
  info: {
    paese: "Italia",
    eta: 30
  },
  numeroPost: 100
};

var person2 = {
  nome: "Paolo",
  info: {
    paese: "Italia",
    eta: 25
  }
};

// Write function here

console.log(shortPerson(person1));
// {n: "Mauro", c: "Italia", a: 30, p: 100}

console.log(shortPerson(person2));
// {n: "Paolo", c: "Italia", a: 25, p: 0}

```

---

```javascript


var person1 = {
  nome: "Mauro",
  info: {
    paese: "Italia",
    eta: 30
  },
  numeroPost: 100
};

var person2 = {
  nome: "Paolo",
  info: {
    paese: "Italia",
    eta: 25
  }
};

function shortPerson(obj) {
  var {
    nome: n,
    info: { paese: c, eta: a },
    numeroPost: p = 0
  } = obj;
  return {
    n,
    c,
    a,
    p
  };
}

console.log(shortPerson(person1));
// {n: "Mauro", c: "Italia", a: 30, p: 100}

console.log(shortPerson(person2));
// {n: "Paolo", c: "Italia", a: 25, p: 0}

```

---

## 15  Iterare su una Stringa

```javascript
/*
Conta il numero di vocali nella stringa
Vocali minuscole - a, e, i, o, u
*/


var conteggioVocali = 0;
var vocali = ["a", "e", "i", "o", "u"];

var str = "Lorem ipsum dolor sit amet, Lorem";

// Scrivi il codice qui

console.log(conteggioVocali);
// 8

```

---

```javascript

var conteggioVocali = 0;
var vocali = ["a", "e", "i", "o", "u"];

var str = "Lorem ipsum dolor sit amet, Lorem";

// for (let i = 0; i < str.length; i++) {
//   if (vocali.includes(str[i])) conteggioVocali++;
// }

for (let s of str) {
  if (vocali.includes(s)) conteggioVocali++; // ES2016 (ES7) syntax
}

console.log(conteggioVocali);
// 8

```

---

## 16  Scambia i valori di due variabili

```javascript
/*
Scambia i valori a e b, senza utilizzare una variabile temporanea di appoggio.

*/


var a = "primo";
var b = "secondo";

// Scrivi il codice qui

console.log(a, b);
// secondo primo

```

---

```javascript

var a = "primo";
var b = "secondo";

[b, a] = [a, b];

console.log(a, b);
// secondo primo

```

---
---

## 17  IIFE Immediately Invoked Function Expression

```javascript
/*
Completa la IIFE che esporrà i seguenti metodi:
  saluta() - Data una stringa in argomento, saluta con quell'argomento
  cambiaSaluto() - Cambia la stringa di saluto

*/


// var saluti = (Scrivi la IIFE qui);

console.log(saluti.saluta("Giovanni"));
// Ciao, mi chiamo Giovanni

console.log(
  saluti.cambiaSaluto("Buongiorno da )
);
// undefined

console.log(saluti.saluta("Francesca"));
// Buongiorno da Francesca

```

---

```javascript

var saluti = (() => {
  var stringaSaluto = "Ciao, mi chiamo";

  function saluta(nome) {
    return `${stringaSaluto} ${nome}`;
  }

  function cambiaSaluto(nuovoSaluto) {
    stringaSaluto = nuovoSaluto;
  }

  return {
    saluta,
    cambiaSaluto
  };
})();

console.log(saluti.saluta("Giovanni"));
// Ciao, mi chiamo Giovanni

console.log(
  saluti.cambiaSaluto("Buongiorno da )
);
// undefined

console.log(saluti.saluta("Francesca"));
// Buongiorno da Francesca

```

---

## 18 Classi ES6

```javascript
/*
Riscrivi il codice seguente usando le classi ES6
*/


var Frutto = function(title, prezzo) {
  this.title = title;
  this.prezzo = prezzo;
};

Frutto.prototype.priceInfo = function() {
  return `Prezzo di un/una ${this.title} è \
${this.prezzo}$`;
};

var mela = new Frutto("Mela", 2);
console.log(mela.priceInfo());
// Prezzo di un/una Mela è 2$

var arancia = new Frutto("Arancia", 3);
console.log(arancia.priceInfo());
// Prezzo di un/una Arancia è 3$

```

---

```javascript

class Frutto {
  constructor(title, prezzo) {
    this.title = title;
    this.prezzo = prezzo;
  }
  priceInfo() {
    return `Prezzo di un/una ${this.title} è \
${this.prezzo}$`;
  }
}

var mela = new Frutto("Mela", 2);
console.log(mela.priceInfo());
// Prezzo di un/una Mela è 2$

var arancia = new Frutto("Arancia", 3);
console.log(arancia.priceInfo());
// Prezzo di un/una Arancia è 3$

```

---

## 19  Iterare sulle proprietà di un Object

```javascript
/*
Scrivi una funzione sumObjectValues() che sommi tutti i valori delle proprietà numeriche dell'oggetto.
*/


var numeri = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Scrivi il codice qui

console.log(sumObjectValues(numeri));
//42

```

---

```javascript

var numeri = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Scrivi il codice qui
function sumObjectValues(obj) {
  let total = 0;
  for (let k in obj) {
    if (
      typeof obj[k] === "number" &&
      obj.hasOwnProperty(k)
    )
      total += obj[k];
  }
  return total;
}

console.log(sumObjectValues(numeri));
//42

```

---

## 20  somma dei positivi e quella dei negativi

```javascript
/*
Scrivi una funzione sommaPiuMeno() che prenda in argomento un array di valori numerici e ritorni la somma dei positivi e quella dei negativi.

dovrebbe ritornare un oggetto tipo
{
  piu: 74, // somma dei positivi
  meno: -54 // somma dei negativi
}
*/


var numeri = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// Scrivi il codice qui

console.log(sommaPiuMeno(numeri));
// {piu: 74, meno: -54}

```

---

```javascript

var numeri = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sommaPiuMeno(arr) {
  let obj = {};
  numeri.forEach(el => {
    if (el > 0) obj.piu = (obj.piu || 0) + el;
    else if (el < 0) obj.meno = (obj.meno || 0) + el;
  });
  return obj;
}

console.log(sommaPiuMeno(numeri));
// {piu: 74, meno: -54}

```
