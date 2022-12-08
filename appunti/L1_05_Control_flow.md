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
---

### Esercizi

---

## What number's bigger?

Scrivi una funzione chiamata **greaterNum** che:

* accetta 2 argomenti, entrambi numeri.
* restituisce il numero maggiore (superiore).

Chiama quella funzione 2 volte con diverse coppie di numeri e registra l'output per assicurarti che funzioni (ad esempio "Il numero maggiore di 5 e 10 è 10.").

---

## The World Translator

Scrivi una funzione chiamata **helloWorld** che:

* accetta 1 argomento, un codice di lingua (ad es. "es", "de", "en")
* restituisce "Hello, World" per la lingua specificata, per almeno 3 lingue. L'impostazione predefinita dovrebbe restituire l'inglese.

Chiama quella funzione per ciascuna delle lingue supportate e registra il risultato per assicurarti che funzioni.

---

## The Grade Assigner

Scrivi una funzione chiamata **assignGrade** che:

* accetta 1 argomento, un punteggio numerico.
* restituisce un voto per il punteggio, "A", "B", "C", "D" o "F".

Chiama quella funzione per alcuni punteggi diversi e registra il risultato per assicurarti che funzioni.

---

## The Pluralizer

Scrivi una funzione chiamata **pluralize** che:

* prende 2 argomenti, un sostantivo e un numero.
* restituisce il numero e la forma pluralizzata, come "5 gatti" o "1 cane".

Chiama quella funzione per alcuni punteggi diversi e registra il risultato per assicurarti che funzioni.
Bonus: gestisci alcuni nomi collettivi come "pecora" e "oche".
