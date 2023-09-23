---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---
![bg contain](./ITS_BG_Slide.jpg)

Mauro Bogliaccino

# Corso di programmazione Javascript

---
![bg contain](./ITS_BG_Slide.jpg)

## Esercizio - Crea una lista puntata da un oggetto

Scrivi una funzione createTree che crea una lista ul/li annidata partendo dall'oggetto annidato.

---
![bg contain](./ITS_BG_Slide.jpg)

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
![bg contain](./ITS_BG_Slide.jpg)

La sintassi:

```javascript
let container = document.getElementById('container');
createTree(container, data); 
```
---
![bg contain](./ITS_BG_Slide.jpg)

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
![bg contain](./ITS_BG_Slide.jpg)

Scegli uno dei due metodi per risolvere la task:

* Crea l'HTML per l'albero e assegnala a container.innerHTML.
* Crea i nodi dell'albero e appendili utilizzando i metodi del DOM.

---
![bg contain](./ITS_BG_Slide.jpg)

Sarebbe grandioso se riuscissi con entrambi :)

P.S. L'albero non dovrebbe avere elementi extra ad esempio `<ul></ul>` vuoti come foglie.
