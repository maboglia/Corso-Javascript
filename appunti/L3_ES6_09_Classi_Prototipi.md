# Classi

Una classe in JavaScript è una collezione di oggetti che ereditano proprietà di un medesimo prototipo.

```javascript
function A(){
    this.a=10
    this.b=11
}
a=new A()
```

In ES6 è stata introdotta la parola class e il costruttore.

```javascript
class A{
    
    constructor(a, b){
        this.a=a;
        this.b=b;

    }
}
const a = new A(1,2);
```

---

## Prototipi

Un prototipo è un oggetto associato all'oggetto che sta definendo, e del quale va a ereditare proprietà.
E' stabilito quando l'oggetto è creato.
Si può accedere attraverso la variabile prototype

Si usa per aggregare funzioni a una definizione anche **dopo aver istanziato l'oggetto**.

```javascript
a=new String('asdf')
String.prototype.salutare=function(){
    return 'ciao'
}
console.log(a.salutare())
```

Questa non è una pratica raccomandata (stackoverflow)!

Può servire per realizzare ereditarietà tra oggetti.

```javascript
function A(){
    this.a=100
    this.x=function(){
        return this.a
}}
function B(){this.b=100}
B.prototype=new A()
b=new B()
console.log(b.x())
```
