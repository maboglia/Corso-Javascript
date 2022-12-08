# Exercises: if/else statements

## What number's bigger?

Scrivi una funzione chiamata **greaterNum** che:

* accetta 2 argomenti, entrambi numeri.
* restituisce il numero maggiore (superiore).

Chiama quella funzione 2 volte con diverse coppie di numeri e registra l'output per assicurarti che funzioni (ad esempio "Il numero maggiore di 5 e 10 è 10.").

```javascript
function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(greaterNum(5, 10));
```

## The World Translator

Scrivi una funzione chiamata **helloWorld** che:

* accetta 1 argomento, un codice di lingua (ad es. "es", "de", "en")
* restituisce "Hello, World" per la lingua specificata, per almeno 3 lingue. L'impostazione predefinita dovrebbe restituire l'inglese.

Chiama quella funzione per ciascuna delle lingue supportate e registra il risultato per assicurarti che funzioni.

```javascript

function helloWorld(lang) {
    if (lang == 'fr') {
        return 'Bonjour tout le monde';
    } else if (lang == 'es') {
        return 'Hola, Mundo';
    } else {
        return 'Hello, World';
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('fr'));
console.log(helloWorld('es'));
```

## The Grade Assigner

Scrivi una funzione chiamata **assignGrade** che:

* accetta 1 argomento, un punteggio numerico.
* restituisce un voto per il punteggio, "A", "B", "C", "D" o "F".

Chiama quella funzione per alcuni punteggi diversi e registra il risultato per assicurarti che funzioni.

```javascript
function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(95));
console.log('You got a ' + assignGrade(65));
```

## The Pluralizer

Scrivi una funzione chiamata **pluralize** che:

* prende 2 argomenti, un sostantivo e un numero.
* restituisce il numero e la forma pluralizzata, come "5 gatti" o "1 cane".

Chiama quella funzione per alcuni punteggi diversi e registra il risultato per assicurarti che funzioni.
Bonus: gestisci alcuni nomi collettivi come "pecora" e "oche".

```javascript
function pluralize(noun, number) {
    if (number != 1 && noun != 'sheep' && noun != 'geese') {
        return number + ' ' + noun + 's';
    } else {
        return number + ' ' + noun;
    }
}
console.log('I have ' + pluralize('cat', 0));
console.log('I have ' + pluralize('cat', 1));
console.log('I have ' + pluralize('cat', 2));
```
