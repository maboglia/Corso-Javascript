---
marp: false
title: Fondamenti
paginate: true
theme: gaia
author: mauro
---

![bg](./ITS_BG_Slide.jpg)

# .

Mauro Bogliaccino

# Corso Javascript

## Fondamenti del linguaggio

---

## JavaScript è un linguaggio di programmazione 

utilizzato comunemente come parte dell'esperienza di navigazione, permette di creare interazioni con l'utente, controllare la navigazione, gestire la comunicazione asincrona, e modificare il contenuto del documento.

---

Alcune cose che puoi fare con javascript

* Generare finestre di dialogo
* redirigere una pagina
* aprire nuove finestre
* intercettare eventi dell'utente: mouse, tastiera, ...
* leggere i moduli dell'utente
* modificare le pagine html
. ...e molto altro!

___Fonte: <https://en.wikipedia.org/wiki/JavaScript___>

---

## ruolo di js nel web design

* Html: contenuto
* Css: presentazione
* Js: comportamento

---

## Risorse disponibili online

* [ES2015 - ecma](http://www.ecma-international.org/ecma-262/6.0/)
* [Mozilla Dev - Javascript reference](https://developer.mozilla.org/it/docs/Web/JavaScript)
* [JS the right way](http://jstherightway.org/)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [w3schools](https://www.w3schools.com/)
* [html.it](http://www.html.it/guide/guida-javascript-di-base/)
* [it.html.net tutorials - html - css](http://it.html.net/tutorials/)
* [web-link.it/web/html5](https://www.web-link.it/web/html5)

---

## Fondamenti del linguaggio

* Struttura sintattica
* Tipi, valori e variabili
* Espressioni e operatori
* Statements - istruzioni
* Oggetti
* Arrays
* Funzioni
* Classi e moduli

---

## Hello, World

Hello, World! nel browser

```javascript
alert('Hello, World!')

```

---

## Hello, World! nel terminale

```javascript
console.log('Hello, World!')
```

---

## Esecuzione del codice

* Interpretazione in una pagina web 
* Interpretazione in  una console del browser 
* Interpretazione in terminale (node.js) 

---

## Javascript incorporato in una pagina html

```html
<!doctype html>
<html>
    <head></head>
    <body>
        <script>
            alert('Hello world')
        </script>
    </body>
</html>
```

---

## Javascript collegato ad una pagina html

```html
<!doctype html>
<html>
    <head></head>
    <body>
        <script src="esempio.js"></script>
    </body>
</html>
```

```javascript
// file esempio.js
alert('Hello world')
```

---

## Come mostrare a video i dati

* window
    * [window.alert()]()
    * [window.prompt()](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/009_prompt.html)
    * [window.confirm()](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/010_confirm.html)
* document
    * [document.write()](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/003_document_write.html)
    * document.writeln()
* innerHTML
* console.log()

---

## Convenzioni di naming

* JavaScript è __CASE SENSITIVE__
* Terminare le istruzioni con punto e virgola (;)
* NomeClasse, nomeFunzione, nomeVariabile, nome_variabile, NOME_COSTANTE

---

## Identificatori

Gli identificatori in javascript cominciano con 

* una lettera,
* una underline (_),
* un carattere di dollaro ($); 

seguito da 

* lettere,
* numeri,
* underline,
* $

---

### Per esempio

```javascript
var contatore;
var _indice;
var $indice;
var $__$__$;
```

---

## Parole chiave riservate

abstract, boolean, break, byte, case, catch, char, class, const, continue, 
debugger, default, delete, do, double, else, enum, export, extends, false, 
final, finally, float, for, function, goto, if, implements, import, in, instanceof, 
int, interface, let, long, native, new, null, package, private, protected, 
public, return, short, static, super, switch, synchronized, this, throw, throws, 
transient, true, try, typeof, var, void, volatile, while, with

---

## Variabili

* identificatore e visibilità (scope)
* dichiarazione e inizializzazione di variabili
* [esempi](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/001_var.html)

---

#### const

Parola chiave per la dichiarazione di una costante.
[esempio](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/008_const.html)

#### var, let
Parola chiave per la dichiarazione di una variabile.

---

## operatori

* [precedenza degli operatori](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/011_precedenzaOperatori.html)
* [operatori di assegnamento](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/013_assignment.html)
* [operatori di comparazione](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/016_confronto.html)
* [operatori unari](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/014_operatoriUnari.html)
* [operatori logici AND](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/018_ANDLogico.html)
* [operatori logici OR](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/019_ORLogico.html)
* [operatori su stringhe](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/03_arrays_strings/017_comparaStringhe.html)

---

## Commenti

Esistono due tipi di commenti:
```javascript
//  commento su una riga

//puoi usarlo per commentare un'istruzione:
var a = 5; //assegno la variabile

/* 
    commento
    su diverse
    righe 
*/
```

---

## use strict

Direttiva per l'interprete di JavaScript, che indica l'uso del modo strict.

---

## Literals

tipo                |    esempio
------------ | -------------
Numeri interi       |    192
Numeri float        |    1.4
Stringhe di testo   |    "Hello World!", 'Hello World!'
Valori logici       |    true, false
espressioni regolari |     /[A-Za-z]/
Valore nullo        |    null
Valore undefined    |    undefined

---

# Strutture del linguaggio

## Costrutti di controllo del flusso

* [Strutture condizionali](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_05_Control_flow.md)
    * [esempio if](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/018_ANDLogico.html)
    * [esempio switch](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/02_control_flow/02_switch.js)

---

## Costrutti di iterazione (cicli)

* [For Loop](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_05_Control_flow.md) 
    * [esempi](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/02_control_flow/02_for_loop.js)
* [While Loop](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_05_Control_flow.md) 
    * [esempi](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/02_control_flow/02_while_loop.js)

---

# Tipi di dato

---

## Boolean
* Boolean è la rappresentazione di tipo oggetto di una variabile logica.
* Booleans
    * operazioni logiche
    * comparazione tra numeri e valori booleani
    * undefined e null
    * Boolean() verifica se un'espressione è booleana

```javascript
//Valori logici
var a=true
var b=false
```

---

### Sono valori falsi i seguenti:

```javascript
undefined
null
0
-0
NaN
''
```

---

### Altri esempi

* [esempio boolean](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/012_boolean.html)
* [esempio AND Logico](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/018_ANDLogico.html)
* [esempio OR Logico](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/019_ORLogico.html)
* [esempio OR Logico](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/020_ORLogico.html)

---

## Objects

* [JS Objects](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_09_Oggetti.md)

#### instanceof

Verifica se un oggetto è instanza di qualche prototipo.

---

#### typeof

Ritorna una stringa indicante il tipo di dato che ha una variabile.
[esempio](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_basic_foundations/010_confirm.html)

#### delete

Operatore che rimuove proprietà di un oggetto.


---

## Number

Number è la rappresentazione di tipo oggetto di un tipo numerico.

---

### JS numbers

* i numeri in JS sono SEMPRE float a 64-bit
* il numero massimo di decimali è 17 e la virgola mobile non è sempre accurata
* il prefisso 0x permette di usare i numeri esadecimali
* In JS esiste Infinity e -Infinity
* NaN not a number: p.es. operazioni aritmetiche con le stringhe restituiscono NaN

---

### proprietà e metodi principali
    * Number()
    * parseFloat()
    * parseInt()
    * toString()
    * toFixed()
    * toPrecision()
    * valueOf()

#### non dichiarare stringhe, numeri e booleans come oggetti

---

### Per esempio:

```javascript
  12 // numero intero in base decimale.
0345 // numero intero in base ottale.
0xFF // numero intero in base esadecimale.

3.141592654 // numero decimale.
.234955     // numero decimale.
6.023e23    // numero decimale in notazione esponenziale.
```

---

## Math Object

Per lavorare con i Number, puoi usare Math che è l'oggetto che concentra molte constanti e funzioni matematiche.

* [Math Object](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_10_ObjectMath.md)

---

## String

String è la rappresentazione di tipo oggetto di una stringa.

* [String Object](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_06_Stringhe.md)

---

## valore nullo e valore undefined

Rappresentano l'assenza di un valore in una variabile o nel ritorno di una function.

```javascript
var a=null
var b=undefined
```

---

## Funzioni

Le funzioni si dichiarano con la parola riservata funzione.

```javascript
function f(x,y){
    return x+y
}
```

* [Appunti sulle Funzioni](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_07_Functions.md) 

---

## Date Object 

* Date è l'oggetto utilizzato per la rappresentazione di date.
* Internamente, questa rappresentazione è un numero che rappresenta i millisecondi trascorsi dalla data: 1 di gennaio del 1970.
* mostrare le date
* creare l'oggetto Date()
* formati e metodi per le date
* metodi get e metodi set

### codice esempio

[es data](https://github.com/maboglia/Corso-HTML5-Javascript/tree/master/esempi/01_date.js)

---

## Array

* [JS array](L1_08_Array.md)

---

## Timers

Sono funzioni invocate dopo un tempo determinato.

funzione | significato
--- | ---
`setTimeout()` | Pianifica la invocazione dopo un tempo determinato
`setInterval()` | Pianifica l'invocazione dopo un intervallo di tempo
`clearTimeout()` | Resetta i timer
`clearInterval()` | Resetta i timer

---

### Per esempio

```javascript
setTimeout(function(){
    alert('asdf')
    }, 10000);

setInterval(function(){
    alert('asdf')
    }, 10000);
```

---

# Ricapitolando

* Convenzioni del linguaggio e dialogs
* Variabili
* Operatori 
* Costrutti condizionali e iterativi 
* Tipi primitivi
* Tipi reference
* Booleans
* [Function](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_07_Functions.md) 
* [Number](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_10_ObjectMath.md)
* [String](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_06_Stringhe.md)
* [Array](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_08_Array.md)
* [Object](https://github.com/maboglia/Corso-HTML5-Javascript/blob/master/appunti/L1_09_Oggetti.md)
* Timers