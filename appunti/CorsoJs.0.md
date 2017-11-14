# Corso Javascript

## JavaScript è un linguaggio di programmazione 
utilizzato comunemente come parte dell'esperienza di navigazione, permette di creare interazioni con l'utente, 
controllare la navigazione, gestire la comunicazione asincrona, e modificare il contenuto del documento. 

Fonte: https://en.wikipedia.org/wiki/JavaScript 

## Strutture del linguaggio 
* Variabili, 
* dichiarazioni ed espressioni 
* Funzioni 
* Array, 
* oggetti e classi 
* Stringhe 
* Risorse del browser 
* Cattura eventi 
* JSON 
* AJAX 




## Risorse disponibili online
Javascript reference (Mozilla Developer Network) 
w3schools (JavaScript tutorial)
html.it

## ruolo di js nel web design

Html: contenuto
Css: presentazione
Js: comportamento

## Hello world
Hello world nel browser
```javascript
alert('Hello world')
```
Hello world nel terminale
```javascript
console.log('Hello world')
```

## Esecuzione del codice
Interpretazione in una pagina web 
Interpretazione in  una console del browser 
Interpretazione in terminale (node.js) 

## Javascript incorporato in una pagina html (I)

```javascript
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
## Javascript collegato ad una pagina html (II)
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


## Variabili
    identificatore univoco
    operatori di assignment
    dichiarazione/creazione di variabili
    dichiarazione/creazione su una sola riga
    value undefined

## operatori
    operatori aritmetici
    operatori di assegnamento
    operatori su stringhe
    aggiungere stringhe e numeri
    comparazione e operatori logici
    operatori e operandi
    precedenza degli operatori


## Commenti
Esistono due tipi di commenti:
```javascript
// commento semplice

/* commento
su diverse
righe */
```


## Literals - Letterali (valori letterali per i tipi di dato)
tipo                |    esempio
------------ | -------------
Numeri interi       |    192
Numeri float        |    1.4
Stringhe di testo   |    "Hello World!", 'Hello World!'
Valori logici       |    true, false
espressioni regolari |     /[A-Za-z]/
Valore nullo        |    null
Valore undefined    |    undefined

# JavaScript è __CASE SENSITIVE__

### convenzioni di naming: 
* CamelCase, 
* camelCase, 
* snake_case

## Identificatori
Gli identificatori in javascript cominciano con una lettera, una underline (_), o un carattere di dollaro ($); seguito da lettere, numeri, underline, e caratteri di dollaro

### Esempi

```javascript
var contatore;
var _indice;
var $indice;
var $__$__$;
```

## parole chiave
```javascript
abstract else instanceof super boolean enum int switch break export 
interface synchronized byte extends let this case false long throw 
catch final native throws char finally new transient class float null 
true const for package try continue function private typeof debugger goto 
protected var default if public void delete implements return volatile 
do import short while double in static with
```

## Punto e virgola (;)
E' possibile l'uso del carattere (;) per la separazione di frasi,si può omettere se queste si trovano su linee differenti (non fatelo!)
Gli interpreti di JavaScript trattano i fine linea come fine frase, se e solo se, la frase successiva non può interpretarsi come continuazione della precedente.

## Tipi di dati
* Tipi primitivi:
* Tipi oggetto:

## tipi di dati e variabili
    convenzioni di naming
    crea una nuova varibile usando Math
    incrementare e decrementare
    +=
    -=


## tipi di dato
    tipi dinamici
    stringhe
    numeri
    booleans
    arrays
    objects
    operatore typeof
    undefined
    empty values
    null
    differenza tra null e undefined





### Esempi:
```javascript
  12 // numero intero in base decimale.
0345 // numero intero in base ottale.
0xFF // numero intero in base esadecimale.

3.141592654 // numero decimale.
.234955     // numero decimale.
6.023e23    // numero decimale in notazione esponenziale.
```                
### Number
Number è la rappresentazione di tipo oggetto di un tipo numerico.

### JS numbers
    sono SEMPRE float a 64-bit
    il numero massimo di decimali è 17 e la virgola mobile non è sempre accurata
    il prefisso 0x permette di usare i numeri esadecimali
    In *    JS esiste Infinity e -Infinity
    NaN not a number: operazioni aritmetiche con le stringhe restituiscono NaN
    proprietà e metodi
        Number()
        parseFloat()
        parseInt()
        toString()
        toFixed()
        toPrecision()
        valueOf()

### Math
Math è l'oggetto che concentra molte constanti e funzioni matematiche.
[es Math](../esempi/Lesson1_05_MathObject.js)


# String
String è la rappresentazione di tipo oggetto di una stringa.

## Stringhe di testo
Si possono usare gli apici semplici o gli apici doppi come delimitatori validi per la dichiarazione di una variabile tipo stringa di testo.
Esempi:

```javascript
var a='stringa di testo'
var b="stringa di testo"
var c='qui un "esempio"'
var d="un esempio 'Più'"
```

### Sequenze di Escape 
sequenza | significato
---|---
\O          | The NULL character
\b          | Backspace
\t          | Horizontal tab
\n          | Newline
\v          | Vertical tab
\f          | Form feed
\r          | Carriage return
\"          | Double quote
\'          | Apostrophe or single quote
\\          | Backslash
\x[XX]      | The Latin-1
\u[XXXX]    | The Unicode character

### Parsing di Stringhe (I)
Una stringa può vedersi come un array di caratteri immutabile.
Esempi:
```javascript
var a='stringa di testo'
console.log(a[5]) // a
```

### Funzioni di stringa

    metodi delle stringhe
    unire le stringhe
    trovare la lunghezza di una stringa
    trovare un carattere in una stringa
    tagliare le stringhe
    modificare le stringhe: tutto maiuscolo/minuscolo
    length
    caratteri speciali
        apici, doppi apici, escape
    spezzare lunghe linee di codice
    
metodo | operazione
---|---
indexOf() | cerca una stringa
search() | cerca una stringa nella stringa data
slice(start, end) | estrai parti di stringa
substring(start, end) | estrai parti di stringa \nnon accetta indici negativi
substr(start, length) | estrai parti di stringa
replace() | sostituisce stringhe
toUpperCase() |
toLowerCase() |
concat() |
charAt(position) |
charCodeAt(position) | ritorna il carattere Unicode
split(separatore) | converte una stringa in un array

### esempi
```javascript
var s = "hello, world"
s.charAt(0)          // => "h"
s.charAt(s.length-1) // => "d"
s.substring(1,4)     // => "ell"
s.slice(1,4)         // => "ell"
s.slice(-3)          // => "rld"
s.indexOf("l")       // => 2
s.lastIndexOf("l")   // => 10
s.indexOf("l", 3)    // => 3
s.split(", ")        // => ["hello", "world"]
s.replace("h", "H")  // => "Hello, world"
s.toUpperCase()      // => "HELLO, WORLD"
```




## Valori logici
```javascript
var a=true
var b=false
```
Son valori falsi i seguenti:
```javascript
undefined
null
0
-0
NaN
''
```

## Boolean
Boolean è la rappresentazione di tipo oggetto di una variabile logica.


Booleans
        operazioni logiche
        comparazione tra numeri e valori booleani
    undefined e null
    Boolean() verifica se un'espressione è booleana



## valore nullo e valore undefined

Rappresentano la assenza di un valore in una variabile o nel ritorno di una function.
```javascript
var a=null
var b=undefined
```









# Condizioni
* if
* if ... else
* if ... else if ... else
* switch
* operatore ternario


## if
```javascript
if(expresion){
    frasi
}

if(expresion){
    frasi
}else{
    frasi
}
```

## if else if

```javascript
if(expresion){
    frasi
}else if{
    frasi
}else{
    frasi
}
```
## switch

```javascript
switch(expresion){
    case 1:
        frasi
        break
    case n:
        frasi
        break
    default:
	  frasi
}
```
## operatore ternario
```javascript
(condizione) ? true : false ;
```

# Iteratori (cicli)

## while
```javascript
while(expresion){
    frasi
}
```
### codice
[es data](../esempi/02_while_testa_croce.js)


## do/while
```javascript
do {
    frasi
while(expresion)
```
## for
```javascript
for(inizializzazione;valutatore;incrementatore){
    frasi
}
```
## for/in
```javascript
for(variabile in collezion){
    frasi
}
```
# Cattura di errori
```javascript
try{
    frasi
}catch(e){
    frasi
}finally{
    frasi
}
```
## instanceof
Verifica se un oggetto è instanza di qualche prototipo.
## typeof
Ritorna una stringa indicando il tipo di dato che ha una variabile.
## var
Parola chiave per la dichiarazione di una variabile.
## delete
Operatore che rimuove proprietà di un oggetto.
## use strict
Direttiva per l'interprete di JavaScript, che indica l'uso del modo strict.
## Funzioni
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



### mostrare a video i dati
        window.alert()
        document.write()
        innerHTML
        console.log()


### Date 
    mostrare le date
    creare l'oggetto Date()
    formati e metodi per le date
    metodi get e metodi set


###  Date
Date è l'oggetto utilizzato per la rappresentazione di date.
Internamente, questa rappresentazione è un numero che rappresenta i millisecondi trascorsi dalla data: 1 di gennaio del 1970.

### Maggiori informazioni: 
http://en.wikipedia.org/wiki/System_time    

### codice
[es data](../esempi/01_date.js)

# events
    HTML eventi
        onchange
        onclick
        onmouseover
        onmouseout
        onkeydown
        onload
        cosa può fare * JS utilizzando i gestori di eventi (handlers)

# Array
    perché devi saper utilizzare gli array
    creazione di un array
    accesso a i dati di un array
    array non omogenei
    lavorare con gli array
        trova la lunghezza di un array
        aggiungere elementi a un array
        aggiungere array
        trasformare un array in una stringa
    cose utili da fare con un array
        trova la strada di casa
        decision maker
        crea un generatore di frasi random
[JS array](Lesson2_array.md)

# Objects
    oggetti della vita reale (e classi)
    proprietà e metodi
    definizione di oggetti
    accedere alle proprietà degli oggetti
    accedere ai metodi degli oggetti
    non dichiarare stringhe, numeri e booleans come oggetti


    creare un oggetto
        chiavi senza quote
    accedere ai valori di un oggetto
    aggiungere valori ad un oggetto
        aggiungere chiavi con dot notation
    combinare array e oggetti
        un array di amici
    eslporare gli oggetti in console
    cose utili da fare con gli oggetti
        tieni traccia delle spese
        raccogli informazioni sui tuoi film preferiti
[JS Objects](Lesson6_data_structure.md)







