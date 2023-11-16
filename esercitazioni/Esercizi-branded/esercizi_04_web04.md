---
marp: false
title: Corso di programmazione Javascript
paginate: true
author: mauro
---


Mauro Bogliaccino

# Corso di programmazione Javascript

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

