# Costrutti iterativi (Loop): While

---

## while

```javascript
while(expresion){
    frasi
}
```

### codice

[es data](../esempi/02_while_testa_croce.js)

---

## do/while

```javascript
do {
    frasi
while(expresion)
```

```javascript
var testaCroce = Math.floor(Math.random() * 2);

while(testaCroce === 0){
	console.log("Testa! Ritenta...");
	var testaCroce = Math.floor(Math.random() * 2);
}
console.log("Croce! Sarai più fortunato.");
```

---

### Infinite Loops


```javascript
understand = true;

while(understand){
	console.log("prova microfono");

    //understand=false; //guardia del ciclo
}
```

--- 

### while loops in una Function

```javascript

var count=0
var loop = function(){
   
	while(count<3){
		console.log("I'm looping!");
		count++;
	}
};

loop();
```

---

### Do-While Loop

```javascript
var condizione = false;

do {
	console.log("La condizione è " + condizione + "!");	
} while (condizione);
```

```javascript
var miaFunzione = function(){
    
  var condizione=false;
  do{
      console.log("bla");
      
  }while(condizione);
};

miaFunzione();
```
