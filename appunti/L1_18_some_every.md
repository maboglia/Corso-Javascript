### some

`some` ritorna true se torva un elemento che soddisfi i criteri 


```javascript
const arr = [5, 7, 12, 15, 17];

arr.some(x => x%2===0); // true; 12 è pari 
arr.some(x => Number.isInteger(Math.sqrt(x))); // false; non ci sono quadrati di interi
```

### every

`every` ritorna true se ogni elemento soddisfa i criteri

```javascript
const arr = [4, 6, 16, 36];
arr.every(x => x%2===0); // true; no odd numbers 
arr.every(x => Number.isInteger(Math.sqrt(x))); // false; 6 non è un quadrato di interi
```