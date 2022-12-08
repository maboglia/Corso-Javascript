---
marp: false
title: Fondamenti
paginate: true
author: mauro
---

![bg contain](./background-IL.jpg)

Mauro Bogliaccino

# Corso Javascript


---
![bg contain](./background-IL.jpg)

## Stampare una single-linked list

---
![bg contain](./background-IL.jpg)

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

---
![bg contain](./background-IL.jpg)

* Scrivi una funzione `printList(list)` che ritorna gli elementi uno ad uno, in console o in un alert box.
* Crea due varianti della soluzione: iterativa e ricorsiva.