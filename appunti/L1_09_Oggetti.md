# Oggetti

Un oggetto è una valore composto, che aggrega molteplici valori: primitivi, collezioni o altro.
Un oggetto in JavaScript può essere definito in 3 modi:

* Definizione literal.
* Instanziazione di classi.
* Creazione a partire da un prototipo.

---

## Caratteristiche ed pperazioni su oggetti

* proprietà e metodi
* definizione di oggetti
* accedere alle proprietà degli oggetti
* accedere ai metodi degli oggetti

* creare un oggetto
  * chiavi senza quote
* accedere ai valori di un oggetto
* aggiungere valori ad un oggetto
  * aggiungere chiavi con dot notation
* combinare array e oggetti
* esplorare gli oggetti in console

---

## 1ª Forma: Definizione literal

E' una definizione di proprietà di tipo chiave:valore.

```javascript
a={
    x:1,
    y:[1,2,3,4,5],
    z:function(a){return a}
}
```

---

## 2ª Forma: Instanziazione di classi

Altra maniera per definire un oggetto è instanziando una classe di un tipo di oggetto pre-definito in JavaScript o con una propria definizione di classe.

```javascript
a=new Object()
b=new String('asdf')
```

---

### Oggetti come array associativo

Le variabili di un oggetto si possono accedere come se fossero array associativi:

```javascript
a={x:1,y:2}
console.log(a.x)
console.log(a['x'])
```

---

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

---

## Object

La classe Object, possiede vari metodi:
`toString()`
Ritorna la rappresentazione in stringa di un oggetto.
`valueOf()`
Ritorna la forma primitiva di un oggetto.

---

### Esempi

[objects](../esempi/04_objects)

---

---

## Creazione di oggetti: factory function

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

## Creazione di oggetti: function constructors

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

---

```javascript
const auto = {
    marca: 'fiat',
    modello: '500',
    get librettoAuto(){
        return `${auto.marca} ${auto.modello}`;
    },
    set librettoAuto(valore){
        const splitta = valore.split('-');
        this.marca = splitta[0];
        this.modello = splitta[1];
    },
}

auto.librettoAuto = 'ferrari-testarossa';
console.log(auto);

```

---

---

## Modificare un oggetto esistente

```javascript
var mieiSkill=["Coding","Running","Reading"];

var myObject = {
  name: 'Peppino',
  type: 'Coder',

  skill :mieiSkill
};
```

[Le classi in ES6](./L3_ES6_09_Classi_Prototipi.md)
