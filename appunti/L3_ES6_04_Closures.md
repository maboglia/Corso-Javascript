# ES6 - EcmaScript 2015

## Closures

Le funzioni in JavaScript formano closures. Una closure è la combinazione di una funzione e dell'ambito lessicale in cui questa funzione è stata dichiarata. 

Una closure è unpo speciale tipo di oggetto che combina due cose: una funzione e l'ambito in cui questa è stata creata. L'ambito consiste in qualsiasi variabile locale che era nel suo scope nel momento in cui la closure è stata creata.

Le closures permettono la creazione di 
* factory functions
* incapsulamento

---

## Function factory

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
