# GALLERY FOTOGRAFICA con FancyBox: IMPORTAZIONE

Le gallery in javascript negli ultimi anni hanno avuto un ruolo
predominante sul web e sono andate a sostituire la maggior
parte di quelle sviluppate in Flash.
Alcuni vantaggi :

* Semplicità di utilizzo
* Il codice è parte integrante della pagina web
* La maggior parte permette di realizzare il "Progressive enhancement"
* Molti plugin disponibili sul web, per esempio: http://fancybox.net/

Il primo passo è l'importazione all'interno della nostra pagina della libreria
Jquery, del file che contiene il codice javascript della nostra galleria
( jquery.fancybox-1.3.4.pack.js) e il file css della stessa (jquery.fancybox-
1.3.4.css)

```javascript
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css"
media="screen" />
```

---

## GALLERY FOTOGRAFICA : HTML
Prepariamo il codice html
```javascript
<a id="example1" href="img/1_b.jpg">
<img alt="example1" src="img/1_s.jpg" />
</a>
<a id="example2" href="img/2_b.jpg">
<img alt="example2" src="img/2_s.jpg" />
</a>
<a id="example3" href="img/3_b.jpg">
<img alt="example3" src="img/3_s.jpg" />
</a>
<a id="example4" href="img/4_b.jpg">
<img class="last" alt="example4" src="img/4_s.jpg" />
</a>
```

## GALLERY FOTOGRAFICA : IMPOSTIAMO
Adesso diciamo alla libreria su quali elementi deve agire, partiamo dalla
chiamata più semplice.
```javascript
<script type="text/javascript">
$(document).ready(function() {
$("#example1").fancybox();
});
</script>
```

## GALLERY FOTOGRAFICA : IMPOSTIAMO
Adesso possiamo visualizzare la pagina all'interno di un browser e vedere in
esecuzione la libreria FancyBox

## GALLERY FOTOGRAFICA : IMPOSTIAMO
Molti plugin permettono di settare alcuni aspetti o comportamenti dello
stesso, di seguito alcuni settaggi possibili della libreria.

```javascript
$("a#example2").fancybox({
'overlayShow' : false,
'transitionIn'
: 'elastic',
'transitionOut' : 'elastic'
});
$("a#example3").fancybox({
'transitionIn'
: 'none',
'transitionOut' : 'none'
});
$("a#example4").fancybox({
'opacity': true,
'overlayShow' : false,
'transitionIn'
: 'elastic',
'transitionOut' : 'none'
});
```

## GALLERY FOTOGRAFICA : IMPORTAZIONE

Per la gallery l'importazione delle librerie rimane uguale

```javascript
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css"
media="screen" />
```

## GALLERY FOTOGRAFICA : HTML

Il codice HTML cambierà in :

```javascript
<a rel="gruppo" href="img/1_b.jpg">
<img alt="example1" src="img/1_s.jpg" />
</a>
<a rel="gruppo" href="img/2_b.jpg">
<img alt="example2" src="img/2_s.jpg" />
</a>
<a rel="gruppo" href="img/3_b.jpg">
<img alt="example3" src="img/3_s.jpg" />
</a>
< arel="gruppo" href="img/4_b.jpg">
<img class="last" alt="example4" src="img/4_s.jpg" />
</a>
```

## GALLERY FOTOGRAFICA: IMPOSTIAMO

Adesso diciamo alla libreria su quali elementi deve agire, nel nostro caso su
tutti quelli elementi che hanno tra i loro attributi il tag rel="gruppo"
```javascript
<script type="text/javascript">
$(document).ready(function() {
$("a[rel=gruppo]").fancybox();
});
</script>
```

Adesso possiamo visualizzare la pagina all'interno di un browser e vedere in
esecuzione la libreria FancyBox