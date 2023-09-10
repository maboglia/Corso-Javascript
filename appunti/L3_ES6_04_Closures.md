# ES6 - EcmaScript 2015

## Closures

Le funzioni in JavaScript formano closures. Una closure è la combinazione di una funzione e dell'ambito lessicale in cui questa funzione è stata dichiarata. 

Una closure è unpo speciale tipo di oggetto che combina due cose: una funzione e l'ambito in cui questa è stata creata. L'ambito consiste in qualsiasi variabile locale che era nel suo scope nel momento in cui la closure è stata creata.

Le closures permettono la creazione di 
* factory functions
* incapsulamento

Una closure in JavaScript è una funzione che ha accesso alle variabili da un'area esterna (padre) anche dopo che la funzione esterna ha completato l'esecuzione. In altre parole, una closure "cattura" lo stato dell'ambiente circostante in cui è stata creata, consentendo alla funzione interna di accedere a queste variabili esterne anche quando la funzione esterna non è più in esecuzione. Le closures sono una delle caratteristiche più potenti e flessibili di JavaScript e vengono spesso utilizzate per gestire dati e incapsulare comportamenti.

Ecco un esempio di come funzionano le closures:

```javascript
function creaContatore() {
  let contatore = 0;

  function incrementa() {
    contatore++;
    console.log(contatore);
  }

  return incrementa;
}

const mioContatore = creaContatore();

mioContatore(); // Output: 1
mioContatore(); // Output: 2
mioContatore(); // Output: 3
```

In questo esempio, la funzione `creaContatore` restituisce un'altra funzione `incrementa`. La variabile `contatore` è una variabile locale alla funzione `creaContatore`, ma quando restituiamo la funzione `incrementa`, essa "cattura" il valore di `contatore` nell'ambiente in cui è stata creata. Quindi, ogni volta che chiamiamo `mioContatore()`, il valore di `contatore` viene aggiornato e stampato, mantenendo uno stato interno tra le chiamate.

Le closures sono utili in molte situazioni, ad esempio:

1. **Incapsulamento dei dati**: Le closures consentono di nascondere dati sensibili o variabili di stato all'interno di una funzione senza esporli globalmente.

2. **Moduli**: Le closures possono essere utilizzate per implementare moduli e incapsulare funzionalità in modo che siano accessibili solo attraverso una specifica interfaccia pubblica.

3. **Gestione degli eventi**: Le closures possono essere utilizzate per gestire gli eventi e mantenere lo stato relativo a un oggetto o a un componente.

4. **Iterazioni sicure**: Nelle iterazioni di loop, le closures possono essere utilizzate per creare scope separati per evitare problemi di chiusura su varie iterazioni.

Ecco un esempio di chiusura utilizzata per creare un modulo:

```javascript
function creaModulo() {
  let datiPrivati = "Questi dati sono privati";

  function stampaDatiPrivati() {
    console.log(datiPrivati);
  }

  return {
    stampa: stampaDatiPrivati
  };
}

const mioModulo = creaModulo();
mioModulo.stampa(); // Output: "Questi dati sono privati"
```

In questo caso, il modulo restituito da `creaModulo` contiene una funzione `stampa` che ha accesso alla variabile `datiPrivati` grazie alla chiusura.

Le closures sono una parte fondamentale del linguaggio JavaScript e possono migliorare notevolmente la modularità e la gestione dei dati nei tuoi programmi.

---

## Function factory

Una function factory in JavaScript è una funzione che restituisce altre funzioni. Questo concetto è basato sulla capacità di JavaScript di trattare le funzioni come oggetti di prima classe, il che significa che le funzioni possono essere assegnate a variabili, passate come argomenti e restituite da altre funzioni. Le function factory sono utili quando si desidera creare più funzioni con un comportamento simile ma con piccole variazioni.

Ecco un esempio semplice di come creare una function factory:

```javascript
function creaMoltiplicatore(moltiplicatore) {
  // La function factory restituisce una nuova funzione
  return function (numero) {
    return numero * moltiplicatore;
  };
}

// Creiamo due moltiplicatori
const duplica = creaMoltiplicatore(2);
const triplica = creaMoltiplicatore(3);

console.log(duplica(5)); // Output: 10
console.log(triplica(5)); // Output: 15
```

In questo esempio, `creaMoltiplicatore` è una function factory che accetta un parametro `moltiplicatore` e restituisce una nuova funzione. La funzione restituita può essere utilizzata per moltiplicare qualsiasi numero per il valore specificato come `moltiplicatore`. Abbiamo creato due moltiplicatori, `duplica` e `triplica`, entrambi generati dalla stessa function factory ma con valori diversi per il moltiplicatore.

Le function factory sono potenti perché consentono di creare funzioni specializzate con facilità. Ad esempio, puoi utilizzare una function factory per creare gestori di eventi personalizzati, generare funzioni di validazione dinamiche o creare componenti modulari.

Ecco un esempio più avanzato di function factory che crea gestori di eventi personalizzati:

```javascript
function creaGestoreEvento(nomeEvento) {
  const registraEventi = [];

  function aggiungiHandler(handler) {
    registraEventi.push(handler);
  }

  function attivaEventi(...args) {
    for (const handler of registraEventi) {
      handler(...args);
    }
  }

  return {
    aggiungiHandler,
    attivaEventi
  };
}

// Creiamo due gestori di eventi personalizzati
const onClickHandler = creaGestoreEvento("click");
const onHoverHandler = creaGestoreEvento("hover");

function gestioneClick() {
  console.log("Click!");
}

function gestioneHover() {
  console.log("Hover!");
}

onClickHandler.aggiungiHandler(gestioneClick);
onHoverHandler.aggiungiHandler(gestioneHover);

// Simuliamo eventi
onClickHandler.attivaEventi();
onHoverHandler.attivaEventi();
```

In questo esempio, `creaGestoreEvento` è una function factory che genera gestori di eventi personalizzati. Puoi creare gestori di eventi specifici (ad esempio, per "click" o "hover") utilizzando questa factory. Successivamente, puoi aggiungere handler specifici a ciascun gestore e attivare gli eventi associati a ciascun gestore.

Le function factory sono una tecnica potente per la creazione di funzioni specializzate e consentono di scrivere codice più pulito, modulare ed espandibile.


```javascript
//creo una funzione base che ritorna una funzione interna, 
//da valorizzare e identificare esternamente
const moltiplicatore = (x)=>{
    return y => {
        return y*x;
    }
}
let valoreBase = moltiplicatore(4);
let duplicaBase = valoreBase(2);
let triplicaBase = valoreBase(3);
console.log(duplicaBase);
console.log(triplicaBase);

//riscriviamo la function factory con le arrow
const moltiplicatore = x => y => y * x;
//funziona tutto come prima

```
[Altri esempi su mozilla.org](https://developer.mozilla.org/it/docs/Web/JavaScript/Chiusure)

---

## Incapsulamento

Nascondere lo stato interno di un oggetto (black box)

```javascript
const contoCorrente = () => {
    let saldo = 0;
    let modificaSaldo = (ammontare) => {
        return saldo += ammontare;
    }

    const deposita50 = () => modificaSaldo(50);
    const preleva50 = () => modificaSaldo(-50);
    const leggiSaldo = () => saldo;

    return {deposita50, preleva50, leggiSaldo}
}

let mioConto = contoCorrente();

mioConto.deposita50();
mioConto.deposita50();
mioConto.preleva50();
mioConto.deposita50();
console.log(mioConto.leggiSaldo());
```
