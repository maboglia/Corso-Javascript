# Array
* perché devi saper utilizzare gli array
* creazione di un array
* accesso a i dati di un array
* array non omogenei

* lavorare con gli array
* trova la lunghezza di un array
* aggiungere elementi a un array
* aggiungere array
* trasformare un array in una stringa



* cose utili da fare con un array
* trova la strada di casa
* decision maker
* crea un generatore di frasi random


*   JS array
    cos'è un array

###creare un array
```javascript
var student1 = 'Paperino';
var student2 = 'Pippo';
var student3 = 'Pluto';
var student4 = 'Paperina';
var student5 = 'Topolino';
var student6 = 'Minnie';
var student7 = 'Ciccio';
```

```javascript
var students = ['Paperino', 'Pippo', 'Pluto', 'Paperina', 'Topolino', 'Minnie', 'Ciccio'];
```


## laboratorio, prova a:

* accedere agli elementi di un array
* si possono avere oggetti differenti in un array
* gli array sono oggetti
* proprietà e metodi degli array
* la proprietà length
* aggiungere elementi a un array
* scorrere gli elementi di un array
* JS non supporta gli array associativi
* la differenza tra array e oggetti
---
## metodi principali

        | metodo                 | descrizione                                                         |
        | ---------------------- | ------------------------------------------------------------------- |
        | valueOf() e toString() | convertire array a stringhe                                         |
        | join()                 | come to string, ma puoi usare un separatore                         |
        | push()                 | aggiunge elementi all'array                                         |
        | pop()                  | rimuove l'ultimo elemento dell'array                                |
        | shift()                | rimuove il primo elemento di un'array                               |
        | indexOf()              | per accedere / modificare un valore                                 |
        | delete:                | lascia buchi undefined, usare pop o splice                          |
        | splice()               |
        | sort()                 | ordinare un array                                                   |
        | reverse()              | invertire l'ordine di un array                                      |
        | concat()               | unire array                                                         |
        | slice()                | restituisce una parte di array indicato dagli argomenti start e end |
        | tostring()             | Converts an array to a string.                                      |

## Inserire Elementi

```javascript
students.push('Mako');
```


## Rimuovere Elementi

```javascript
students.pop();
```

---

## Lunghezza di un array

```javascript
students.length
```

## Indicizzare un array

```javascript
students[0]
```


## Indicizzare un array

```javascript
students[1] = 'Simon';
students;
```


## Concatenare Arrays

```javascript
var mondayClass = ['Pluto', 'Paperina'];
var tuesdayClass = ['Paperino', 'Pippo'];
var bothClasses = mondayClass.concat(tuesdayClass);
```


## Trasformare Arrays in Stringhe

```javascript
bothClasses.toString();
bothClasses.join(' and ');
```


## Review 

### 1. Dichiarare array 

```javascript
var list=["one","two","three"];
```

### 2. Accedere array
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]); //Output: JavaScript
```

### 3. Array Properties 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length);
```

### 3. Iterare su elementi array 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i < languages.length; i++){
 console.log(languages[i]);   
}
```

### 1. Array eterogenei
Heterogeneous - `Mixture` of Arrays

Examples: 
```javascript
var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];
```

### 2. Arrays di Arrays 

```javascript
var twoDimensional = [[1, 1], [1, 1]];

```

| "0" | "1"   |
| --- | :---: |
| 1   | 1     |
| 1   | 1     |

### 3. Array irregolari

```javascript
var jagged=[[1,1,1,1],[2,2,2],[3,3]];
```

### 1. Array eterogenei

```javascript
var me={
  name:"lala1",  
    age:12
};
var myArray=[1,true,"lala",me];
```

### 2. Array Multi-dimensionali irregolari

```javascript
var me={
  name:"lala1",  
    age:12
};

newArray=[[1,1,1],[me],[2,2],[3]];
```

### 3. Modificare un oggetto esistente

```javascript
var myInterest=["Coding","Running","Reading"];

var myObject = {
  name: 'Peppino',
  type: 'Coder',

  interests :myInterest
};
```
