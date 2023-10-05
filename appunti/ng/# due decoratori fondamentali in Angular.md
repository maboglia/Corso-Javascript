# due decoratori fondamentali in Angular

`@Input()` e `@Output()` sono due decoratori fondamentali in Angular che consentono la comunicazione tra componenti genitori e figli. 

**@Input() - Comunicazione da genitore a figlio:**

Supponiamo di avere un componente genitore chiamato `ParentComponent` e un componente figlio chiamato `ChildComponent`. Vogliamo passare un valore dalla proprietà del componente genitore alla proprietà del componente figlio utilizzando `@Input()`.

**Passo 1: Definizione del Componente Genitore (ParentComponent)**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child [message]="parentMessage"></app-child>
  `,
})
export class ParentComponent {
  parentMessage = 'Messaggio dal genitore al figlio';
}
```

**Passo 2: Definizione del Componente Figlio (ChildComponent)**

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: '<p>Figlio dice: {{ message }}</p>',
})
export class ChildComponent {
  @Input() message: string;
}
```

In questo esempio, stiamo utilizzando l'annotazione `@Input()` nel componente figlio per indicare che la proprietà `message` può essere passata dal componente genitore. Il componente genitore passa il valore attraverso il binding dell'attributo `[message]` nell'elemento del componente figlio.

**@Output() - Comunicazione da figlio a genitore:**

Ora, supponiamo che vogliamo inviare un messaggio dal componente figlio al componente genitore utilizzando `@Output()`.

**Passo 1: Definizione del Componente Genitore (ParentComponent)**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child (messageEvent)="receiveMessage($event)"></app-child>
    <p>Genitore dice: {{ message }}</p>
  `,
})
export class ParentComponent {
  message: string;

  receiveMessage($event: string) {
    this.message = $event;
  }
}
```

**Passo 2: Definizione del Componente Figlio (ChildComponent)**

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>
    <button (click)="sendMessage()">Invia Messaggio al Genitore</button>
  `,
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Messaggio dal figlio al genitore');
  }
}
```

In questo esempio, il componente figlio utilizza l'annotazione `@Output()` per dichiarare l'evento `messageEvent`. Quando viene cliccato il pulsante nel componente figlio, viene emesso l'evento con il messaggio specificato. Il componente genitore cattura questo evento utilizzando l'output binding `(messageEvent)="receiveMessage($event)"` e chiama il metodo `receiveMessage($event)` per gestire il messaggio ricevuto.

In sintesi, `@Input()` consente al componente genitore di passare dati al componente figlio, mentre `@Output()` consente al componente figlio di emettere eventi che possono essere catturati dal componente genitore. Questi decoratori sono fondamentali per la comunicazione efficace tra componenti in Angular.