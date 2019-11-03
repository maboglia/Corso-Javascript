# Costrutti iterativi (Loop): For 


## Sintassi for loops 
1. partenza
2. fine
3. passo 

```javascript
for (var i = 1; i < 11; i = i + 1) {
    /* your code here */;
}
```

## for
```javascript
for(inizializzazione;valutatore;incrementatore){
    frasi
}
```
--- 

## Perché usare i *for* loops ? 
Invece di scrivere 5 linee di codice.... 

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

Usando il for loop, si può scrivere un codice più efficiente. 

```javascript
for (var counter = 1; counter < 6; counter++) {
	console.log(counter);
}
```
