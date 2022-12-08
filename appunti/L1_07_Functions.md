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

## Inoltre una funzione può essere di forma anonima e si può eseguire nella definizione.

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