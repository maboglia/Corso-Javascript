# find e findIndex


## findIndex

ritorna un indice (oppure –1 se non ci sono risultati). 

```javascript

const studenti = [{ id: 5, nome: "Mauro" }, { id: 7, nome: "Paolo" }];

studenti.findIndex(o => o.id === 5); // ritorna 0
studenti.findIndex(o => o.nome === "Paolo"); // ritorna 1
studenti.findIndex(o => o === 3); // ritorna -1
studenti.findIndex(o => o.id === 17); // ritorna -1
```

### find 

ritorna l'elemento (oppure null se non ci sono risultati ):

```javascript
const studenti = [{ id: 5, nome: "Mauro" }, { id: 7, nome: "Paolo" }]; 

studenti.find(o => o.id === 5); // ritorna object { id: 5, nome: "Mauro" } 
studenti.find(o => o.id === 2); // ritorna null
```

La funzione di callback accetta 3 argomenti: 
`(elemento, indice, collezione)=>{...}`

```javascript
const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
arr.find((x, i) => i > 2 && Number.isInteger(Math.sqrt(x))); // ritorna 4
```
