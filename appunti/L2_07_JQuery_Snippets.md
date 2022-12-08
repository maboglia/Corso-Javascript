---
marp: false
title: Fondamenti
paginate: true
author: mauro
---
![bg](./ITS_BG_Slide.jpg)

Mauro Bogliaccino

# JQuery code snippets utili

## JQuery: gestire gli effetti

---
![bg](./ITS_BG_Slide.jpg)



## VALIDARE i moduli

Molto utili per guidare l'utente nella compilazione e segnalare degli errori.

---
![bg](./ITS_BG_Slide.jpg)

## Implementiamo il form

```javascript
<li>
<label>Nome</label>
<input type="text" id="nome" name="nome" class="obbligatorio" />
</li>
<li>
<label>Indirizzo</label>
<input type="text" id="indirizzo" name="indirizzo "/>
</li>
<li>
<label>Email</label>
<input type="text" id="email" name="email" class="obbligatorio" />
</li>
<li>
<input type="button" id="invia" name="invia" value="invia" onclick="controlla()" />
</li>
```

---
![bg](./ITS_BG_Slide.jpg)

## FORM VALIDATION: LOGICA

```javascript
function controlla(){
    $(".obbligatorio ").each( function(){
    if( ($(this).val()=="") ){
        errore=true;
        $(this).prev().addClass('rosso');
    }
    else{ 
        $(this).prev().removeClass('rosso'); 
    }})

    if(errore==true) { 
        alert("Il form contiene errore/i, si prega di correggere."); 
    }
    else {
        alert("Complimenti! Non ci sono errori!"); 
    }
}
</script>
```

---
![bg](./ITS_BG_Slide.jpg)

## Bottone torna su

```javascript
$('a.top').click(function(){
$(document.body).animate({scrollTop : 0},800);
return false;
});

```

```html
<a class="top" href="#">Back to top</a>
```

---
![bg](./ITS_BG_Slide.jpg)

## Controlla see img sono caricate

```javascript
$('img').load(function() {
console.log('image load successful');
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Ripara immagini mancanti

```javascript
$('img').error(function(){
$(this).attr('src', 'img/broken.png');
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Toggle class su hover

```javascript
$('.btn').hover(function(){
$(this).addClass('hover');
}, function(){
$(this).removeClass('hover');
}
);
``` 

---
![bg](./ITS_BG_Slide.jpg)

## Disabilitare input fields

```javascript
$('input[type="submit"]').attr("disabled", true);

$('input[type="submit"]').removeAttr("disabled");
```

---
![bg](./ITS_BG_Slide.jpg)

## ferma il caricamento links

```javascript
$('a.no-link').click(function(e){
e.preventDefault();
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Toggle fade/slide

```javascript
// Fade
$( “.btn" ).click(function() {
$( “.element" ).fadeToggle("slow");
});

// Toggle
$( “.btn" ).click(function() {
$( “.element" ).slideToggle("slow");
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Semplice accordion

```javascript
// Close all Panels
$('#accordion').find('.content').hide();
// Accordion
$('#accordion').find('.accordion-header').click(function(){
var next = $(this).next();
next.slideToggle('fast');
$('.content').not(next).slideUp('fast');
return false;
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Fai 2 div con la stessa altezza

```javascript
$('.div').css('min-height', $('.main-div').height());
```

---
![bg](./ITS_BG_Slide.jpg)

## ul zebra style

```javascript
$('li:odd').css('background', '#E8E8E8');
```

---
![bg](./ITS_BG_Slide.jpg)

## Invia data asando il metodo GET

```javascript
jQuery( document ).ready(function() {
	jQuery.get( "mypage.php", { name: "John", time: "2pm" } )
		.done(function( data ) {
		alert( "Data Loaded: " + data );
	});
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Invia data usando il metodo POST

```javascript
jQuery("button").click(function(){
    jQuery.post("page.php", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Recevi testo da una webpage

```javascript
<ol id="new-projects"></ol>
 
<script>
jQuery( document ).ready(function() {
	jQuery( "#new-projects" ).load( "/resources/load.html #projects li" );
});
</script>
```

---
![bg](./ITS_BG_Slide.jpg)

## Prendi tutti i valori da un form e inviali ad una pagina web

```javascript
jQuery( document ).ready(function() {
	jQuery( "#submit" ).click(function() {
		 jQuery.post( "https://yoursite.com/yourpage.php", jQuery('#form').serialize())
			.done(function( data ) {
			alert(data);
		}); 
		return false;
	});
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Ricevi JSON data

```javascript
jQuery.getJSON( "http://yoursite.com/test.json", function( data ) {
        alert(data);
});
```

```javascript
jQuery.getJSON( "http://yoursite.com/test.json", function( data ) {
        var obj = JSON.parse(data);
        jQuery( "#container" ).html(obj.name + ", " + obj.age);
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Come mostrare tutti i sotto elementi in jQuery

```javascript
 $("#link1").click(function(){
    $("#p").show();
    $("#p").children().show();
});
$("#link2").click(function(){
   $("#small1").hide(); 
});
$("#link3").click(function(){
   $("#middle2").hide(); 
});
```

---
![bg](./ITS_BG_Slide.jpg)

## jQuery.unique()

```javascript
 var divs = $( "div" ).get();
 
divs = divs.concat( $( ".test1" ).get() );
$( "div:eq(1)" ).text( "This is cool " + divs.length + " element." );
 
divs = jQuery.unique( divs );
$( "div:eq(2)" ).text( "jQuery is very fun to" + divs.length + " learn.." )
  .css( "color", "blue" );

// Ordinare un array di elementi del DOM, rimuovendoi duplicati. Non funziona con stringhe o numeri
```

---
![bg](./ITS_BG_Slide.jpg)

## jQuery Dimensions

```javascript
 $(document).ready(function(){
    $("button").click(function(){
        var txt = "";
        txt += "Width of div: " + $("#div1").width() + "
";
        txt += "Height of div: " + $("#div1").height() + "
";
        txt += "Outer width of div (margin included): " + $("#div1").outerWidth(true) + "
";
        txt += "Outer height of div (margin included): " + $("#div1").outerHeight(true);
        $("#div1").html(txt);
    });
});
```

---
![bg](./ITS_BG_Slide.jpg)

## jQuery.each()

```javascript
 $(document).ready(function(){
    $("button").click(function(){
        $("li").each(function(){
            alert($(this).text())
        });
    });
});
```

---
![bg](./ITS_BG_Slide.jpg)

## Fade out page 

```javascript


 $(document).ready(function(){

/*! Fades in whole page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);

});

```

---
![bg](./ITS_BG_Slide.jpg)

## Submit form 

```javascript
 var tId;
$('input[type="checkbox"]').change(function(){
    clearTimeout(tId);
    tId=setTimeout(function(){
      $('#top_header_form').submit();
    },650);
});

```

---
![bg](./ITS_BG_Slide.jpg)

## jQuery getJSON() Method

```javascript
 $("button").click(function(){
    $.getJSON("demo_json.js", function(result){
        $.each(result, function(i, field){
            $("div").append(field + " ");
        });
    });
});

```

---
![bg](./ITS_BG_Slide.jpg)

## Aggiungere icone ai link con jQuery

```javascript
 $(document).ready(function() {
            $('a[href^="http://"],a[href^="https://"]')
                .attr('target','_blank')
                .addClass('ext_link')
            ;
        });

```

---
![bg](./ITS_BG_Slide.jpg)

## Assegnare la classe "active" alla navbar con jQuery

```javascript
 $(function() {
      $( 'ul.nav li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});
```
