# appunti

## javascript

**esercizi**

* lampadina accendi-spegni
* todo-list 
* slideshow 
* negozio alimentari
* biblioteca
* biglietteria
* le ricette del mondo
* calcolatrice
* trenino: animazione e collisione
* Rock Scissors Paper
* Guess the number
* Lancia dadi
* memory
* 9 quadrati cambia colore
* quadrato rotante
* 

**Javascript advanced**

* web storage
* local & session storage
* geolocation
* drag & drop
* Html5 Canvas

**Javascript framework & libraries**

* nodejs
* jQuery: DOM Handling, Animation, AJAX, JSON
* Angular: components, routing, services


### Arrow

Arrow functions allow you to simplify syntax in three ways:
• You can omit the word function.
• If the function takes a single argument, you can omit the parentheses.
• If the function body is a single expression, you can omit curly braces and the return statement.
Arrow functions are always anonymous. You can still assign them to a variable, but you can’t create a named function like you can with the function keyword.

```javascript
const f1 = function() { return "hello!"; }
// OR
const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
// OR
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) { return a + b; }
// OR
const f3 = (a,b) => a + b;

//esempio
const o={
name: 'Julie', 
greetBackwards: function() {
const getReverseName = () => {
let nameBackwards = '';
for(let i=this.name.length-1; i>=0; i--) {
nameBackwards += this.name[i]; }
return nameBackwards; };
return `${getReverseName()} si eman ym ,olleH`; },
    };
    o.greetBackwards();

```


### call
call, which is a method available on all functions that allows you to call the function with a specific value of this:

```javascript
const bruce = { name: "Bruce" }; const madeline = { name: "Madeline" };
// this function isn't associated with any object, yet // it's using 'this'!
function greet() {
return `Hello, I'm ${this.name}!`; }
greet();
greet.call(bruce);
greet.call(madeline);
// "Hello, I'm !" - 'this' not bound
// "Hello, I'm Bruce!" - 'this' bound to 'bruce'
// "Hello, I'm Madeline!" - 'this' bound to 'madeline'
```

```javascript
function update(birthYear, occupation) { this.birthYear = birthYear; this.occupation = occupation;
}
update.call(bruce, 1949, 'singer');
// bruce is now { name: "Bruce", birthYear: 1949, // occupation: "singer" }
update.call(madeline, 1942, 'actress');
// madeline is now { name: "Madeline", birthYear: 1942, // occupation: "actress" }
```

### apply
apply is identical to call except the way it handles function arguments. call takes arguments directly, just like a normal function. apply takes its arguments as an array:

```javascript
update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955, // occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918, // occupation: "writer" }
```

Math.min and Math.max functions take any number of arguments and return the minimum or maximum, respectively. We can use apply to use these functions with an existing array:
const arr = [2, 3, -5, 15, 7]; Math.min.apply(null, arr); // -5 Math.max.apply(null, arr); // 15
Note that we simply pass null in for the value of this. That’s because Math.min and Math.max don’t use this at all; it doesn’t matter what we pass in here.

With the ES6 spread operator (...), we can accomplish the same result as apply. In the instance of our update method, where we do care about the this value, we still have to use call, but for Math.min and Math.max, where it doesn’t matter, we can use the spread operator to call these functions directly:

```javascript
const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
Math.max(...arr);
// equivalent to apply(bruce, newBruce)
// -5
// 15
```

## findIndex
Next up is findIndex, which is similar to indexOf in that it returns an index (or –1 if there’s no match). findIndex is more flexible, though, in that you can provide a function that determines if an element is a match (findIndex doesn’t have an option to start at an arbitrary index, nor is there a corresponding findLastIndex):
```javascript
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
arr.findIndex(o => o.id === 5);
arr.findIndex(o => o.name === "Francis");
arr.findIndex(o => o === 3);
arr.findIndex(o => o.id === 17);
// returns 0
// returns 1
// returns -1
// returns -1
```

### find 

find and findIndex are great if you’re looking for the index of an element. But what if you don’t care about the index of the element, but just want the element itself ? find is like findIndex in that it allows you to specify a function to find what you’re look‐ ing for, but it returns the element itself instead of the index (or null if no such ele‐ ment was found):

```javascript
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }]; 
arr.find(o => o.id === 5); // returns object { id: 5, name: "Judith" } 
arr.find(o => o.id === 2); // returns null
```

The functions that you pass to find and findIndex, in addition to receiving each ele‐ ment as their first argument, also receive the index of the current element and the whole array itself as arguments. This allows you to do things, for example, such as finding square numbers past a certain index:
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // returns 4


### some
some returns true if it finds an element that meets the criteria (all it needs is one; it’ll stop looking after it finds the first one), and false otherwise. Example:
const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0); // true; 12 is even arr.some(x => Number.isInteger(Math.sqrt(x))); // false; no squares

### every

every returns true if every element in the array passes the criteria, and false other‐ wise. every will stop looking and return false if it finds an element that doesn’t match the criteria; otherwise, it will have to scan the entire array:
const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); // true; no odd numbers arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6 is not square

### map

map transforms the elements in the array. To what? That’s the beauty: it’s up to you. Do you have objects that contain numbers, but you really just need the numbers? Easy. Does your array contain functions, and you need promises? Easy. Whenever the array is in one format and you need it in another, use map. Both map and filter return copies, and do not modify the original array. Let’s see some examples:

```javascript
const cart = [ { name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x*0.8); 
const lcNames = names.map(String.toLowerCase);
// ["Widget", "Gadget"]
// [9.95, 22.95]
// [7.96, 18.36]
// ["widget", "gadget"]
```

You may be wondering how lcNames is working: it doesn’t look like the others. All of the methods we’re discussing that take functions, including map, don’t care how you pass the function in. In the case of names, prices, and discountPrices, we’re con‐ structing our own custom function (using the arrow notation). For lcNames, we’re using a function that already exists, String.toLowerCase. This function takes a single string argument and returns the lowercased string. We could as easily have written ```names.map(x ⇒ x.toLowerCase())```, but it’s important to understand that a function is a function, no matter what form it takes.

Consider this example where we have our items and corresponding prices in two separate arrays, and we want to combine them:
const items = ["Widget", "Gadget"];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i]}));
// cart: [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }]

### filter

filter, as the name implies, is designed to remove unwanted things from an array. Like map, it returns a new array with elements removed. What elements? Again, that’s completely up to you. If you guessed that we’re providing a function to determine which elements to remove, you’re catching on. Let’s see some examples:
    
```javascript
    // create a deck of playing cards
const cards = [];
for(let suit of ['H', 'C', 'D', 'S']) // hearts, clubs, diamonds, spades
for(let value=1; value<=13; value++) cards.push({ suit, value });
// get all cards with value 2:
cards.filter(c => c.value === 2);
// [
//    { suit: 'H', value: 2 },
//    { suit: 'C', value: 2 },
//    { suit: 'D', value: 2 },
//    { suit: 'S', value: 2 }
// ]
    // (for the following, we will just list length, for compactness)
    // get all diamonds:
cards.filter(c => c.suit === 'D'); // length: 13 // get all face cards
cards.filter(c => c.value > 10); // length: 12 // get all face cards that are hearts
cards.filter(c => c.value > 10 && c.suit === 'H'); // length: 3
```

### for...in

The traditional way to enumerate the properties of an object is for...in. Consider an object that has some string properties and a lone symbol property:
const SYM = Symbol();
consto={a:1,b:2,c:3,[SYM]:4};
for(let prop in o) { if(!o.hasOwnProperty(prop)) continue; console.log(`${prop}: ${o[prop]}`);
}

While it’s possible to use for...in to iterate over an array, it’s gen‐ erally considered a bad idea. 

### Object.keys

Object.keys gives us a way to get all of the enumerable string properties of an object as an array:

```javascript
const SYM = Symbol();
consto={a:1,b:2,c:3,[SYM]:4}; Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
```

 it makes it easy to list all the properties of an object that start with the letter x:
```javascript
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5, };
Object.keys(o)
.filter(prop => prop.match(/^x/))
.forEach(prop => console.log(`${prop}: ${o[prop]}`));
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

### HTMLCollection
All of the DOM methods that return a collection do not return a JavaScript array, but an instance of HTMLCollection, which is an “array-like” object. 
You can iterate over it with a for loop, but the Array.prototype methods (such as map, filter, and reduce) won’t be available. 

You can convert an HTMLCollection to an array by using the spread operator: [...document.getElementsByTag Name(p)].

### spread operator (...)

Finally, you can use the spread operator (...) to collect any additional arguments:

```javascript
function addPrefix(prefix, ...words) {
// we will learn a better way to do this later! const prefixedWords = [];
for(let i=0; i<words.length; i++) {
          prefixedWords[i] = prefix + words[i];
       }
return prefixedWords;

}
addPrefix("con", "verse", "vex"); // ["converse", "convex"]
```
