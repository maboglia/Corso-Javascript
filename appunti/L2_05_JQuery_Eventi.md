# JQuery: GLI EVENTI

http://api.jquery.com/category/events

* Click
* Doppio click
* Focus
* Pressione di un tasto
* Caricamento
* Mouse
* Selezione
* Caricamento della pagina
* Ridimensionamento

Struttura di una funzione per intercettare un evento
Quando su questo/i elemento/i
Si verifica questo evento
```javascript
$("button").click(function(){
// qualche operazione
});
```

---

## Gli Eventi: intercettare il click del mouse con jQuery

```javascript
$("a").click(function() {
// il codice presente viene eseguito onclick!
});
```

* Il codice dentro function() viene eseguito quando un link viene cliccato

* Altri comuni eventi inclusi in jQuery
  * blur()
  * focus()
  * hover()
  * keydown()
  * load()
  * mousemove()
  * resize()
  * scroll()
  * submit()
  * select()

---

```javascript
<html>
<head>
<script src="percorso/jquery.js"></script>
<script style="text/javascript">
$('#pulsante').click(function(){
$('#box').slideUp()
}
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width:100px; height:100px; background-color:red"></div>
</body>
<html>
```

---

## DOM ready() Eseguire una funzione solo al caricamento della pagina

```html
<head>
<script type="text/javascript">
$(document).ready(function() {
// fai qualcosa
});
</script>
</head>
```

```html
<head>
<script type="text/javascript">
$(function() {
// fai qualcosa
});
</script>
</head>
```

---

## eventi legati al mouse

* mouseover
* mouseout
* mousedown
* mouseleave
* ...

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$('p'). mouseover (function(){
alert('Ciao, sono una finestra attivata da un evento');
});
})
</script>
</head>
<body>
<p>Passa con il mouse sopra la frase</p>
</body>
</html>
```

---

## eventi legati alla pressione di tasti

* keydown
* keyup
* keypress
* focusin,
* focusout
* http://api.jquery.com/category/events/keyboard-events/

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$('#parola').keypress(function(evento){
var keycode = (evento.which ? evento.which :
evento.keyCode);
$('p').append(' '+evento.which+' '+String.fromCharCode(keycode));
});
})
</script>
</head>
<body>
<input type="text" id="parola" />
<p>Hai premuto i seguenti tasti (in codice ASCII ):<br /></p>
</body>
</html>
```

---

## Eventi supportati

* dblclick
* load
* unload
* submit
* focus
* blur
* change
* select
* resize
* keydown
* keypress
* keyup
* scroll
* mousemove
* mousedown
* mouseup
* mouseover
* error

---

## Tipologia di Eventi Javascript

EVENTO | DESCRIZIONE
------ | -----------
blur, focus | Inviati ad un elemento quando rispettivamente perde il focus od ottiene il focus.
focusin, focusout | Inviato ad un elemento se esso o un suo discendente rispettivamente ottiene o perde il focus
load | Inviato ad un elemento quando esso e tutti i suo discendenti sono stati completamente caricati
resize | Inviato all'elemento windows quando la finestra del browser ha cambiato dimensioni
scroll | Inviato ad un elemento quando l'utente ha effettuato lo scroll in un differente punto dell'elemento stesso
unload | Inviato all'oggetto window quando l'utente naviga fuori dalla pagina (chiusura del browser, click su un link, a volte anche il semplice refresh)
click, dbclick | Inviati ad un elemento quando il mouse è sopra di esso e viene effettuato un click o un doppio click
mousedown, mouseup | Inviati ad un elemento quando il mouse è sopra di esso e viene rispettivamente premuto o rilasciato il bottone del mouse
mouseover, mouseout, mousemove | Eventi inviati all'elemento in cui il puntatore del mouse entre (mouseover), in cui esce (mouseout) o in cui si sta mouvendo (mousemove)
keydown,keypress, keyup | Eventi inviati quando un tasto viene premuto (keydown) è stato rilasciato (keyup) o è stato premuto (keypress)
select | Inviato ad un elemento quando viene selezionato del test all'interno di esso. 
change | Evento inviato ad un elemento che ha cambiato il proprio valore. 
submit | Evento inviato quando l'utente tenta di fare il submit di un form
---

## on

`$(selettore).on(evento,[dati],function(evento){...})`

Permette di collegare gli eventi ad un selettore e di eseguire la funzione associata

```javascript
$(":text").on('focusin', function(){
this.addClass('inserimento');
}).on('focusout',function(){
this.removeClass('inserimento');
})
```

Per ogni casella di testo aggiunge la classe
inserimento quando il focus è sull'oggetto e rimuove
la stessa classe quando il focus non è più
dell'oggetto

---

## Sintassi abbreviata eventi

* `$(selettore).on(evento,[dati],function(evento){...})`
* `$(selettore).evento([dati],function(evento){...})`

```javascript

    //nasconde i listitem al click su di essi
$("li").click(function(){$(this).hide()});

$("#mostraNascosti").mouseover(function(){
    //quando il mouse passa sopra l'elemento con id="mostraNascondi" gli elementi li nascosti vengano visualizzati
$("li:hidden").show();
});

//esempio passaggio dati alle funzioni di callback degli eventi
var messaggio="ciao mondo"
$("li").click({msg:messaggio},function(evento){
alert(evento.data.msg)
});
```

---

## Proprietà Oggetto evento

Le funzioni di callback (richiamate al verificarsi di ogni evento) hanno come parametro un oggetto che descrive l'evento occorso.

proprietà|Descrizione
---|---
.currentTarget|Elemento del DOM che ha rilanciato l'evento
.data|I dati opzionali passati dalla funzione on
.pageX|Ascissa della posizione del mouse
.pageY|Ordinata della posizione del mouse
.target|Elemento del DOM in cui è stato generato l'evento
.timeStamp|Quando si è verificato un evento (millisecondi passati dal 1 gennaio 1970)
.type|Descrive la natura dell'evento
.which|Nel caso di eventi scatenati da mouse o tastiera indica (in codice) quale bottone o tasto è stato premuto.
.keyCode|Per avere informazioni sul carattere inserito si utilizza
---

## Funzioni Oggetto evento

L'oggetto evento offre alcuni utili metodi
Metodo Descrizione

* `.preventDefault()` Non fa eseguire la funzione di default legata all'evento.

Es. disattivare tutti i link di una pagina:

```javascript
$("a").on('click',function(evento){
evento.preventDefault();
});
```

* `.stopPropagation()` Impedisce l'inoltro dell'evento ad ogni elemento padre
* `.stopImmediatePropagation()` Impedisce l'inoltro dell'evento ad ogni altro elemento del DOM

---

## Lanciare eventi

E' possibile tramite jQuery lanciare eventi, sia standard che personalizzati
`$(selettore).trigger(evento, [dati])`

* Esempio: `$("a#link").trigger('click')` invia un click all'ancora con id uguale a link

* Sintassi abbreviata `$(selettore).evento([dati])`
* Esempio `$("a#link").click()`
