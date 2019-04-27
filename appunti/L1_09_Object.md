# Oggetti

Un oggetto è una valore composto, che aggrega molteplici valori, siano essi primitivi o altri tipi di collezione.
Un oggetto in JavaScript può essere definito in 3 modi:
Definizione literal. 
Instanziazione di classi. 

### Creazione a partire da un prototipo. 

## 1ª Forma: Definizione literal
E' una definizione di proprietà di tipo chiave:valore.
```javascript
a={
    x:1,
    y:[1,2,3,4,5],
    z:function(a){return a}
}
```
## 2ª Forma: Instanziazione di classi
Altra maniera per definire un oggetto è instanziando una classe di un tipo di oggetto pre-definito in JavaScript o con una propria definizione di classe.
```javascript
a=new Object()
b=new String('asdf')
```
## Oggetti come array associativo
Le variabili di un oggetto si possono accedere come se fossero array associativi:
```javascript
a={x:1,y:2}
console.log(a.x)
console.log(a['x'])
```

# Classi
Una classe in JavaScript è una collezione di oggetti che ereditano proprietà di un medesimo prototipo.
```javascript
function A(){
    this.a=10
    this.b=11
}
a=new A()
```

In ES6 è stata introdotta la parola class, ma si tratta di 'zucchero sintattico', javascript continua ad essere un linguaggio basato sui prototipi e le funzioni.

# Prototipi
Un prototipo è un oggetto associato all'oggetto che sta definendo, e del quale va a ereditare proprietà.
E' stabilito quando l'oggetto è creato.
Si può accedere attraverso la variabile prototype

Si usa per aggregare funzioni a una definizione anche dopo aver istanziato l'oggetto.

```javascript
a=new String('asdf')
String.prototype.salutare=function(){
    return 'ciao'
}
console.log(a.salutare())
```

Questa non è una pratica raccomandata!
Maggiori informazioni: stackoverflow
può servire per realizzare ereditarietà tra oggetti.

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

## 3ª Forma: Object.create
Costruisce un nuovo oggetto a partire da un prototipo stabilito.
```javascript                
function A(){
    this.f=function(){return 'asdf'}
}
a=new A()
b=Object.create(a)
console.log(b.f())

Object.keys
Ritorna un array di nomi delle proprietà enumerabili di un oggetto.
function A(){
    this.x=1
    this.y=2
}
console.log(Object.keys(new A()))
```

## Object
La classe Object, possiede vari metodi:
`toString()`
Ritorna la rappresentazione in stringa di un oggetto.
`valueOf()`
Ritorna la forma primitiva di un oggetto.


### Esempi
[objects](../esempi/04_objects)


## Modificare un oggetto esistente

```javascript
var mieiSkill=["Coding","Running","Reading"];

var myObject = {
  name: 'Peppino',
  type: 'Coder',

  skill :mieiSkill
};
```
