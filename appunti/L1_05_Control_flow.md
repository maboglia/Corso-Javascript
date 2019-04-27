#Lesson5 Control Flow

## Condizioni
* if
* if ... else
* if ... else if ... else
* switch
* operatore ternario


## if
```javascript
if(espressione){
    frasi
}

if(espressione){
    frasi
}else{
    frasi
}
```

## if else if

```javascript
if(espressione){
    frasi
}else if{
    frasi
}else{
    frasi
}
```
## switch

```javascript
switch(espressione){
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


## Switch statement

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


```javascript
var lunch = prompt("Cosa mangi?","Scegli un piatto");

switch(lunch){
  case 'panino':
    console.log("Hai scelto panino");
    break;
  case 'insalata':
    console.log("Hai scelto insalata");
    break; 
  case 'pizza':
    console.log("Hai scelto pizza");
    break;
  case 'torta':
    console.log("Hai scelto torta");
    break; 
  default:
    console.log("");

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