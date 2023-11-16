---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---


Mauro Bogliaccino

# Corso di programmazione Javascript

---


## Esercizio - Controlla i form di registrazione

---


Creare una pagina web con un form di registrazione, ed effettuare tutti i controlli:

* il nome e cognome non devono essere numerici
* l'età e cap devono essere numerici
* indirizzo può contenere numeri
* mail deve essere valida

In caso di errore, si deve visualizzare una finestra con l'elenco degli errori e, al click su OK, si deve chiudere la finestra di errore e ricaricare quella di inserimento

---


## Esercizio - Aggiungi un option ad una select

---


Abbiamo una select `<select>`:

```javascript
<select id="genres">
  <option value="rock">Rock</option>
  <option value="blues" selected>Blues</option>
</select>
```

---


Utilizza JavaScript per:

* Mostrare il valore ed il testo dell'opzione selezionata.
* Aggiungere un opzione: `<option value="classic">Classic</option>`.
* Selezionarla.

Nota, se hai fatto tutto giusto, l'alert dovrebbe mostrare blues.


---


## Esercizio - Galleria di immagini

Crea una galleria di immagini dove l'immagine principale cambi al click su una thumbnail. Mostra un elenco di thumbnail, possibilmente scorrevole, mostrate in orizzontale sotto l'immagine principale.

---


## Esercizio - Perché "return false" non funziona?

Perché nel seguente codice return false non funziona?

---


```javascript
<script>
  function handler() {
    alert( "..." );
    return false;
  }
</script>
```

`<a href="https://w3.org" onclick="handler()">il browser andrà su w3.org</a>`

---


Il browser navigherà verso all'URL al click, ma non è ciò che vogliamo.

Come si può sistemare?

---


## Esercizio - Cattura i collegamenti (link) nell'elemento

Fate in modo che tutti i link dentro l'elemento con `id="contents"` chiedano all'utente se vuole davvero abbandonare la pagina al click. 
Se risponde no, allora non deve seguire il link.

---


Dettagli:

* L'HTML dentro l'elemento potrebbe essere caricato o rigenerato in qualunque istante, quindi non possiamo trovare tutti i links ed inserirvi dei gestori all'interno. Utilizzare invece la event delegation.
* Il contenuto può contenere tags annidati. Anche dentro i links, per esempio potremmo avere `<a href=".."><i>...</i></a>`.

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

---


## Esercizio - Mostra i discendenti dentro a un albero

C'è un albero organizzato come `ul/li` annidati.

Scrivi il codice che aggiunge a ogni `<li>` il numero dei suoi discendenti. Salta le foglie (i nodi senza figli).

---


    Animals [9]
        Mammals [4]
            Cows
            Donkeys
            Dogs
            Tigers
        Other [3]
            Snakes
            Birds
            Lizards
    Fishes [5]
        Aquarium [2]
            Guppy
            Angelfish
        Sea [1]
            Sea trout
---


## Esercizio - Inserisci l'HTML nella lista

Scrivi il codice per inserire` <li>2</li><li>3</li>` tra i due `<li>` sotto:

```html
<ul id="ul">
  <li id="one">1</li>
  <li id="two">4</li>
</ul>
```

---


## Esercizio - Ordina la tabella

Data la seguente tabella:

---


```html
<table>
<thead>
  <tr>
    <th>Name</th><th>Surname</th><th>Age</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>John</td><td>Smith</td><td>10</td>
  </tr>
  <tr>
    <td>Pete</td><td>Brown</td><td>15</td>
  </tr>
  <tr>
    <td>Ann</td><td>Lee</td><td>5</td>
  </tr>
  <tr>
    <td>...</td><td>...</td><td>...</td>
  </tr>
</tbody>
</table>
```

---



Scrivi il codice per ordinare la tabella in base alla colonna "name" (prima colonna).
