# JQuery code snippets utili

## VALIDARE i moduli

Molto utili per guidare l'utente nella compilazione e segnalare degli errori.

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

## FORM VALIDATION: LOGICA

```javascript
function controlla(){
$(".obbligatorio ").each( function(){
if( ($(this).val()=="") ){
errore=true;
$(this).prev().addClass('rosso');
}
else{ $(this).prev().removeClass('rosso'); }
})
if(errore==true)
{ alert("Il form contiene errore/i, si prega di correggere."); }
else
{alert("Complimenti! Non ci sono errori!"); }
}
</script>
```

---

## Bottone torna su

```javascript
$('a.top').click(function(){
$(document.body).animate({scrollTop : 0},800);
return false;
});

```

```html
<a class="top" href="#">Back to top</a>

---

```

## Controlla see img sono caricate

```javascript
$('img').load(function() {
console.log('image load successful');
});
```

---

## Ripara immagini mancanti

```javascript
$('img').error(function(){
$(this).attr('src', 'img/broken.png');
});
```

---

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

## Disabilitare input fields

```javascript
$('input[type="submit"]').attr("disabled", true);

$('input[type="submit"]').removeAttr("disabled");
```

---

## ferma il caricamento links

```javascript
$('a.no-link').click(function(e){
e.preventDefault();
});
```

---

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

## Fai 2 div con la stessa altezza

```javascript
$('.div').css('min-height', $('.main-div').height());
```

---

## ul zebra style

```javascript
$('li:odd').css('background', '#E8E8E8');
```

---

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

## Invia data usando il metodo POST


```javascript
jQuery("button").click(function(){
    jQuery.post("page.php", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});
```

---

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

## Fade out page 


```javascript


 $(document).ready(function(){

/*! Fades in whole page on load */
$('body').css('display', 'none');
$('body').fadeIn(500);

});

```

---

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

## Assegnare la classe "active" alla navbar con jQuery


```javascript
 $(function() {
      $( 'ul.nav li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});

```