# String

---

## Stringhe di testo

Si possono usare gli apici semplici o gli apici doppi come delimitatori validi per la dichiarazione di una variabile tipo stringa di testo.
Esempi:

```javascript
var a='stringa di testo'
var b="stringa di testo"
var c='qui un "esempio"'
var d="un esempio 'Più'"
```

---

## Sequenze di Escape

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

---

## Parsing di Stringhe (I)

Una stringa può essere considerata come un array di caratteri.
Esempi:

```javascript
var a='stringa di testo'
console.log(a[5]) // a
```

---

## principali metodi delle stringhe

metodo | operazione
---|---
indexOf() | cerca una stringa
search() | cerca una stringa nella stringa data
slice(start, end) | estrai parti di stringa
substring(start, end) | estrae parti di stringa, non accetta indici negativi
substr(start, length) | estrai parti di stringa
replace() | sostituisce stringhe
toUpperCase() | Trasforma la stringa in maiuscolo
toLowerCase() | Trasforma la stringa in minuscolo
concat() | Concatena le stringhe
charAt(posizione) | Ritorna il carattere alla posizione (0-based)
charCodeAt(position) | ritorna il carattere Unicode
split(separatore) | converte una stringa in un array

---

## esempi

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

---

## Ottieni la lunghezza di una stringa (simile a un array di caratteri)

```javascript
var str = 'Hello';
str.length; // 5
'Hello'.length; // 5

```

---

## Estrai un carattere da una stringa (simile a un array di caratteri)

```javascript
'ABCDE'.charAt(3); // 'D'
'ABCDE' [3]; // 'D'

```

---

## Estrai una sottostringa

```javascript
'ABCDE'.slice(2); // 'CDE'
'ABCDE'.slice(-3); // 'CDE'
'ABCDE'.slice(1, 3); // 'BC'
'ABCDE'.slice(1, -2); // 'BC'
'ABCDE'.slice(-3, -1); // 'CD'

//substr è deprecato, mantenuto per retrocompatiblità
'ABCDE'.substr(2); // 'CDE'
'ABCDE'.substr(-3); // 'CDE'
'ABCDE'.substr(1, 2); // 'BC'
'ABCDE'.substr(-3, 2); // 'CD'

'ABCDE'.substring(2); // 'CDE'
'ABCDE'.substring(1, 3); // 'BC'

```

---

## Ottieni il valore Unicode numerico di un carattere

```javascript
'ABCDE'.charCodeAt(3); // 68

```

---

## Dal valore Unicode numerico

```javascript
String.fromCharCode(68); // 'D'
String.fromCharCode(65, 66, 67, 68); // 'ABCD'

```

---

## Cerca una sottostringa

```javascript
'To be, or not to be'.indexOf('BE'); // -1
'To be, or not to be'.indexOf('be'); // 3
'To be, or not to be'.indexOf('be', 4); // 17
'To be, or not to be'.lastIndexOf('be'); // 17
'To be, or not to be'.lastIndexOf('be', 16); // 3

```

---

## Trova il primo indice corrispondente per una RegExp

```javascript
'To be, or not to be'.search(/be/); // 3
'To be, or not to be'.search(/be(?!,)/); // 17

```

---

## Usa RegExp per trovare una corrispondenza con una stringa

```javascript
'To be, or not to be'.match(/be/); // ['be']
'To be, or not to be'.match(/be/g); // ['be', 'be']
'To be, or not to be'.match(/o./g); // ['o ', 'or', 'ot', 'o ']

```

---

## Divide una stringa in un array

```javascript
'Mela,Pera,Banana'.split(','); // [ 'Mela', 'Pera', 'Banana' ]

```

---

## Concatena più stringhe

```javascript
'Hello' + ' ' + 'world!'; // 'Hello world!'

```

---

## Trasforma tra lettere maiuscole e minuscole

```javascript
'Hello'.toUpperCase(); // 'HELLO'
'Hello'.toLowerCase(); // 'hello'

```

---

## Taglia gli spazi bianchi da entrambe le estremità

```javascript
'  Hello world!     '.trim(); // 'Hello world!'

```

---

## Sostituisci una parte di una stringa usando RegExp

```javascript
var str = 'Rosa rossa, rosa bella e profumata.';
str.replace(/[Rr]osa/g, 'gardenia'); // 'gardenia rossa, gardenia bella e profumata.'
```

[altri esempi](../esempi/03_arrays_strings)
