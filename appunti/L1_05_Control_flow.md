#Lesson5 Control Flow

## Condizioni
* if
* if ... else
* if ... else if ... else
* switch
* operatore ternario


## if
```javascript
if(expresion){
    frasi
}

if(expresion){
    frasi
}else{
    frasi
}
```

## if else if

```javascript
if(expresion){
    frasi
}else if{
    frasi
}else{
    frasi
}
```
## switch

```javascript
switch(expresion){
    case 1:
        frasi
        break
    case n:
        frasi
        break
    default:
	  frasi
}
```
## operatore ternario
```javascript
(condizione) ? true : false ;
```


## If/Else & Else-IF & Loop


### 1. Else-If

```javascript
if (/* Some condition */) {
    // Do something
} else if (/* Some other condition */) {
    // Do something else
} else {    // Otherwise
    // Do a third thing
}
```

### 2. isNan function 
isNan (Is Not a number)


```javascript
isNaN('berry'); // => true
isNaN(NaN); // => true
isNaN(undefined); // => true
isNaN(42);  // => false
isNaN("42"); //=> false
```

you can't just do

```javascript
isNaN(unicorns);
```

unless you've already defined the variable unicorns. You can, however, do
```javascript
isNaN("unicorns"); // => true
```


```javascript
var isEven = function(number) {
  // Your code goes here!
  
  if(number%2===0){
   return true;   
  }
  else if (isNaN(number))
  {
    return "Not a number";  
    }
  else{
      return false;
  }
};

isEven(6);

```

### 3. While Loop 

```javascript
var i=0;
while(i<3){
 console.log(i);
 i++;
}
```

### 4. Sneak Peak (Switch statement)
```javascript
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break; 
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break; 
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}
```

**Syntax**

```javascript
switch (/*Some expression*/) {
    case 'option1':
        // Do something
        break;
    case 'option2':
        // Do something else
        break;
    case 'option3':
        // Do a third thing
        break;
    default:
       // Do yet another thing
}
```


## Logical Operator

```javascript
var iLoveJavaScript =true ;
var iLoveLearning =true ;

if(iLoveJavaScript && iLoveLearning) {
  // if iLoveJavaScript AND iLoveLearning:
  console.log("Awesome! Let's keep learning!");
} else if(!(iLoveJavaScript || iLoveLearning)) {
  // if NOT iLoveJavaScript OR iLoveLearning:
  console.log("Let's see if we can change your mind.");
} else {
  console.log("You only like one but not the other? We'll work on it.");
}
```

### 1. And (&&)


```javascript
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false
```

**Sample (AND)**
```javascript
var hungry=true;
var foodHere=true;

var eat = function() {
  // Add your if/else statement here!
  if(hungry&&foodHere){
   return true;   
  }else{
      return false;
  }
};

eat();
```

### 2. OR (||)

```javascript
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
```

**Sample (OR)**
```javascript
var tired=true;
var bored=false;

var nap = function() {
  // Add your if/else statement here!
  if(tired||bored){
      return true;
  }else{
      return false;
  }
};
```

### Not (!)

```javascript
!true;   // => false
!false;  // => true
```

**Sample (Not)
```javascript
var programming=false;

var happy = function() {
  // Add your if/else statement here!
  if(!programming){
   return true;   
  }else{
      return false;
  }
};
```

