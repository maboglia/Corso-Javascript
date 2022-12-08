

## Hello, object

Scrivi il seguente codice, una riga per ogni azione:

* Crea un oggetto vuoto user.
* Aggiungi la proprietà name con valore John.
* Aggiungi la proprietà surname con valore Smith.
* Cambia il valore di name con Pete.
* Rimuovi la proprietà name dall’oggetto.


---

## Controlla se è vuoto

Scrivi la funzione isEmpty(obj) che ritorna true se l’oggetto non ha proprietà, altrimenti ritorna false.

Dovrebbe funzionare con queste istruzioni:

```javascript
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
```

## Somma le proprietà dell'oggetto

Abbiamo un oggetto che memorizza il salario dei dipendenti del team:

```javascript
let stipendi = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

Scrivi il codice per sommare tutti i salari contenuti e memorizza il risultato in sum. Dovrebbe essere 390.

Se stipendi è vuoto il risultato dovrebbe essere 0.

## Moltiplica le proprietà numeriche per 2

Crea una funzione `multiplyNumeric(obj)` che moltiplica tutte le prprietà numeriche di obj per 2.

Ad esempio:

```javascript
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

`multiplyNumeric(menu)`;

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Nota che `multiplyNumeric()` non deve ritornare nulla. Deve solamente **modificare** l’oggetto.

P.S. Usa typeof per controllare il tipo.
