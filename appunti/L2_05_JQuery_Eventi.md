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
