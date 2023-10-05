# esempi di codice: componenti, moduli, template e direttive, e databinding.

**Componenti:**

Supponiamo di voler creare un'app con un componente "Saluto" che visualizza un messaggio di saluto.

**SalutoComponent.ts (Componente)**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-saluto',
  template: '<p>Ciao! Benvenuto nella nostra applicazione.</p>',
})
export class SalutoComponent { }
```

**Moduli:**

Possiamo creare un modulo per raggruppare e organizzare i componenti dell'app.

**app.module.ts (Modulo)**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SalutoComponent } from './saluto.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, SalutoComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

**Template e Direttive:**

Aggiungiamo una direttiva per visualizzare dinamicamente il nome dell'utente nel template.

**app.component.ts (Componente)**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Benvenuto {{ userName }}!</h1>
    <app-saluto></app-saluto>
  `,
})
export class AppComponent {
  userName = 'Utente';
}
```

**Databinding:**

Utilizziamo il databinding per associare dinamicamente il nome dell'utente e il messaggio di saluto.

**app.component.html (Template)**

```html
<h1>Benvenuto {{ userName }}!</h1>
<app-saluto></app-saluto>
```

In questo esempio, abbiamo mostrato l'utilizzo dei componenti, dei moduli, dei template e delle direttive, nonché il databinding. I componenti rappresentano blocchi di interazione dell'interfaccia utente, i moduli organizzano le diverse parti dell'app, i template contengono il markup HTML e le direttive sono istruzioni per manipolare il DOM. Il databinding collega dinamicamente i dati tra il codice TypeScript e il template HTML.

## double data-binding

Sì, Angular supporta il double data-binding. Tuttavia, è importante notare che nel contesto di Angular, il termine "databinding bidirezionale" è spesso associato all'uso della direttiva `[(ngModel)]`, che consente di sincronizzare automaticamente i dati tra il modello (componente) e la vista (template). Questo tipo di databinding è anche noto come "banana in a box" per via della doppia parentesi quadra che circonda `ngModel`.

Ecco un esempio di utilizzo di `[(ngModel)]` per ottenere il double data-binding:

**app.component.ts (Componente)**

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Benvenuto {{ userName }}!</h1>
    <input [(ngModel)]="userName" placeholder="Inserisci il tuo nome">
  `,
})
export class AppComponent {
  userName = 'Utente';
}
```

In questo esempio, stiamo utilizzando `[(ngModel)]` per collegare bidirezionalmente il valore dell'input con la proprietà `userName` nel componente. Quando l'utente inserisce un nome nell'input, il valore di `userName` nel componente viene aggiornato automaticamente. Viceversa, se il valore di `userName` nel componente viene modificato, l'input nel template verrà aggiornato in modo sincronizzato.

Tuttavia, per utilizzare `[(ngModel)]`, è necessario importare il modulo `FormsModule` nel modulo della tua applicazione e aggiungerlo all'array `imports`. Ad esempio:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule], // Aggiungi FormsModule qui
  bootstrap: [AppComponent],
})
export class AppModule { }
```

Da notare che, a partire da Angular 7, è necessario importare `FormsModule` da `@angular/forms`, mentre in versioni precedenti era importato da `@angular/core`.


Ecco degli esempi di codice per ciascun concetto richiesto: servizi, iniezione di dipendenze, routing e navigazione, e form con validazione.

**Servizi:**

Creiamo un servizio `UserService` per gestire le operazioni relative agli utenti.

**user.service.ts (Servizio)**

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: string[] = ['Alice', 'Bob', 'Charlie'];

  addUser(user: string) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}
```

**Iniezione di Dipendenze:**

Ora utilizzeremo il servizio `UserService` in un componente.

**app.component.ts (Componente)**

```typescript
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Utenti</h1>
    <ul>
      <li *ngFor="let user of users">{{ user }}</li>
    </ul>
    <input [(ngModel)]="newUser" placeholder="Aggiungi un nuovo utente">
    <button (click)="addUser()">Aggiungi</button>
  `,
})
export class AppComponent {
  users: string[] = [];
  newUser: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser() {
    if (this.newUser.trim() !== '') {
      this.userService.addUser(this.newUser);
      this.newUser = '';
      this.users = this.userService.getUsers();
    }
  }
}
```

**Routing e Navigazione:**

Creiamo una pagina di dettaglio per visualizzare ulteriori informazioni sugli utenti.

**app-routing.module.ts (Modulo di Routing)**

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'user/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
```

**user-details.component.ts (Componente Dettagli Utente)**

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-details',
  template: '<p>Dettagli per l\'utente {{ userId }}: {{ userDetails }}</p>',
})
export class UserDetailsComponent implements OnInit {
  userId: number;
  userDetails: string;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.userDetails = this.userService.getUsers()[this.userId];
  }
}
```

**Form e Validazione:**

Creiamo un modulo di registrazione utente con validazione.

**registration-form.component.ts (Componente Modulo di Registrazione)**

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  template: `
    <h2>Registrazione Utente</h2>
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <label for="username">Nome utente:</label>
      <input type="text" id="username" formControlName="username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" formControlName="email" required>

      <button type="submit" [disabled]="registrationForm.invalid">Registrati</button>
    </form>
  `,
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Dati inviati:', this.registrationForm.value);
    }
  }
}
```

In questo esempio, abbiamo visto come creare un servizio, utilizzare l'iniezione di dipendenze per accedervi, implementare il routing e la navigazione tra le pagine, e creare un modulo di registrazione utente con validazione utilizzando il modulo `ReactiveFormsModule`. Questi sono concetti fondamentali in Angular per la gestione dei dati, la navigazione e la creazione di form interattivi.


Ecco un altro esempio di come utilizzare il `ReactiveFormsModule` per creare un modulo di registrazione utente con validazione.

**registration-form.component.ts (Componente Modulo di Registrazione)**

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  template: `
    <h2>Registrazione Utente</h2>
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="username">Nome utente:</label>
        <input type="text" id="username" class="form-control" formControlName="username">
        <div *ngIf="registrationForm.get('username').invalid && registrationForm.get('username').touched"
             class="text-danger">Nome utente è obbligatorio.
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" class="form-control" formControlName="email">
        <div *ngIf="registrationForm.get('email').invalid && registrationForm.get('email').touched"
             class="text-danger">Inserisci un'email valida.
        </div>
      </div>

      <button type="submit" class="btn btn-primary" [disabled]="registrationForm.invalid">Registrati</button>
    </form>
  `,
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Dati inviati:', this.registrationForm.value);
    }
  }
}
```

In questo esempio, stiamo utilizzando il `ReactiveFormsModule` per creare un modulo di registrazione utente. Stiamo validando il nome utente come "obbligatorio" e l'email come "obbligatoria" e "valida". Nel template, utilizziamo le direttive `formControlName` per collegare i controlli del modulo alla definizione dei controlli nel codice. Inoltre, stiamo mostrando i messaggi di errore solo quando il controllo è stato toccato e non è valido.

Questo esempio mostra come il `ReactiveFormsModule` semplifica la gestione dei form complessi, la validazione e la visualizzazione dei messaggi di errore associati.
