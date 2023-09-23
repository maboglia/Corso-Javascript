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


## Esercizio - Perché "return false" non funziona?

Perché nel seguente codice return false non funziona?

---
![bg contain](./ITS_BG_Slide.jpg)

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
![bg contain](./ITS_BG_Slide.jpg)

Il browser navigherà verso all'URL al click, ma non è ciò che vogliamo.

Come si può sistemare?

