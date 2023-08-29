# Introduzione a TypeScript

TypeScript è un linguaggio di programmazione open-source sviluppato da Microsoft che estende e migliora JavaScript aggiungendo un sistema di tipizzazione statica e altre caratteristiche avanzate per la scrittura di applicazioni web e di altro tipo. È spesso definito come un "superset" di JavaScript, il che significa che qualsiasi codice JavaScript valido è anche codice TypeScript, ma TypeScript offre funzionalità aggiuntive che lo rendono potente e sicuro.

---

**Caratteristiche Principali:**

1. **Tipizzazione Statica:** Una delle caratteristiche distintive di TypeScript è il suo sistema di tipizzazione statica. Puoi dichiarare i tipi di variabili, parametri di funzione e valori di ritorno delle funzioni, il che aiuta a prevenire molti errori comuni durante la fase di sviluppo.

2. **Orientamento agli Oggetti:** TypeScript supporta l'orientamento agli oggetti con la definizione di classi, interfacce e ereditarietà. Questo lo rende adatto per la creazione di applicazioni complesse e ben strutturate.

3. **Supporto ES6/ES7:** TypeScript è progettato per supportare le nuove funzionalità introdotte in ECMAScript 6 (ES6) e versioni successive, rendendo più semplice l'utilizzo delle ultime funzionalità di JavaScript.

4. **Compilazione:** TypeScript non viene eseguito direttamente nei browser o nell'ambiente Node.js. Deve essere compilato in JavaScript standard prima di essere eseguito. Questo processo di compilazione consente di utilizzare funzionalità avanzate di TypeScript mentre si genera codice JavaScript compatibile.

5. **Tooling Avanzato:** Grazie alla tipizzazione statica, gli strumenti di sviluppo, come editor e IDE, possono fornire suggerimenti intelligenti, completamenti automatici e rilevamento di errori durante la scrittura del codice.

6. **Generics:** TypeScript supporta i generics, che consentono di creare componenti riutilizzabili che possono lavorare con diversi tipi di dati.

---

**Come Iniziare:**

Per iniziare con TypeScript, segui questi passaggi:

1. **Installazione:** Installa TypeScript tramite npm (Node Package Manager) utilizzando il seguente comando: `npm install -g typescript`.

2. **Creazione di un File TypeScript:** Crea un file con estensione `.ts` per scrivere il codice TypeScript.

3. **Scrittura del Codice:** Scrivi il tuo codice TypeScript, dichiarando i tipi, definendo classi e utilizzando le funzionalità avanzate del linguaggio.

4. **Compilazione:** Compila il tuo codice TypeScript in JavaScript utilizzando il comando `tsc nomefile.ts`. Verrà generato un file JavaScript corrispondente.

5. **Esecuzione:** Esegui il file JavaScript generato con il tuo interprete JavaScript preferito (ad esempio, il browser o Node.js).

**Conclusioni:**

TypeScript è una scelta eccellente per gli sviluppatori che desiderano sfruttare i vantaggi della tipizzazione statica e delle caratteristiche avanzate del linguaggio mentre lavorano su progetti JavaScript. La sua capacità di migliorare la qualità del codice, prevenire errori e semplificare la manutenzione del software lo rende un'opzione popolare per lo sviluppo di applicazioni moderne e complesse.

---

## la tipizzazione statica in TypeScript

La tipizzazione statica è una delle caratteristiche chiave di TypeScript che lo distingue da JavaScript. In JavaScript, i tipi delle variabili sono determinati dinamicamente durante l'esecuzione del programma, il che può portare a errori difficili da individuare. In TypeScript, invece, i tipi vengono definiti durante la fase di scrittura del codice e vengono controllati staticamente dal compilatore prima dell'esecuzione del programma. Questo aiuta a individuare errori di tipo prima che il codice venga eseguito, contribuendo a migliorare la robustezza e la qualità del software.

Ecco alcune delle principali caratteristiche della tipizzazione statica in TypeScript:

**1. Dichiarazione dei Tipi:**
In TypeScript, puoi dichiarare il tipo di una variabile, parametro di funzione o valore di ritorno di una funzione utilizzando la sintassi `: tipo`. Ad esempio:

```typescript
let nome: string = "Alice";
let eta: number = 30;
```

---

**2. Errori di Tipo:**
Se provi ad assegnare un valore di tipo diverso da quello dichiarato, il compilatore TypeScript emetterà un errore. Questo aiuta a identificare errori di tipo durante la fase di sviluppo.

**3. Inferenza dei Tipi:**
TypeScript è in grado di inferire il tipo delle variabili basandosi sui valori assegnati. Se non specifici il tipo esplicitamente, TypeScript dedurrà il tipo in base al valore iniziale. Ad esempio:

```typescript
let messaggio = "Ciao, mondo!"; // TypeScript inferisce il tipo string
```

**4. Union Types e Type Aliases:**
Puoi creare tipi che possono essere di più tipi diversi usando l'operatore di unione (`|`). Inoltre, puoi utilizzare gli alias dei tipi per rendere il codice più leggibile. Ad esempio:

```typescript
type NumeroOStringa = number | string;
let valore: NumeroOStringa = 42;
```

---

**5. Tipi Personalizzati:**
È possibile definire tipi personalizzati utilizzando le interfacce e le classi, che aiutano a creare strutture complesse e riutilizzabili.

**6. Migliore Manutenibilità:**
La tipizzazione statica aiuta a migliorare la manutenibilità del codice. Fornisce documentazione automatica sulle aspettative di input e output delle funzioni, semplificando la comprensione del codice da parte degli sviluppatori.

**7. Strumenti di Sviluppo Migliorati:**
Gli editor e gli IDE possono fornire suggerimenti, completamenti automatici e rilevamento degli errori in tempo reale grazie alle informazioni di tipo fornite dal codice TypeScript.

In generale, la tipizzazione statica di TypeScript consente di identificare in anticipo errori di tipo, rendendo il processo di sviluppo più sicuro e efficiente. Mentre l'aggiunta di tipi può richiedere un po' più di tempo durante la scrittura iniziale, può risparmiare molto tempo nelle fasi di debug e manutenzione.

---

## La programmazione orientata agli oggetti

La programmazione orientata agli oggetti (OOP) è una metodologia di progettazione del software che modella i concetti del mondo reale in termini di classi e oggetti. TypeScript supporta pienamente la programmazione orientata agli oggetti e offre molte delle caratteristiche tipiche di questo paradigma. Vediamo come funziona la programmazione orientata agli oggetti in TypeScript:

**Classi e Oggetti:**
In TypeScript, una classe è un modello per creare oggetti. Le classi definiscono le proprietà (variabili) e i metodi (funzioni) che gli oggetti avranno. Ecco un esempio semplice di definizione di una classe in TypeScript:

```typescript
class Persona {
  nome: string;
  eta: number;

  constructor(nome: string, eta: number) {
    this.nome = nome;
    this.eta = eta;
  }

  saluta() {
    console.log(`Ciao, sono ${this.nome} e ho ${this.eta} anni.`);
  }
}

let persona1 = new Persona("Alice", 30);
persona1.saluta(); // Output: Ciao, sono Alice e ho 30 anni.
```

---

**Ereditarietà:**
In TypeScript, è possibile creare una nuova classe che eredita le proprietà e i metodi da una classe esistente. Questo concetto è chiamato ereditarietà. La classe che eredita è chiamata sottoclasse o classe derivata, mentre la classe da cui si eredita è chiamata superclasse o classe base. Ecco un esempio di ereditarietà:

```typescript
class Studente extends Persona {
  matricola: string;

  constructor(nome: string, eta: number, matricola: string) {
    super(nome, eta);
    this.matricola = matricola;
  }

  presentati() {
    console.log(`Sono ${this.nome}, ho ${this.eta} anni e la mia matricola è ${this.matricola}.`);
  }
}

let studente1 = new Studente("Bob", 25, "12345");
studente1.presentati(); // Output: Sono Bob, ho 25 anni e la mia matricola è 12345.
```

---

**Incapsulamento:**
TypeScript supporta anche l'incapsulamento, che significa nascondere l'implementazione interna di una classe e fornire solo un'interfaccia pubblica per interagire con essa. Questo può essere realizzato attraverso i modificatori di accesso come `public`, `private` e `protected`.

```typescript
class Banca {
  private saldo: number;

  constructor(saldoIniziale: number) {
    this.saldo = saldoIniziale;
  }

  preleva(importo: number) {
    if (importo <= this.saldo) {
      this.saldo -= importo;
      console.log(`Hai prelevato ${importo}. Saldo rimanente: ${this.saldo}`);
    } else {
      console.log("Fondi insufficienti.");
    }
  }
}

let conto = new Banca(1000);
conto.preleva(500); // Output: Hai prelevato 500. Saldo rimanente: 500
```

Questi sono solo alcuni dei concetti fondamentali della programmazione orientata agli oggetti in TypeScript. Utilizzando classi, ereditarietà, incapsulamento e altre caratteristiche OOP, è possibile creare strutture complesse e organizzate per sviluppare applicazioni robuste e manutenibili.

---

## Installare TypeScript

## Installa Node.js

`https://nodejs.org/en/download`

## Verifica la versione node e npm

* `node -v`
* `npm -v`
* Aggiorna npm `npm install -g npm@latest`

## Installa TypeScript

`npm install -g typescript`

## Verifica la versione TypeScript

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

---

## TypeScript in Angular

Collegare TypeScript ad Angular è molto naturale, poiché Angular stesso è scritto principalmente in TypeScript. Angular è un framework JavaScript che utilizza TypeScript come linguaggio di programmazione principale per lo sviluppo delle applicazioni. Ecco come puoi collegare TypeScript ad Angular:

**1. Installazione di Angular CLI:**
Per iniziare con Angular, è necessario installare Angular CLI (Command Line Interface), che semplifica la creazione, la gestione e la compilazione dei progetti Angular. Puoi installarlo globalmente utilizzando il comando:

```bash
npm install -g @angular/cli
```

**2. Creazione di un Nuovo Progetto:**
Una volta installato Angular CLI, puoi creare un nuovo progetto Angular con il seguente comando:

```bash
ng new nome-del-progetto
```

Segui le istruzioni per configurare il progetto, come il routing, gli stili e altre opzioni.

**3. Struttura del Progetto:**
All'interno della struttura del progetto creato da Angular CLI, troverai i file TypeScript nella cartella `src/app`. Qui è dove scriverai gran parte del tuo codice TypeScript per le diverse parti dell'applicazione.

**4. Creazione di Componenti e Servizi:**
Usa il comando Angular CLI per generare componenti, servizi e altre parti dell'applicazione. Ad esempio:

```bash
ng generate component nome-componente
ng generate service nome-servizio
```

Questo creerà automaticamente i file TypeScript e gli altri file necessari per il componente o il servizio.

---

**5. Scrittura del Codice TypeScript:**
Ora puoi scrivere il tuo codice TypeScript all'interno dei file generati. Angular utilizza TypeScript per definire i componenti, i modelli, i servizi, le direttive e altro ancora.

**6. Compilazione e Avvio dell'Applicazione:**
Quando il codice TypeScript è pronto, puoi compilare l'applicazione utilizzando il seguente comando:

```bash
ng build
```

Questo compila il codice TypeScript in JavaScript e crea i file necessari per l'applicazione. Per avviare l'applicazione in modalità sviluppo, puoi usare:

```bash
ng serve
```

Questo avvierà un server locale e aprirà l'applicazione nel tuo browser.

In breve, collegare TypeScript ad Angular è abbastanza semplice, poiché TypeScript è il linguaggio di programmazione principale utilizzato all'interno del framework. Puoi scrivere il tuo codice TypeScript nei componenti, nei servizi e in altre parti dell'applicazione, e Angular si occuperà di compilare e gestire l'applicazione nel suo insieme.
