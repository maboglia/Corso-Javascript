# find e findIndex


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

The functions that you pass to find and findIndex, in addition to receiving each element as their first argument, also receive the index of the current element and the whole array itself as arguments. This allows you to do things, for example, such as finding square numbers past a certain index:
```javascript
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // returns 4
```
