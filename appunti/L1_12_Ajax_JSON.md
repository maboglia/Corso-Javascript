## Ajax

AJAX (Asynchronous JavaScript And XML), è una tecnica di sviluppo web per creare applicazioni interattive. Con AJAX è possibile realizzare cambi sulle pagine senza necesità di recaricarle completamente, migliorando la interattività, velocità e usabilità nelle applicazioni. 

---

### Fonte: https://en.wikipedia.org/wiki/AJAX 

---

### Esempio

```javascript
var ajax=new XMLHttpRequest()
ajax.open('get',url)
ajax.onload=function(){}
ajax.send()
```

---

## JSON

* JSON, acronimo di JavaScript Object Notation, è un formato leggero per lo scambio di dati.
* JSON è un sottotipo della notazione literal di oggetti di JavaScript che non richiede l'uso di XML.
* Fonte: https://en.wikipedia.org/wiki/JSON 

---

### Oggetti JS e oggetti JSON

* Sono disponibili due metodi per la transformazione tra JSON e Oggetti di JavaScript.

* `JSON.stringify(obj)` Oggetto -> JSON
* Ritorna una stringa in formato JSON corrispondente ad un valore specificato.

* `JSON.parse(obj)` JSON -> Oggetto
* Interpreta una stringa in formato JSON e ritorna il suo oggetto corrispondente.

---

### Per esempio

```json
{"menu": {
        "id": "file",
        "value": "File",
        "popup": {
            "menuitem": [
                {"value": "New", "onclick": "CreateNew()"},
                {"value": "Open", "onclick": "Open()"},
                {"value": "Close", "onclick": "Close()"}
            ]
        }
    }
}
```

---