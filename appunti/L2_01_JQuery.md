# Jquery è una libreia Javascript

* write less, do more
* Jquery è un Framework che 
* permette di interagire col DOM (Document Object Model) di una pagina HTML

---
## PRINCIPALI CARATTERISTICHE

* Cross browser ( supportato dai principali browser)
* Grande community = Grande disponibilità di plugin
* Leggero (opinabile...)
* Documentazione chiara e completa
* Semplice
* Utilizza selettori CSS (anche Css3 )
* Sintassi compatta, permette di ridurre la quantità di codice necessario rispetto all'uso di Javascript
* Può gestire tutti gli elementi che compongono una pagina web ( div, immagini, span, p ... )
---
### Utilizziamo la libreria javascript jQuery per:

* Partenza del codice quando il documento (il DOM) è pronto
* Selezionare gli elementi
  * selettori supportati: CSS2, CSS3, custom
* Accedere e modificare le classi CSS
* Gestire gli stili CSS
* Aggiungere e rimuovere contenuto e inserire elementi
* Ottenere l'elemento html
* Ottenere il testo contenuto nell'elemento
* Cambiare l'HTML e/o il testo contenuto
* Aggiungere nuovo contenuto ad un elemento esistente
* Gestire gli eventi
* Mostrare e nascondere elementi
* Aggiungere animazioni ed effetti
* Gestire le chiamate asincrone (AJAX)
* Creare e processare dati in JSON
---
## Partenza del codice quando il documento (il DOM) è pronto


```javascript

$(document).ready(function() {

//codice da eseguire al caricamento del documento

});

```
---

## INCLUDERE JQUERY NELLE PAGINE WEB

1. Scarichiamo l'ultima versione di Jquery dal sito `http://jquery.com/` il file avrà un nome nella forma jquery-x.x.-min.js
2. Per usarlo nelle nostre pagine web dobbiamo collegarlo alla nostra pagina web col tag `<script>...</script>` 

    `<html>`
    `<head>`
    `<script src="percorso/al/file/jquery-x.x.js"></script>`
    `</head>`
    `<body> ... </body>`
    `</html>`
---
## Filosofia Jquery

```javascript
//Seleziona questo elemento
$("p")
//Fai questa azione
.html("Hello World");
```

```javascript
$(document).ready(function(){
$("p").html("Hello World");
}
```

---
## Oggetto jQuery() $()

* jQuery() oppure $() Permette di selezionare e creare elementi del DOM Può avere come parametro:
* Selettore CSS $("p.evidenziato") Restituisce un array di oggetti, eventualmente vuoto
* Oggetti javascript $(this.value) Restituisce un array di oggetti contenente l’elemento passato come parametro
* Codice HTML $("Ciao Mondo")      Crea un elemento del DOM e restituisce un array di oggetti contenente l’elemento appena creato
---
## Operazione sugli oggetti selezionati/creati

Navigazione del DOM

$(selettore).children([selettore]) figli diretti dell'insieme selezionato
$(selettore).next() elemento successivo a quello selezionato
$(selettore).parent([selettore]) padre dell'elemento selezionato
$(selettore).parents([selettore])
$(selettore).find(selettore)


Manipolazione del DOM|metodi disponibili
---|---
Inserire elementi|after, append, before, prepend, html, text, wrap, clone, value
Cancellare elementi|empty, remove, removeAttr
Modifica elementi|attr, addClass, removeClass, toggleClass, css, hide, show, toggle
---

## Operazione sugli oggetti creati

* Concatenazione operazioni
* E' possibile concatenare più azioni su uno stesso selettore,
* se le operazioni precedenti non alterano l'insieme di oggetti restituiti dal selettore.

* nasconde tutti gli elementi di classe invisibile e aggiunge la classe sparito

`$(.invisibile).hide().addClass("sparito")`

* crea un immagine con attributo src="img/test.jpg", di classe logo e la appende al div con id principale

`$("").attr("src","img/test.jpg").addClass("logo").appendTo("div#principale")`
---
## Operazione sugli oggetti selezionati/creati

* Concatenazione Avanzata .end()
* NB: alcune funzioni alterano l'insiemi di oggetti restituiti dal selettore

selettore|descrizione
---|---
`$(div p:first)`|Seleziona il primo paragrafo di ogni DIV
`.addClass("primoParagrafo")`|Aggiunge la classe primoParagrafo
`.find("a:first")`|Seleziona il primo link del primo Paragrafo di ogni div
`.text("primo link")`|Modifica il testo in "primo link"
`Ritorna alla selezione precedente (primo`
`.css("border","solid 5px");`|Modifica lo stile del bordo

---

## Prossimo argomento

[JQuery_selettori](100_github/appunti/L2_02_JQuery_selettori.md)