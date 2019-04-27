# Funzioni

Le funzioni se dichiarano con la parola riservata funzione.

```javascript
function f(x,y){
    return x+y
}
```

* sintassi
* invocare le funzioni
* return
* perché usare le funzioni
* l'operatore () chiama la funzione
* funzioni usate come variabili
* scope delle variabili: variabili globali e locali
* ciclo vita delle variabili

## Una funzione può essere assegnata a una variabile

```javascript
var f=function(x){
    console.log(x)
}
f(10)
```

## Come una funzione può essere assegnata a una variabile, è possibile che una funzione riceva altre funzioni come parte di suoi parametri

```javascript
function f(x,g){
    return g(x)
}
var a=f(10,function(x){return x*2});
console.log(a) // 20
```

## Inoltre una funzione può essere di forma anonima e si può eseguire nella definizione.

```javascript
var a=(function(x,y){
    return x+y
}(1,2))

console.log(a) // 3
```

Altra caratteristica importante sulle funzioni in JavaScript è che può definirsi una funzione dentro un'altra funzione.

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

## Varargs

Una funzione può essere invocata con più parametri di quelli definiti, o con meno.

Tutti i parametri che sono stati inviati a una funzione sono accessibili attraverso l'oggetto "arguments".

```javascript
function a(){
    console.log(arguments)
}

a(1,2,3,4,5,6)
```