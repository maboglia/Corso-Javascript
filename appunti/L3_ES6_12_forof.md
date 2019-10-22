# for ... of

Il costrutto for...of fornisce un modo per ciclare su elementi di una collection. 

La sintassi è:

```javascript
    for(variable of object)
        statement
```

Il ```for...of``` può essere utilizzato con qualsiasi oggetto iterabile. 


```javascript
const hand = [randFace(), randFace(), randFace()]; 
for(let face of hand)
console.log(`You rolled...${face}!`);
```

```for...of``` si utilizza quando non è importante conoscere l'inidice dell'iterazione.


### HTMLCollection
I metodi del DOM ritornano oggetti di tipo HTMLCollection, che è un oggetto simile all'array. Si può scorrere con i cicli for tradizionali, ma non si possono usare i nuovi metodi Array.prototype.

Per poterli utilizzare, devi convertire la HTMLCollection in un array, usando l'operatore spread `...`

<<<<<<< HEAD:appunti/L3_ES6_12_forof.md
`[...document.getElementsByTagName(p)].filter(arrow)`
=======
```javascript
[...document.getElementsByTag Name(p)].
```
>>>>>>> cb60afb349c68368cf856de44662c67c63ff2200:appunti/L1_12_forof.md
