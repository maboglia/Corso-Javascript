# Costrutti iterativi (Loop): For 

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


## Perché usare i *for* loops ? 
Invece di scrivere 5 linee di codice.... 

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Usando il for loop, si può scrivere un codice più efficiente. 

```javascript
for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
}
```

## Sintassi for loops 
### 1. Partenza

```javascript
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
```

### 2. fine

```javascript
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
```




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


### for... of

Nuovo in ES6, il for...of fornisce ancora un modo per ciclare su elementi di una collection. la sintassi è:
```javascript
    for(variable of object)
        statement
```
The ```for...of``` loop can be used on arrays, but more generically, on any object that is iterable. 

Here is an example of its use for looping over the contents of an array:

const hand = [randFace(), randFace(), randFace()]; 
for(let face of hand)
console.log(`You rolled...${face}!`);

```for...of``` is a great choice when you need to loop over an array, but don’t need to know the index number of each element.


### for...in

The traditional way to enumerate the properties of an object is for...in. Consider an object that has some string properties and a lone symbol property:
const SYM = Symbol();
consto={a:1,b:2,c:3,[SYM]:4};
for(let prop in o) { if(!o.hasOwnProperty(prop)) continue; console.log(`${prop}: ${o[prop]}`);
}

While it’s possible to use for...in to iterate over an array, it’s gen‐ erally considered a bad idea. 
