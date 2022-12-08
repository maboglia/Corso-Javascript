---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---
![bg contain](./background-IL.jpg)

Mauro Bogliaccino

# Corso di programmazione Javascript

---
![bg contain](./background-IL.jpg)

## Esercizi sugli oggetti - Somma le proprietà dell'oggetto

---
![bg contain](./background-IL.jpg)

Abbiamo un oggetto che memorizza il salario dei dipendenti del team:

```javascript
let stipendi = {
  John: 100,
  Ann: 160,
  Pete: 130
}
```

---
![bg contain](./background-IL.jpg)

Scrivi il codice per sommare tutti i salari contenuti e memorizza il risultato in sum. Dovrebbe essere 390.

Se stipendi è vuoto il risultato dovrebbe essere 0.

---
![bg contain](./background-IL.jpg)

## Esercizi sugli oggetti - Moltiplica le proprietà dell'oggetto

---
![bg contain](./background-IL.jpg)

Crea una funzione `multiplyNumeric(obj)` che moltiplica tutte le prprietà numeriche di obj per 2.

Ad esempio:

```javascript
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "Mio menu"
};
```

---
![bg contain](./background-IL.jpg)

Dopo aver chiamato la funzione...

```javascript
multiplyNumeric(menu);

//l'oggetto deve essere modificato
menu = {
  width: 400,
  height: 600,
  title: "Mio menu"
};
```

---
![bg contain](./background-IL.jpg)

Nota che `multiplyNumeric()` non deve ritornare nulla. Deve solamente **modificare** l’oggetto.

Puoi usare typeof per controllare il tipo di dato.
