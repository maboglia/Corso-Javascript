# map

map ritorna un nuovo array con gli elementi modificati.

```javascript
const carrello = [ { nome: "Ombrello", prezzo: 12.20 }, { nome: "Cappello", prezzo: 15.50 }];
const nomi = carrello.map(x => x.nome);
const prezzi = carrello.map(x => x.prezzo);
const discountprezzi = prezzi.map(x => x*0.8); 
const lcnomi = nomi.map(String.toLowerCase);
// ["Ombrello", "Cappello"]
// [12.20, 15.50]
// [7.96, 18.36]
// ["Ombrello", "Cappello"]
```

```javascript
const items = ["Ombrello", "Cappello"];
const prezzi = [12.20, 15.50];
const carrello = items.map((x, i) => ({ nome: x, prezzo: prezzi[i]}));
// carrello: [{ nome: "Ombrello", prezzo: 12.20 }, { nome: "Cappello", prezzo: 15.50 }]
```
