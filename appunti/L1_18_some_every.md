### some
some returns true if it finds an element that meets the criteria (all it needs is one; it’ll stop looking after it finds the first one), and false otherwise. Example:
const arr = [5, 7, 12, 15, 17];
arr.some(x => x%2===0); // true; 12 is even arr.some(x => Number.isInteger(Math.sqrt(x))); // false; no squares

### every

every returns true if every element in the array passes the criteria, and false other‐ wise. every will stop looking and return false if it finds an element that doesn’t match the criteria; otherwise, it will have to scan the entire array:
const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); // true; no odd numbers arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6 is not square
