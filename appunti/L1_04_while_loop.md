# Costrutti iterativi (Loop): While 

## while
```javascript
while(expresion){
    frasi
}
```
### codice
[es data](../esempi/02_while_testa_croce.js)


## do/while
```javascript
do {
    frasi
while(expresion)
```


```javascript
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```

### 1. Syntax


```javascript
while(condition){
    // Do something!
}
```

### 2. Infinite Loops 


```javascript
understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand=false;
}
```

### 3. Ways of writing While Loops

3 different ways :

```javascript
var bool = true;
while(bool){
    //Do something
}
```
is the same this as 

```javascript
var bool = true;
while(bool === true){
    //Do something
}
```
you could even do:

```javascript
var bool = true;
while(bool){
    //Do something
}
```

### 4. Write while loops within a Function 

```javascript
//Remember to set your condition outside the loop!
 var count=0
var loop = function(){
   
	while(count<3){
		//Your code goes here!
		console.log("I'm looping!");
		count++;
	}
};

loop();
```


## More to While Loop 
### 1. Quando utilizzare while o for per le iterazioni

```javascript
for(var i=0; i<5; i++){
    console.log("lala");
}

var j=0;
while(j<3){
    console.log("bla");
    j++;
}
```

### 2. Do-While Loop

```javascript
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);
```

```javascript
var getToDaChoppa = function(){
  // Write your do/while loop here!
  
  var condition=false;
  do{
      console.log("bla");
      
  }while(condition);
};

getToDaChoppa();
```
