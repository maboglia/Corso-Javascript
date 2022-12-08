---
marp: false
title: Fondamenti
paginate: true
author: mauro
---
![bg](./ITS_BG_Slide.jpg)

Mauro Bogliaccino

# Corso Javascript

## JQuery: manipolare il DOM

---
![bg](./ITS_BG_Slide.jpg)

# JQuery: manipolare il DOM

http://api.jquery.com/category/manipulation/

---
![bg](./ITS_BG_Slide.jpg)

## .css()

Possiamo gestire le regole css di un elemento attraverso la funzione .css

* sintassi: $("#elemento).css ( regola-css , valore);
* `$("#elemento").css("color", "red");`
* `$("#elemento").css("height", "100px");`
* `$("#elemento").css("border", "1px solid red");`
* `$("#elemento").css("background-color", "#ffcc90");`

---
![bg](./ITS_BG_Slide.jpg)

```javascript
//accorpare le regole in un oggetto
$("#elemento).css( {
regolaCss : "valore", //sintassi camelCase per la proprietà
regolaCss : "valore",
regolaCss : "valore" //l'ultimo lemento senza virgola
} );
```

---
![bg](./ITS_BG_Slide.jpg)

```javascript
//accorpare le regole in un oggetto
$("#elemento").css({ "color": "red",
"height" : "100px",
"border" : "1px solid red",
"background-color" : "#ffcc90"
});
```

---
![bg](./ITS_BG_Slide.jpg)


## ATTRIBUTI SET & GET

Con Jquery possiamo leggere e impostare i valori per ogni attributo del DOM, ad esempio:

* leggere e scrivere dinamicamente dentro un elemento p
* leggere e scrivere il contenuto di un input text 
* leggere e scrivere una proprietà CSS 

---
![bg](./ITS_BG_Slide.jpg)


## GETTERS

* `.html()`
* `.attr('id')`
* `.val()`
* `.width()`

---
![bg](./ITS_BG_Slide.jpg)


## SETTERS

* `.html('<p>ciao</p>)`
* `.attr('id','blocco_testo')`
* `.val('ciao')`
* `.width('120px')`

---
![bg](./ITS_BG_Slide.jpg)


## Accedere e modificare le classi CSS

Con jQuery è facile aggiungere, scambiare o rimuovere classi CSS: ecco i tre metodi

```javascript
//aggiunge la classe "content" da tutti i <div>
$("div").addClass("content");
//rimuove la classe "content" da tutti i <div>
$("div").removeClass("content"); 
//fa lo switch della classe "content" da tutti i <div>
$("div").toggleClass("content");
```

---
![bg](./ITS_BG_Slide.jpg)

Se un elemento è di una determinata classe allora esegui il codice:

```javascript
if ($("#mioElemento").hasClass("content")) {
    //codice
}

```

---
![bg](./ITS_BG_Slide.jpg)

## Gestire gli stili Css con Jquery

Ecco come modificare i css con jQuery:

```javascript
$("p").css("width", "400px");
$("#mioElemento").css("color", "blue");
$("ul").css("border", "solid 1px #ccc");
```

---
![bg](./ITS_BG_Slide.jpg)


## Aggiungere e rimuovere contenuto e inserire elementi

---
![bg](./ITS_BG_Slide.jpg)

### Ottenere l'elemento html

```javascript
var mioElementHTMLo = $("#mioElemento").html();
```

### Ottenere solo il testo contenuto nel tag

```javascript
var mioElementHTMLo = $("#mioElemento").text();
```

---
![bg](./ITS_BG_Slide.jpg)

### Cambiare l'HTML e/o il Testo

```javascript
$("#mioElemento").html("<p>Questo è il nuovo contenuto</p>");
$("#mioElemento").text("Questo è il nuovo contenuto."); // questo sostituisce il testo presente
```

---
![bg](./ITS_BG_Slide.jpg)

### Far seguire (appendere) del contenuto ad un elemento

```javascript
$("#mioElemento").append("<p>Questo lo aggiungo.</p>");
$("p").append("<p>Questo pure.</p>"); // Aggiunge questo contenuto ad ogni paragrafo
```

---
![bg](./ITS_BG_Slide.jpg)

### Altri comandi

```javascript
    appendTo()
    prepend()
    prependTo()
    before()
    insertBefore()
    after()
    insertAfter()
```

---
![bg](./ITS_BG_Slide.jpg)

* lavorano in modo simile con specifiche peculiarità
* Ulteriori informazioni  jQuery.com

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `prepend()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>


$("h1").prepend("<span>Primo</span>");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `before()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>


$("h1").before("<span>Primo</span>");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `append()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("h1").append("<span>Primo</span>");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `after()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("h1").after("<span>Primo</span>");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `html()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("#blocco_interno").html("<strong>Ciao , sono un testo dinamico</strong>");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `addClass()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("# blocco_interno).addClass("selezionata");

```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `removeClass()`

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno" class="selezionata">
</div>
</div>

$("#blocco_interno").removeClass("selezionata");
```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `html()` + val()

```javascript

<form>
<input type="text" id="testo" name="testo" value="ciao" />
</form>
<span></span>

$("span"). html( $("#testo").val());
```

---
![bg](./ITS_BG_Slide.jpg)


## Esempio DOM: `val()`

```javascript
<form>
<input type="text" id="testo" name="testo" />
</form>
<span></span>

$("#testo).val('Hello world') ;
```

---
![bg](./ITS_BG_Slide.jpg)


## Operazione sugli oggetti selezionati

* Esempi Manipolazione del DOM

```javascript
$("li").text("testo lista").insertAfter("li:first");
//inserisce un elemento li appena creato dopo il primo li del documento

$("div#principale").append("dentro il div");
//inserisce un paragrafo dentro il div che ha id principale

$("input#email").val()
//valore della input box con id email
```

---
![bg](./ITS_BG_Slide.jpg)


## Operazione sugli oggetti selezionati 2

```javascript
$("span").wrap("div")
//crea un div che contiene tutti gli elementi span della pagina

$("p.evidenziato").text("Sono evidenziato");
//imposta il testo dei paragrafi di classe evidenziano con la
stringa passata come parametro

$("img.logo").css("border","solid orange 3px");
//cambia lo stile a tutte le immagini di classe logo
```

---
![bg](./ITS_BG_Slide.jpg)


## Scorre il vettore di elementi selezionati ed esegue una funzione per ogni elemento

```javascript
$(selettore).each()
```

```javascript
$(img).each(function(i){
    $(this).attr("alt","immagine "+i);
})
```
