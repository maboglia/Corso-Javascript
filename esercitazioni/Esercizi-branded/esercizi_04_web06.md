---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---


Mauro Bogliaccino

# Corso di programmazione Javascript

---


## Esercizio - Crea una lista puntata da un oggetto

Scrivi una funzione createTree che crea una lista ul/li annidata partendo dall'oggetto annidato.

---


Ad esempio:

```javascript
let data = {
    "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
        "apple tree": {},
      "magnolia": {}
    }
  }
};
```

---


La sintassi:

```javascript
let container = document.getElementById('container');
createTree(container, data); 
```
---


Il risultato (l'albero) dovrebbe somigliare a questo:

    Fish
        trout
        salmon
    Tree
        Huge
            sequoia
            oak
        Flowering
            apple tree
            magnolia

---


Scegli uno dei due metodi per risolvere la task:

* Crea l'HTML per l'albero e assegnala a container.innerHTML.
* Crea i nodi dell'albero e appendili utilizzando i metodi del DOM.

---


Sarebbe grandioso se riuscissi con entrambi :)

P.S. L'albero non dovrebbe avere elementi extra ad esempio `<ul></ul>` vuoti come foglie.
