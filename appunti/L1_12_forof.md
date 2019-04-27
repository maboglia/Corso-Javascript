# for... of

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


