---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---


Mauro Bogliaccino

# Corso di programmazione Javascript

---



## Esercizio - Cattura i collegamenti (link) nell'elemento

Fate in modo che tutti i link dentro l'elemento con `id="contents"` chiedano all'utente se vuole davvero abbandonare la pagina al click. 
Se risponde no, allora non deve seguire il link.

---


Dettagli:

* L'HTML dentro l'elemento potrebbe essere caricato o rigenerato in qualunque istante, quindi non possiamo trovare tutti i links ed inserirvi dei gestori all'interno. Utilizzare invece la event delegation.
* Il contenuto può contenere tags annidati. Anche dentro i links, per esempio potremmo avere `<a href=".."><i>...</i></a>`.

