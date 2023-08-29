# To-Do List con Angular

Ecco un'introduzione ad Angular sviluppando una semplice applicazione "To-Do List" (lista delle cose da fare). 
Questo ti darà un'idea di come iniziare con Angular creando una piccola app pratica

---

## Passo 1: Preparazione dell'ambiente

1. Assicurati di avere Node.js installato sul tuo computer.
2. Installa Angular CLI eseguendo il seguente comando nel terminale:

   ```
   npm install -g @angular/cli
   ```

---

## Passo 2: Creazione del Progetto

1. Apri il terminale e vai nella cartella dove vuoi creare il tuo progetto.
2. Esegui il comando per creare un nuovo progetto Angular:

   ```
   ng new todo-app
   ```

---

## Passo 3: Creazione del Componente To-Do

1. Vai nella cartella del progetto:

   ```
   cd todo-app
   ```

2. Crea un nuovo componente chiamato `todo`:

   ```
   ng generate component todo
   ```

---

## Passo 4: Codifica del Componente To-Do

Apri il file `src/app/todo/todo.component.html` e inserisci il seguente codice HTML:

```html
<h2>To-Do List</h2>

<input [(ngModel)]="newTask" (keyup.enter)="addTask()" placeholder="Add a new task">

<ul>
  <li *ngFor="let task of tasks">{{ task }}</li>
</ul>
```

Apri il file `src/app/todo/todo.component.ts` e inserisci il seguente codice TypeScript:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
}
```

---

## Passo 5: Aggiunta del Componente al Template Principale

Apri il file `src/app/app.component.html` e sostituisci tutto il contenuto con il seguente codice:

```html
<div style="text-align:center">
  <h1>Welcome to To-Do App!</h1>
  <app-todo></app-todo>
</div>
```

---

## Passo 6: Esecuzione dell'App

1. Assicurati di essere nella cartella principale del progetto.
2. Esegui l'app Angular con il seguente comando:

   ```
   ng serve
   ```

3. Apri il tuo browser e visita `http://localhost:4200`. Dovresti vedere l'app To-Do List in azione!

In questa introduzione, hai creato un'app To-Do List semplice utilizzando Angular. Hai imparato a creare un componente, utilizzare il two-way data binding per gestire gli input dell'utente e utilizzare un ciclo `*ngFor` per visualizzare le attività nella lista. Puoi estendere ulteriormente questa app aggiungendo funzionalità come la possibilità di completare e rimuovere le attività, migliorando la visualizzazione e aggiungendo stili con CSS.
