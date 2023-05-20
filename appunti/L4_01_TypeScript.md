# TypeScript

## Installa Node.js

`https://nodejs.org/en/download`

## Verifica la versione

* `node -v`
* `npm -v`
* Aggiorna npm `npm install -g npm@latest`

## Installa TypeScript
`npm install -g typescript`

## Verifica la versione
`tsc --version`

## Crea una dir e accedi
`mkdir typescript_01`
`cd typescript_01`

---

## Hello TypeScript

crea il file main.ts

```javascript
function saluta(msg) {
    console.log(msg);
}
var saluto = 'Hello TypeScript';
saluta(saluto);
```
salva ed esegui il comando
`tsc main.ts`
verrà prodotto il file main.js
esegui con node
`node main.js`

---


## TypeScript è javascript con i _tipi_ (di dato)
```javascript
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [2,4,6];
let f: any[] = [true, false, 1, 2, 'ciao'];
```

## Costanti (ES6)

`const IVA_22 = 0.22;`
`const IVA_04 = 0.04:`
`const IVA_10 = 0.10;`

---


## enumerazioni
`enum Imposte {IVA_04, IVA_10, IVA_22};`
`Imposte.IVA_04`

## Asserzioni
```javascript
let msg;
msg = 'Hello';
let finale = (<string>message).endsWith('lo');
let finaleAlternativo = (message as string).endsWith('lo');
```
