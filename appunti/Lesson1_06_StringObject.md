# String

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
Una stringa può essere considerata come un array di caratteri.
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

[esempi](../esempi/03_arrays_strings)
