# i metodi call e apply

## call

permette di chiamare la funzione con uno specifico valore

```javascript
const mauro = { nome: "Mauro" }; const paolo = { nome: "Paolo" };
// this function isn't associated with any object, yet // it's using 'this'!
function greet() {
return `Buongiorno, mi chiamo  ${this.nome}!`; }
greet();
greet.call(mauro);
greet.call(paolo);
// "Buongiorno, mi chiamo  !" - 'this' non collegato
// "Buongiorno, mi chiamo  Mauro!" - 'this' collegato to 'mauro'
// "Buongiorno, mi chiamo  Paolo!" - 'this' collegato to 'paolo'
```

```javascript
function update(dataNascita, professione) { this.dataNascita = dataNascita; this.professione = professione;
}
update.call(mauro, 1969, 'teacher');
// mauro adesso vale { nome: "Mauro", dataNascita: 1969, // professione: "teacher" }
update.call(paolo, 1999, 'student');
// paolo adesso vale { nome: "Paolo", dataNascita: 1999, // professione: "student" }
```

---

## apply

`apply` è identica a `call`, ma gestisce in modo differente gli argomenti: devono essere passati come array

```javascript
update.apply(mauro, [1955, "developer"]);
// mauro adesso vale { nome: "Mauro", dataNascita: 1955, // professione: "developer" }
update.apply(paolo, [1918, "coder"]);
// paolo adesso vale { nome: "Paolo", dataNascita: 1918, // professione: "coder" }
```

```javascript
const arr = [2, 3, -5, 15, 7]; 
Math.min.apply(null, arr); 
// -5 Math.max.apply(null, arr); 
// 15
```

---

Con ES6 e lo **spread operator (...)**, possiamo ottenere lo stesso risultato di `apply`. 

```javascript
const arr = [2, 3, -5, 15, 7]; 
Math.min(...arr);
Math.max(...arr);
```

```javascript
const nuovaPersona = [1969, "martial-artist"];
update.call(mauro, ...nuovaPersona);
// equivalent to apply(mauro, nuovaPersona)
```
