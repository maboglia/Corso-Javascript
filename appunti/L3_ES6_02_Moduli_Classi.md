# ES6 - EcmaScript 2015

## Moduli

La possibilità di spezzare il codice in diversi file ed importarli all'interno di altri

Si possono esportare variabili, costanti, classi, [arrow]functions ...

```javascript

//file topPlayers.js, p.es. nella stessa cartella del file index.js
const topPlayers = ['Federer', 'Nadal', 'Djokovic'];
export { topPlayers }; 
//per esportare più proprietà, separo args con la virgola

//file index.js, p.es. nella stessa cartella del file topPlayers.js
import { topPlayers } from './topPlayers' //senza estensione!!
console.log(topPlayers);

```
---

```javascript

//operazioni.js
const addizione = (a, b) => a+b;
const moltiplicazione = (a, b) => a*b;

export {addizione, moltiplicazione};

//index.js
import {addizione, moltiplicazione} from './operazioni';

console.log(addizione(2,3));
console.log(moltiplicazione(3,4));
```
---

## Classi

### Definizione e uso

```javascript
//1
class Auto {
    //2
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }
    //5
    libretto(){
        console.log(`Automobile marca: ${this.marca}, 
            modello: ${this.modello}`);
        
    }
}
//3
const panda = new Auto('Fiat','Panda');
//4
console.log(panda);
//6
panda.libretto();
```
---

### Ereditarietà (e modularizzazione)

potremmo scrivere tutto su un unico file, ma possiamopiù opportunamente suddividere il codice su moduli autorappresentativi, più facilmente condivisibili e gestibili

```javascript
//file Auto.js

//1
class Auto {
    //2
    constructor(marca, modello){
        this.marca = marca;
        this.modello = modello;
    }
    //5
    libretto(){
        console.log(`Automobile marca: ${this.marca}, modello: ${this.modello}`);
        
    }
}

export default Auto; //clausola default

//file: Utilitaria.js, importiamo Auto
import Auto from './Auto'; 
//con un export default ometto le graffe quando importo 
//1 estendiamo Auto
class Utilitaria extends Auto {
//2
    constructor(marca, modello, colore){
        //3
        super(marca, modello);
        this.colore = colore;
    }

}
const panda = new Utilitaria('Fiat','Panda', 'Blu);

```
---

## static methods

```javascript
class Calcolatrice{
    static addizione(a,b){
        return a+b;
    }
} 
//il metodo static lo richiamo sulla classe, senza creare un oggetto
console.log(Calcolatrice.addizione(7,8));

```
---

## Classi e prototype

Javascript è un linguaggio (di scripting) orientato agli oggetti e basato sui prototipi

Con i prototipi è possibile estendere proprietà e metodi della classe base, senza la necessità di ridefinirne il blocco di codice

Prima della keyword class, si usava la function per creare i tipi
Per esempio 
```javascript
function Auto(marca, modello) {
    this.marca = marca;
    this.modello = modello;
    //arrow e interpolazione funzionano!
    this.libretto = () => `Auto ${this.marca} ${this.modello} `;
}
 
//modifico la funzione/classe accedendo al prototipo
Auto.prototype.colore = "Rosso";
//in questo caso la lambda expression NON FUNZIONA
AUto.prototype.libretto = () => `${this.marca}`;
//this non è definito correttamente, 
//occorre usare una funzione anonima 'tradizionale'

```
