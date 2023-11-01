# Cattura di errori

---

## try...catch statement

Il try...catch statement delimita un blocco di codice da provare e gestisce una eventuale situazione di errore.

```javascript
try{
    frasi
}catch(e){
    frasi
}finally{
    frasi
}
```

```javascript
try {
    nonExistentFunction();
}
catch(error) {
  console.error(error);
  // expected output: ReferenceError: nonExistentFunction is not defined
  // Note - error messages will vary depending on browser
}
```

---

## throw

L'istruzione throw chiama un'eccezione definita dall'utente.

L'esecuzione della funzione corrente si interrompe (ovvero i comandi successivi a throw non verranno eseguiti), e il controllo verrà passato al primo blocco catch nella pila delle chiamate.

Se non è previsto nessun blocco catch esiste nella funzione chiamante, il programma verrà terminato.

```javascript
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw "Parameter is not a number!";
  }
}

try {
  getRectArea(3, 'A');
}
catch(e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}
```

[altri esempi su mozilla](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Statements/throw)
