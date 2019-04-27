# i metodi call e apply

## call
permette di chiamare la funzione con uno specifico valore

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

## apply
apply is identical to call except the way it handles function arguments. call takes arguments directly, just like a normal function. apply takes its arguments as an array:

```javascript
update.apply(bruce, [1955, "actor"]);
// bruce is now { name: "Bruce", birthYear: 1955, // occupation: "actor" }
update.apply(madeline, [1918, "writer"]);
// madeline is now { name: "Madeline", birthYear: 1918, // occupation: "writer" }
```

Math.min and Math.max functions take any number of arguments and return the minimum or maximum, respectively. 

We can use apply to use these functions with an existing array:
```javascript
const arr = [2, 3, -5, 15, 7]; 
Math.min.apply(null, arr); 
// -5 Math.max.apply(null, arr); 
// 15
```

Note that we simply pass null in for the value of this. That’s because Math.min and Math.max don’t use this at all; it doesn’t matter what we pass in here.

With the ES6 **spread operator (...)**, we can accomplish the same result as apply. 

In the instance of our update method, where we do care about the this value, we still have to use call, but for Math.min and Math.max, where it doesn’t matter, we can use the spread operator to call these functions directly:

```javascript
const newBruce = [1940, "martial artist"];
update.call(bruce, ...newBruce);
Math.min(...arr);
Math.max(...arr);
// equivalent to apply(bruce, newBruce)
// -5
// 15
```
