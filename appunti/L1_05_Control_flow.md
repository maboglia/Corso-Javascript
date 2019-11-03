# Control Flow - Istruzioni per il controllo del flusso

---
## Condizioni
* if
* if ... else
* if ... else if ... else
* switch
* operatore ternario


---
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

---
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
---
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
---
## operatore ternario
```javascript
(condizione) ? true : false ;
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
    console.log("Non hai fame");

}
```

---
## Uso degli operatori logici

---
### 1. And (&&)


```javascript
true && true;    // => true
true && false;   // => false
false && true;   // => false
false && false;  // => false
```

```javascript
var piove=false;
var stoBene=true;

var esco = function() {
  // se non piove e sto bene esco
  if(piove && stoBene){
   return true;   
  }else{
      return false;
  }
};

esco();
```

---
### 2. OR (||)

```javascript
true || true;     // => true
true || false;    // => true
false || true;    // => true
false || false;   // => false
```


```javascript
var maggiorenne=true;
var etilista=false;

var requisitiAutista = function() {
  
  if(maggiorenne||etilista){
      return true;
  }else{
      return false;
  }
};
```

---
### Not (!)

```javascript
!true;   // => false
!false;  // => true
```

```javascript
var programmatore=false;

var happy = function() {

    if(!programmatore){
   return true;   
  }else{
      return false;
  }
};
```