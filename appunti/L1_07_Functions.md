# Funzioni

Le funzioni se dichiarano con la parola riservata funzione.

```javascript
function f(x,y){
    return x+y
}
```

---

## Una funzione può essere assegnata a una variabile

(JS supporta le [First-class Function](https://wiki.developer.mozilla.org/it/docs/Glossary/First-class_Function))

```javascript
var f=function(x){
    console.log(x)
}
f(10)
```

---

## Come una funzione può essere assegnata a una variabile, è possibile che una funzione riceva altre funzioni come parte di suoi parametri

```javascript
function f(x,g){
    return g(x)
}
var a=f(10,function(x){return x*2});
console.log(a) // 20
```

---

## Inoltre una funzione può essere di forma anonima e si può eseguire nella definizione

```javascript
var a=(function(x,y){
    return x+y
}(1,2))

console.log(a) // 3
```

Si può definire una funzione dentro un'altra funzione.

```javascript
function a(){
    var x=10
    function b(){
        return x+1
    }
    return b()
}
console.log(a())
```

---

## Varargs

Una funzione può essere invocata con più parametri di quelli definiti, o con meno.

Tutti i parametri che sono stati inviati a una funzione sono accessibili attraverso l'oggetto "**arguments**".

```javascript
function a(){
    console.log(arguments)
}

a(1,2,3,4,5,6)
```

---

## Creazione di oggetti con le funzioni: factory function

```javascript
function Quadrato(lato) {
    return {
        lato,
        area(){
            console.log(lato  * lato);
        }
    }
}

const quadrato1 = Quadrato(10);
console.log(quadrato1);
const quadrato2 = Quadrato(15);
console.log(quadrato2);

```

---

## Creazione di oggetti (ES5): function constructors

```javascript
function Quadrato(lato) {
    this.lato = lato;
    this.area = function(){
            console.log(lato  * lato);
        }
    }
}

const quadrato1 = new Quadrato(10);
console.log(quadrato1);
const quadrato2 = new Quadrato(15);
console.log(quadrato2);

```

[funzioni in ES6](./L3_ES6_11_ArrowFunctions.md)

---

---

## Hoisting

* Le variabili in JavaScript hanno ambito di funzione
* Significa che tutte le variabili dichiarate in una funzione sono visibili nel corpo della funzione
* Anche prima di essere dichiarate.

---

### Esempi

```javascript
var a='asdf';
(function b(){
    console.log(a)
})()// asdf
```

```javascript
var a='asdf';
(function b(){
    console.log(a)
    var a='qwer'
})()// undefined
```

---

## Per capire cos'è `this`, consideriamo una funzione `fff` definita come

```javascript

var fff = function() {
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

fff(); // undefined
test = 777;
fff(); // 777
```

---

## Quando una funzione viene chiamata indirettamente come metodo `this` è associato all'oggetto che contiene il metodo

```javascript

var obj = {
    test: 888,
    ggg: fff
};
obj.ggg(); // 888
```

---

## Quando una funzione viene chiamata con l'operatore `new`, `this` è associato a quell'oggetto appena creato

```javascript
fff.prototype.test = 999;
var myobj = new fff(); // 999
```

---

## Possiamo usare `call()` per chiamare una funzione con un'associazione this specificata

```javascript

test = 777;
obj = { test: 888, ggg: fff };
fff(); // 777
fff.call(obj); // 888
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

Informazioni su un'altra variabile locale speciale ----`argomenti`
---

## Puoi ottenere il numero "effettivo" di argomenti che vengono passati

```javascript

var bar = function(a, b) {
    return arguments.length;
};
bar(); // 0
bar(9); // 1
bar(9, 8); // 2
bar(9, 8, 7, 6); // 4
```

---

## È un oggetto speciale (come un "array") contenente tutti gli argomenti che viene effettivamente passato a una funzione

```javascript

var bar = function(a, b) {
    return arguments[0] + arguments[1] + arguments[2];
};
bar(3, 4, 5); // 12
```

---

## Non dimenticare il fatto che una funzione JavaScript è anche un Oggetto JavaScript, che può memorizzare qualsiasi numero di proprietà

```javascript
var funcIsAlsoAnObject = function() {};
funcIsAlsoAnObject.someprop = 'test';
funcIsAlsoAnObject.someprop; // 'test'
```

---

## Per memorizzare nella cache gli output di una funzione? Nel seguente codice di esempio stiamo usando "a named function expression" in modo che la funzione possa fare riferimento a se stessa in modo sicuro

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

## Naturalmente, possiamo ottenere gli stessi risultati utilizzando la "chiusura" che potrebbe sembrare più pulita e semplice

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
