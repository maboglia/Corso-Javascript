# for ... in

Il modo tradizionale per enumerare le proprietà di un oggetto è `for...in`. 

## sintassi

## for/in
```javascript
for(variabile in collezion){
    frasi
}
```



Considera un oggetto che abbia qualche proprietà di tipo stringa e una proprietà di tipo symbol:

```javascript
const SYM = Symbol();
const o={a:1,b:2,c:3,[SYM]:4};
for(let prop in o) { 
    if(!o.hasOwnProperty(prop)) continue; 
    console.log(`${prop}: ${o[prop]}`);
}
```

E' anche possibile iterare col for in su un array (che in JS è un oggetto), ma non è una pratica consigliata.

### Object.keys

Object.keys è un modo per ricevere le chiavi di un oggetto sotto forma di array 

```javascript
const SYM = Symbol();
const o={a:1,b:2,c:3,[SYM]:4}; 
Object
    .keys(o).
    forEach(prop => console.log(`${prop}: ${o[prop]}`));
```

ad esempio per listare tutte le proprietà di un oggetto che cominciano per x:

```javascript
const o = { apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5 };
Object.keys(o)
.filter(prop => prop.match(/^x/))
.forEach(prop => console.log(`${prop}: ${o[prop]}`));
```