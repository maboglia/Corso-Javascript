# Arrow

Arrow functions allow you to simplify syntax in three ways:
Permettono di semplificare il codice in tre modi
• puoi omettere la keyword function.
• se la funzione ha un solo argomento, puoi omettere le parentesi.
• se il corpo della funzione ha una singola espressione, puoi omettere le graffe e il return

Le Arrow functions sono sempre anonime. 
Puoi assegnarle ad una variabile, ma non si può creare una _named function_ .

```javascript
const f1 = function() { return "hello!"; }
// OR
const f1 = () => "hello!";

const f2 = function(name) { return `Hello, ${name}!`; }
// OR
const f2 = name => `Hello, ${name}!`;

const f3 = function(a, b) { return a + b; }
// OR
const f3 = (a,b) => a + b;

//esempio
const o={
    name: 'Julie', 
greetBackwards: function() {
    const getReverseName = () => {
        let nameBackwards = '';
for(let i=this.name.length-1; i>=0; i--) {
    nameBackwards += this.name[i]; }
return nameBackwards; };
return `${getReverseName()} si eman ym ,olleH`; },
    };
    o.greetBackwards();

```

## esempi 'estremi' 

le variazioni possibili nella sintassi sono un rischio: si perde chiarezza

* sintatticamente anonime
* problemi nella minificazione
* meglio assegnarle ad una variabile

```javascript
=>3
()=>3
x=>3
(...x)=>3
(x,y)=>3
//uno  statement deve essere wrappato
x => { try {5; } catch(e){}  }
x => { return true;  }
//se ritorni un oggetto devi wrapparlo tra parentesi
x => ({ x: y  })

```

