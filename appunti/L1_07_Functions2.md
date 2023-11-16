# Uso di `this` nelle funzioni e altri metodi

## Per capire cos'è `this`, consideriamo una funzione `miaFunzione` definita come

```javascript

var miaFunzione = function() {
    var _type = typeof this;
    if ((_type === 'object' && this !== null) || _type === 'function')
        console.log(this.test); // print out the 'test' property of this
    else
        console.log('this is not an object');
};
```

---

## Quando una funzione viene chiamata da un riferimento diretto quando non è in modalità rigorosa  `this` è associato all'oggetto globale che contiene tutte le variabili globali

```javascript

miaFunzione(); // undefined
test = 777;
miaFunzione(); // 777
```

---

## Quando una funzione viene chiamata indirettamente come metodo `this` è associato all'oggetto che contiene il metodo

```javascript

var obj = {
    test: 888,
    ggg: miaFunzione
};
obj.ggg(); // 888
```

---

## Quando una funzione viene chiamata con l'operatore `new`, `this` è associato a quell'oggetto appena creato

```javascript
miaFunzione.prototype.test = 999;
var myobj = new miaFunzione(); // 999
```

---

## Possiamo usare `call()` per chiamare una funzione con un'associazione this specificata

```javascript

test = 777;
obj = { test: 888, ggg: miaFunzione };
miaFunzione(); // 777
miaFunzione.call(obj); // 888
```

---

## Puoi anche passare argomenti mentre usi `call()`

```javascript

var foo = { a: 100, b: 200 };
var bar = function(a, b) {
    this.a = a;
    this.b = b;
};

bar.call(foo, 'hello', 'world');
foo.a; // 'hello'
foo.b; // 'world'
```

---

## Puoi passare "un array" di argomenti usando `apply()`

```javascript

var foo = { a: 100, b: 200 };
var bar = function(a, b) {
    this.a = a;
    this.b = b;
};

var args = ['hello', 'world'];

bar.apply(foo, args);
foo.a; // 'hello'
foo.b; // 'world'
```

---

## Possiamo correggere l'associazione `this` all'interno di una funzione per tutte le chiamate di funzioni non `nuove` in futuro usando `bind()`

Quando scriviamo

`FuncB = FuncA.bind( obj )`

FuncB è una copia di FuncA, ma quando viene richiamato FuncB il valore `this` in FuncB sarà sempre `obj`, qualunque cosa accada

```javascript

var obj1 = {};
var before = function() { return this; }; // dipende dal contesto
var after = before.bind(obj1); // sarà sempre obj1

after() === obj1; // true

var obj2 = { before: before, after: after };
obj2.before() === obj2; // true
obj2.after() === obj2; // false
obj2.after() === obj1; // true
```

---

## Questi metodi speciali che abbiamo appena visto sono condivisi tra tutti gli oggetti funzione

* `Function.prototype.call`
* `Function.prototype.apply`
* `Function.prototype.bind`

Richiama il modello OOP con il concetto di "prototipo" in JavaScript
Perché `call`, `apply` e `bind` elencati sopra sono ereditati da
tutte le funzioni che abbiamo creato, possiamo accedervi sotto forma di
`someFunc.call`, `someFunc.apply` e `someFunc.bind`


---

## Una funzione JavaScript è anche un Oggetto JavaScript, che può memorizzare qualsiasi numero di proprietà

```javascript
var funcIsAlsoAnObject = function() {};
funcIsAlsoAnObject.someprop = 'test';
funcIsAlsoAnObject.someprop; // 'test'
```

---

## Per memorizzare nella cache gli output di una funzione?

Nel seguente codice di esempio stiamo usando `a named function expression` in modo che la funzione possa fare riferimento a se stessa in modo sicuro

```javascript
var factorial = function factorial(n) {

    var undef;
    var cache = factorial.cacheTable;

    if (!Number.isInteger(n)) {
        throw new Error('n non è un intero');
    }
    if (n < 0) {
        throw new Error('n è negativo');
    }
    if (cache[n] === undef) {
        cache[n] = n * factorial(n - 1);
    }
    return cache[n];
};

factorial.cacheTable = [0, 1]; // accessibile dall'esterno

```

---

## Possiamo ottenere gli stessi risultati utilizzando la "chiusura" che potrebbe sembrare più pulita e semplice

```javascript
var factorial = (function() {

    var cache = [0, 1]; // accessibile solo dall'interno

    return function factorial(n) {
        var undef;
        if (!Number.isInteger(n)) {
            throw new Error('n non è un intero');
        }
        if (n < 0) {
            throw new Error('n è negativo');
        }
        if (cache[n] === undef) {
            cache[n] = n * factorial(n - 1);
        }
        return cache[n];
    };

}());
```

