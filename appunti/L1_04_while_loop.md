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


#Lesson4 Loop : While
Currently You know what is for loops. Just to remind, here is the syntax for for loop :

```javascript
for (var i = start; i < end; i++) {
  // do something
}
```

But what if you didn't know ahead of time when to stop looping? Say, for example, you wanted to keep choosing playing cards from a deck until you get a spade. You don't know how many cards you'll need to choose, so a `for` loop won't work.

In situations like these where you don't know in advance when to stop looping, we can use a `while` loop.

E.G 

```javascript
var coinFace = Math.floor(Math.random() * 2);

while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");
```

## While - Basics

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
### 1. When to "while" & when to "for"

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


## Recap (For, DO, Do-While)


```javascript
for(var i=0;i<3;i++){
 console.log("lala");   
}

var i=0;
while(i<3){
    console.log("While loop");
    i++;
}

var j=0;
do{
    console.log("DO...WHILE");
    j++;
}while(j>3);
```
