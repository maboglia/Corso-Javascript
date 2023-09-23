
## Stampare una single-linked list

importanza: 5

Ipotizziamo di avere una single-linked list:

```javascript

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

```

* Scrivete una funzione printList(list) che ritorna gli elementi uno ad uno.
* Create due varianti della soluzione: iterativa e ricorsiva.
* Qual’è la migliore: ricorsione o senza?


## Soluzione iterativa

La soluzione iterativa:

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);
```

Da notare l’utilizzo di una variabile temporanea tmp per attraversare la lista. Tecnicamente, potremmo utilizzare list:

```javascript
function printList(list) {

  while(list) {
    alert(list.value);
    list = list.next;
  }

}
```

Ma potrebbe portare ad errori. In futuro potremmo voler estendere una funzione, fare qualcos altro con la lista. Se modifichiamo list, perderemmo questa capacità.

Parlando della scelta dei nomi delle variabili, list è la lista stessa. Il primo elemento. E dovrebbe rimanere tale.

D’altra parte, l’utilizzo di tmp ha esclusivamente lo scopo di attraversare la lista, come i nel caso di cicli for.

---

## Soluzione ricorsiva

La variante ricorsiva di printList(list) segue una semplice logica: per stampare una lista dovremmo stampare l’elemento corrente list, e fare lo stesso per list.next:

```javascript
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {

  alert(list.value); // output the current item

  if (list.next) {
    printList(list.next); // do the same for the rest of the list
  }

}

printList(list);
```

In questo caso qual’è la soluzione migliore?

Tecnicamente, la soluzione iterativa è più efficace. Queste due varianti portano allo stesso risultato, ma il ciclo non spende risorse aggiuntive per le chiamate annidate.

D’altra parte, la soluzione ricorsiva è più breve e talvolta più semplice da capire.
