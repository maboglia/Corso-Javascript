# Array


### creare un array
perché creare un array
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

## metodi principali

|         metodo         |                             descrizione                             |
| ---------------------- | ------------------------------------------------------------------- |
| valueOf() e toString() | convertire array a stringhe                                         |
| join()                 | come to string, ma puoi usare un separatore                         |
| push()                 | aggiunge elementi all'array                                         |
| pop()                  | rimuove l'ultimo elemento dell'array                                |
| shift()                | rimuove il primo elemento di un'array                               |
| indexOf()              | per accedere / modificare un valore                                 |
| delete:                | lascia buchi undefined, usare pop o splice                          |
| splice()               |                                                                     |
| sort()                 | ordinare un array                                                   |
| reverse()              | invertire l'ordine di un array                                      |
| concat()               | unire array                                                         |
| slice()                | restituisce una parte di array indicato dagli argomenti start e end |
| tostring()             | Converts an array to a string.                                      |


## Dichiarare array 

```javascript
var list=["one","two","three"];
```

## Accedere array
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]); //Output: JavaScript
```

## Inserire Elementi

```javascript
students.push('Gino');
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

`length` è una proprietà 

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages.length);
```

## Indicizzare un array

```javascript
students[0]
students[1] = 'Simone';

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
bothClasses.join(' e ');
```

## Iterare su elementi array 
```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i < languages.length; i++){
 console.log(languages[i]);   
}
```

## Array di Array 

```javascript
var biDimensionale = [[1, 1], [1, 1]];

```

| "0" | "1"   |
| --- | :---: |
| 1   | 1     |
| 1   | 1     |

## Array irregolari

```javascript
var jagged=[[1,1,1,1],[2,2,2],[3,3]];
```

## Array eterogenei

```javascript
var me={
  name:"lala1",  
    age:12
};
var myArray=[1,true,"lala",me];
```

## Array Multi-dimensionali irregolari

```javascript
var me={
  name:"lala1",  
    age:12
};

newArray=[[1,1,1],[me],[2,2],[3]];
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

## Adv

## Array & Loop

### 1. Intro Arrays 

Variables can store numbers or strings. But so far, we've only been able to store ONE number or ONE string. Good thing we have arrays. Arrays:

1. store **lists** of data
2. can store **different data types** at the same time
3. are **ordered** so the position of each piece of data is fixed

E.G
```javascript
var names = ["Mao","Gandhi","Mandela"];

var sizes = [4, 6, 3, 2, 1, 9];

var mixed = [34, "candy", "blue", 11];
```

**Syntax**:
`var arrayName = [data, data, data];`

Any time you see data surrounded by `[ ]`, it is an array.

### 2. Access Arrays
It's nice that we can put a list of data into an array. But now we need to learn how to get access to the data inside the array.

The position of things in arrays is fixed. So we just need to know the array name (here, it is `junkData`), and the position of the data we want, and we're done.

Small complication: the position (or the index) of each bit of data is counted starting from 0, not 1.

First element in the array: `junkData[0]`
Third element in the array: `junkData[2]`
Arrays have 0-based indexing, so we start counting the positions from 0. 

E.G
```javascript
var junkData = ["Eddie Murphy", 49, "peanuts", 31];

console.log(junkData[3]);
```


### 2. Loop & Arrays
```javascript
var cities = ["Malaysia", "Amman", "Helsinki", "NYC"];

for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
```

