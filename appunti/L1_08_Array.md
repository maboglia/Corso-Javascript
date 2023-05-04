# Array

---

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

---

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

---

## Dichiarare array

```javascript
var list=["one","two","three"];
```

---

## Accedere array

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

console.log(languages[2]); //Output: JavaScript
```

---

## Inserire Elementi

```javascript
students.push('Gino');
```

---

## Rimuovere Elementi

```javascript
students.pop();
```

---

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

---

## Indicizzare un array

```javascript
students[0]
students[1] = 'Simone';

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
bothClasses.join(' e ');
```

---

## Iterare su elementi array

```javascript
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for(var i=0; i < languages.length; i++){
 console.log(languages[i]);   
}
```

---

## Array di Array

```javascript
var biDimensionale = [[1, 1], [1, 1]];

```

| "0" | "1"   |
| --- | :---: |
| 1   | 1     |
| 1   | 1     |

---

## Array irregolari

```javascript
var jagged=[[1,1,1,1],[2,2,2],[3,3]];
```

---

## Array eterogenei

```javascript
var me={
  name:"lala1",  
    age:12
};
var myArray=[1,true,"lala",me];
```

---

## Array Multi-dimensionali irregolari

```javascript
var me={
  name:"lala1",  
    age:12
};

newArray=[[1,1,1],[me],[2,2],[3]];
```

---

## Ottieni la dimensione di un array

```javascript
var arr = ['hello', 'world', 123];
arr.length; // 3


```

## Estrai un elemento

```javascript
var arr = ['hello', 'world', 123];
arr[1]; // 'world'


```

## Ricerca in avanti un elemento partendo da un indice (default: 0)

```javascript
var arr = [3, 4, 5, 3];
arr.indexOf(3); // 0
arr.indexOf(5); // 2
arr.indexOf(7); // -1
arr.indexOf(3, 1); // 3
arr.indexOf(5, 1); // 2


```

## Ricerca all'indietro di un elemento partendo da un indice (predefinito: this.length-1)

```javascript

var arr = [3, 4, 5, 3];
arr.lastIndexOf(3); // 3
arr.lastIndexOf(3, 3); // 3
arr.lastIndexOf(3, 2); // 0
arr.lastIndexOf(3, -1); // 3
arr.lastIndexOf(3, -2); // 0


```

## Concatena l'array corrente con valori dati e/o array di valori dati

```javascript
var arr = [1, 2, 3];
arr.concat(4, 5, [6, 7, 8], [9], []); // [1,2,3,4,5,6,7,8,9]
arr; // [1,2,3]


```

## (sul posto) Aggiunge nuovi elementi alla fine di un array

```javascript
var arr = [3, 4, 5];
arr.push(6, 7, [8, 9]); // 6
arr; // [3,4,5,6,7,[8,9]]
arr[0]; // 3
arr[1]; // 4
arr[2]; // 5
arr[3]; // 6
arr[4]; // 7
arr[5]; // [8,9]
arr.length; // 6

arr[6]; // undefined
arr[7]; // undefined
arr.length; // 6

arr[8] = 'NinthElm';
arr[6]; // undefined
arr[7]; // undefined
arr[8]; // 'NinthElm'
arr.length; // 9


```

## (sul posto) Antepone i nuovi elementi all'inizio di un array

```javascript
var arr = [3, 4, 5];
arr.unshift(6, 7, [8, 9]); // 6
arr; // [6,7,[8,9],3,4,5]


```

## (sul posto) Rimuove (e restituisce) l'ultimo elemento in un array

```javascript
var arr = [3, 4, 5];
arr.pop(); // 5
arr; // [3,4]


```

## (sul posto) Rimuove (e restituisce) il primo elemento in un array

```javascript
var arr = [3, 4, 5];
arr.shift(); // 3
arr; // [4,5]


```

## (sul posto) Estrarre alcuni elementi (e facoltativamente inserirne di nuovi nella posizione)

```javascript

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3, 0); // []
arr; // [0,1,2,3,4,5,6,7,8,9]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3, 2); // [3,4]
arr; // [0,1,2,5,6,7,8,9]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3); // [3,4,5,6,7,8,9]
arr; // [0,1,2]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(-4); // [6,7,8,9]
arr; // [0,1,2,3,4,5]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(-4, 2); // [6,7]
arr; // [0,1,2,3,4,5,8,9]

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(3, 2, '3', [4], null); // [3,4]
arr; // [0,1,2,'3',[4],null,5,6,7,8,9]


```

## filter() seleziona alcuni elementi da un array

```javascript
var arr = [1, 2, 3, 4, 5, 7, 9];
var isOdd = function(n) { return n % 2 === 1 };
arr.filter(isOdd); // [1,3,5,7,9]
arr; // [1,2,3,4,5,7,9]


```

## every() si ferma quando ottiene un valore falso

```javascript
var arr1 = [1, 3, 5, 7, 9];
var arr2 = [1, 2, 5, 7, 9];

var isOdd = function(n) { return n % 2 === 1 };
var isEven = function(n) { return n % 2 === 0 };
arr1.every(isOdd); // true
arr2.every(isOdd); // false
```

## some() si ferma una volta ottenuto un valore vero

```javascript
arr1.some(isEven); // false
arr2.some(isEven); // true
```

## map() e forEach() esaminano l'intero elenco

```javascript

var print = function(n) { console.log(n) };
var addTen = function(n) { return n + 10 };
arr1.forEach(print); // 1, 3, 5, 7, and 9 are printed
arr1.map(addTen); // [11,13,15,17,19]


```

## Possiamo anche ottenere l'indice corrente all'interno delle nostre funzioni durante l'enumerazione

## poiché queste funzioni vengono effettivamente richiamate con più argomenti

```javascript
var arr = ['hello', 'world', 'js'];
arr.map(function(elm, i, ref) {
    console.log(elm, i, ref === arr);
    return i + ' ' + elm;
});
//

```

```javascript
##      hello 0 true
##      world 1 true
##      js 2 true
## And the array is returned:
##      ["0 hello", "1 world", "2 js"]
```

## reduce() o reduceRight()

```javascript
var squareSumInit = 0;
var squareSumReducer = function(accumulated, current) {
    return accumulated + current * current;
};
[1, 2, 3, 4].reduce(squareSumReducer, squareSumInit); // 30

var add = function(a, b) { return a + b; };
var square = function(n) { return n * n; };
[1, 2, 3, 4].map(square).reduce(add, 0); // 30


```

## (sul posto) Ordina un array

```javascript
var arr = ['b', 'd', 'a', 'c'];
arr.sort();
arr; // ['a','b','c','d']

var nums = [2, 10, 4, 1, 3];
nums.sort();
nums; // [1,10,2,3,4]
nums.sort(function(a, b) { return a - b });
nums; // [1,2,3,4,10]


```

## (sul posto) Inverte un array

```javascript
var arr = [3, 4, 5];
arr.reverse();
arr; // [5,4,3]


```

## Unisci un array di stringhe in un'unica stringa

```javascript
var arr = ['hello', 'JS', 'world'];
arr.join(); // 'hello,JS,world'
arr.join('$'); // 'hello$JS$world'
arr.join(''); // 'helloJSworld'


```

## Estrai una copia di subarray

//

```javascript
//
##      Zero-based index vs Negative index
##         [ 'A', 'B', 'C', 'D', 'E' ]
##             0    1    2    3    4    -->
##      <--   -5   -4   -3   -2   -1
```

```javascript

var arr = [0, 1, 2, 3, 4];
arr.slice(); // [0,1,2,3,4]
arr.slice(0); // [0,1,2,3,4]
arr.slice(2); // [2,3,4]
arr.slice(-3); // [2,3,4]
arr.slice(1, 3); // [1,2]
arr.slice(1, -2); // [1,2]
arr.slice(-3, -1); // [2,3]
```
