---
marp: false
title: Fondamenti
paginate: true
author: mauro
---
![bg](./ITS_BG_Slide.jpg)

Mauro Bogliaccino

# Corso Javascript

## JQuery: gestire gli effetti

---
![bg](./ITS_BG_Slide.jpg)

# jQuery: GLI EFFETTI

http://api.jquery.com/category/effects/

---
![bg](./ITS_BG_Slide.jpg)

Gli effetti li possiamo raggruppare in 4 tipologie

* FadeIn / fadeOut / fadeToggle
* Hide / Show
* Slide up / Slide Down
* Animate

---
![bg](./ITS_BG_Slide.jpg)

## Mostrare e nascondere elementi con jQuery: hide()

```javascript
$("#mioElemento").hide("slow", function() {
    // nasconde
}

//mostra
$("#mioElemento").show("fast", function() {
    // qui dentro viene eseguito una volta che l'elemento è stato mostrato
}

// scambia: se è nascosto mostra e se è visibile nasconde
$("#mioElemento").toggle(1000, function() {
    }
```

---
![bg](./ITS_BG_Slide.jpg)

## Mostrare e nascondere elementi con jQuery: fade()

```javascript
    $("#mioElemento").fadeOut("slow", function() {
        //fai qualcosa quando termina l'effetto
    }


    $("#mioElemento").fadeIn("fast", function() {
        //fai qualcosa quando termina l'effetto
    }
```

```javascript
    $("#mioElemento").fadeTo(2000, 0.4, function() {
        //fai qualcosa quando termina l'effetto
    }
```

---
![bg](./ITS_BG_Slide.jpg)

## Mostrare e nascondere elementi con jQuery: slide()

```javascript
    $("#mioElemento").slideDown("fast", function() {
        //fai qualcosa quando termina l'effetto
    }


    $("#mioElemento").slideUp("slow", function() {
        //fai qualcosa quando termina l'effetto
    }

    $("#mioElemento").slideToggle(1000, function() {
        //fai qualcosa quando termina l'effetto
    }
```

---
![bg](./ITS_BG_Slide.jpg)

## Animate

```javascript
    $("#mioElemento").animate(
    {
    opacity: .3,
    width: "500px",
    height: "700px"
    }, 2000, function() {
    // fai qualcosa quando termina l'animazione
    }
    );
```

---
![bg](./ITS_BG_Slide.jpg)

## slideUp()

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$("#box").slideUp();
});
})
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
</body>
</html>
```

---
![bg](./ITS_BG_Slide.jpg)

## slideDown()

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$("#box").slideDown();
});
})
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;
display:none;"></div>
</body>
</html>
```

---
![bg](./ITS_BG_Slide.jpg)

## Ottenere un effetto Apri/chiudi

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$("#box").slideToggle();
});
})
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
</body>
</html>
```

---
![bg](./ITS_BG_Slide.jpg)

## Gestire la velocità dell'animazione

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$("#box").slideToggle(3000);
});
})
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
</body>
</html>
```

---
![bg](./ITS_BG_Slide.jpg)

## Eseguire un'azione al completamento dell'animazione

```javascript
<html>
<head>
<script src="jquery.js"></script>
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$("#box").slideToggle(1000, function(){
alert("Animazione completata");
} );
});
})
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>
</body>
</html>
```

---
![bg](./ITS_BG_Slide.jpg)

## ANIMATE

Con la funzione animate, si possono creare "transizioni" sulle proprietà css di tipo numerico di un oggetto.

```javascript
<script type="text/javascript">
$(function(){
$("#pulsante").click(function () {
$('#box').animate({left: '+=500' },
1000,
function() { alert("Animazione completata"); }
);
});
}) ;
</script>
</head>
<body>
<input type="button" value="cliccami" id="pulsante" />
<div id="box" style="width: 100px; height: 100px; background-color: red;position:
relative; "></div>
```

---
![bg](./ITS_BG_Slide.jpg)

## Scroller di pagina

Lo scroller di pagina viene usato per spostarsi velocemente tra i contenuti di una pagina web.
Un tipico esempio sono le ancore "torna su" che troviamo alla fine di un testo che
permettono con un click di tornare in cima allo stesso

---
![bg](./ITS_BG_Slide.jpg)

## Scroller di pagina verticale

```javascript
<script type="text/javascript">
function vai_a(id)
{
$('html,body').animate({scrollTop: $("#"+id).offset().top},1000);
}
</script>
<div id="blocco_1" class="blocco" style=" background-color: red;">
<div class="menu">
<a href="#" onclick="vai_a('blocco_1');return false;" >Vai al blocco 1</a>
<a href="#" onclick="vai_a('blocco_2');return false;" >Vai al blocco 2</a>
<a href="#" onclick="vai_a('blocco_3');return false;" >Vai al blocco 3</a>
</div>
Testo Primo Blocco 1
</div>
```

---
![bg](./ITS_BG_Slide.jpg)

## Scroller di pagina orizzontale

```javascript
<script type="text/javascript">
function vai_a(id)
{
$('html,body').animate({ scrollLeft: : $("#"+id).offset().left},1000);
}
</script>
<div id="blocco_1" class="blocco" style=" background-color: red;">
<div class="menu">
<a href="#" onclick="vai_a('blocco_1');return false;" >Vai al blocco 1</a>
<a href="#" onclick="vai_a('blocco_2');return false;" >Vai al blocco 2</a>
<a href="#" onclick="vai_a('blocco_3');return false;" >Vai al blocco 3</a>
</div>
Testo Primo Blocco 1
</div>
```

---
![bg](./ITS_BG_Slide.jpg)

## SLIDER DI IMMAGINI

```javascript
<script>
$(function(){
$('#blocco img:gt(0)').hide();
setInterval(function(){ $('#blocco :first-child').fadeOut(20).next('img').
fadeIn(700).end().appendTo($('#blocco'));}, 3000);
});
</script>
<style type="text/css">
.blocco{ width: 500px; height:350px; overflow: hidden;}
.blocco img{ width: 500px; height:350px; float: left;}
</style>
<div id="blocco" class="blocco">
<img src="gallery/1.jpg" />
<img src="gallery/2.jpg" />
<img src="gallery/3.jpg" />
</div>
```
