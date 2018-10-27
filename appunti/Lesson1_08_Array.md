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

---

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
---
s
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

        metodo         |                             descrizione
---------------------- | -------------------------------------------------------------------
valueOf() e toString() | convertire array a stringhe
join()                 | come to string, ma puoi usare un separatore
push()                 | aggiunge elementi all'array
pop()                  | rimuove l'ultimo elemento dell'array
shift()                | rimuove il primo elemento di un'array
indexOf()              | per accedere / modificare un valore
delete:                | lascia buchi undefined, usare pop o splice
splice()               |
sort()                 | ordinare un array
reverse()              | invertire l'ordine di un array
concat()               | unire array
slice()                | restituisce una parte di array indicato dagli argomenti start e end
tostring()             | Converts an array to a string.

## Inserire Elementi

```javascript
students.push('Mako');
```

---

## Rimuovere Elementi

```javascript
students.pop();
```

---

## Lunghezza di un array

```javascript
students.length
```

---

## Indicizzare un array

```javascript
students[0]
```

---

## Indicizzare un array

```javascript
students[1] = 'Simon';
students;
```

---

## Concatenare Arrays

```javascript
var mondayClass = ['Pluto', 'Paperina'];
var tuesdayClass = ['Paperino', 'Pippo'];
var bothClasses = mondayClass.concat(tuesdayClass);
```

---

## Trasformare Arrays in Stringhe

```javascript
bothClasses.toString();
bothClasses.join(' and ');
```

---

## Review 
### 1. Declare array 

**Just a recap on what is an array**
```javascript
var list=["one","two","three"];
```

### 2. Access array
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]); //Output: JavaScript
```

### 3. Array Properties 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length);
```

### 3. Iterating over array 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i < languages.length; i++){
 console.log(languages[i]);   
}
```

## More on Array 
### 1. Heterogeneous Arrays
Heterogeneous - `Mixture` of Arrays

Examples: 
```javascript
var pronouns = ["I", "you", "we"];
var numbers = [1, 2, 3];
```

### 2. Arrays of Arrays 
You can make a two-dimensional array by nesting arrays one layer deep, like so:

```javascript
var twoDimensional = [[1, 1], [1, 1]];

```

This array is two-dimensional because it has two rows that each contain two items. If you were to put a new line between the two rows, you could log a 2D object—a square—to the console, like so:

| "0"   | "1"   | 
| ----  |:-----:| 
| 1     |   1   |
| 1     |   1   |

### 3. Jagged arrays

Sometimes you want arrays that aren't as nice and even as your 3 x 3 two-dimensional array: you may have three elements in the first row, one element in the second row, and two elements in the third row. JavaScript allows those, and they're called **jagged arrays**.

E.G:

```javascript
var jagged=[[1,1,1,1],[2,2,2],[3,3]];
```

## Review 

1. Reviewed arrays, how to access an array by offset, array properties, and iterating over arrays

2. Learned about **heterogenous arrays**

3. Learned about **multidimensional arrays**

4. Learned about **jagged arrays**



## Recap
### 1. Heterogeneous arrays

```javascript
var me={
  name:"lala1",  
    age:12
};
var myArray=[1,true,"lala",me];
```

### 2. Multi-dimensional Arrays + Jagged

```javascript
var me={
  name:"lala1",  
    age:12
};

newArray=[[1,1,1],[me],[2,2],[3]];
```

### 3. Editing an existing object

```javascript
var myInterest=["Coding","Food","Sleeping"];

var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests :myInterest
};
```

## Add-Ons
### Build Mini Project
Build a mini contact list using what you have learned earlier on. Try to utilize the **data structure** object you have learned in the current lesson. 

[Sample Code Here](https://github.com/yclim95/CodeAcademy-JavaScript/blob/master/Lesson6_data_structure/script.js)
    