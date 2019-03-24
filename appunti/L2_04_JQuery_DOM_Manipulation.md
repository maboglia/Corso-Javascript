# JQuery: manipolare il DOM

http://api.jquery.com/category/manipulation/

---

## prepend()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>


$("h1").prepend("<span>Primo</span>");

```

---

## before()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>


$("h1").before("<span>Primo</span>");

```

---

## append()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("h1").append("<span>Primo</span>");

```

---

## after()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("h1").after("<span>Primo</span>");

```

---

## html()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("#blocco_interno").html("<strong>Ciao , sono un testo dinamico</strong>");

```

---

## addClass()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno"></div>
</div>

$("# blocco_interno).addClass("selezionata");

```

---

## removeClass()

```javascript
<div id="blocco">
<h1>Esempio</h1>
<div id="blocco_interno" class="selezionata">
</div>
</div>

$("#blocco_interno").removeClass("selezionata");
```

---

## html() + val()

```javascript

<form>
<input type="text" id="testo" name="testo" value="ciao" />
</form>
<span></span>

$("span"). html( $("#testo").val());
```

---

## val()

```javascript
<form>
<input type="text" id="testo" name="testo" />
</form>
<span></span>

$("#testo).val('Hello world') ;
```

---

## .css()

Possiamo gestire le regole css di un elemento attraverso la funzione .css

* sintassi: $("#elemento).css ( regola-css , valore);
* `$("#elemento").css("color", "red");`
* `$("#elemento").css("height", "100px");`
* `$("#elemento").css("border", "1px solid red");`
* `$("#elemento").css("background-color", "#ffcc90");`


```javascript
//accorpare le regole in un oggetto
$("#elemento).css( {
regolaCss : "valore", //sintassi camelCase per la proprietà
regolaCss : "valore",
regolaCss : "valore" //l'ultimo lemento senza virgola
} );
```

```javascript
//accorpare le regole in un oggetto
$("#elemento").css({ "color": "red",
"height" : "100px",
"border" : "1px solid red",
"background-color" : "#ffcc90"
});
```

---

## ATTRIBUTI SET & GET

Con Jquery possiamo leggere e impostare i valori per ogni attributo del DOM, ad esempio:

* leggere e scrivere dinamicamente dentro un elemento p
* leggere e scrivere il contenuto di un input text 
* leggere e scrivere una proprietà CSS 

---

## GETTERS

* `.html()`
* `.attr('id')`
* `.val()`
* `.width()`

---

## SETTERS

* `.html('<p>ciao</p>)`
* `.attr('id','blocco_testo')`
* `.val('ciao')`
* `.width('120px')`
