# Snippets JQuery

```javascript


$("#hello_jquery").click(function(event) {
	alert("hello jquery");
});

```

---
## 

```javascript


function elencoAllievi() {
		first_paragraph.innerHTML = "<h3>Elenco allievi</h3>";
		second_paragraph.innerHTML = "";

			var testo = "";
		for (var i = 0; i < allievi.length; i++) {
		
			testo += "<li>" + allievi[i] + "</li>";
		//alert(allievi[i]);
						
		};

		second_paragraph.innerHTML = "<ol>" +testo+"</ol>" ;

}

$("#elenco_allievi").click(elencoAllievi);


$("document").ready(function() {
    //$("body").append("<h3>pagina completamente caricata</h3>");
    //$("header").prepend("<h3>...</h3>");
    //$("header h2").html("<h3>+++</h3>");






});
```

---
## 

```javascript

//-------effetti: fade--------------------------------
//-hide()- show()----------------------------------------------

$("#hideFoto").click(function (argument) {
		
		$("img").fadeOut(5000);

	});


$("#showFoto").click(function (argument) {
		$("#fotoCopertina").fadeIn(5000, function() {
			alert('azione terminata');
		});

	});


$("#toggleFoto").click(function (argument) {
		$("#fotoCopertina").fadeToggle(2500, function() {
			// alert('azione terminata');
		});

	});
```

---
## 

```javascript


function mostra_messaggio (argument) {
	$("#messaggio").show();

}

$("#mostraMsg").click(mostra_messaggio);


```

---
## 

```javascript


//-toggle()-----------------------------------------
$("#showJS").click(function (argument) {
	$("#funzioni_javascript").toggle(3000, function (argument) {
		$("p").css('border', '3px solid red');
	});
});

$("#showJQuery").click(function (argument) {
	$("#funzioni_JQuery").toggle("slow");
});
```

---
## 

```javascript


function getData () {
	$.ajax({
		url: 'js/test_json.js',
		type: 'GET',
		dataType: 'text'
		
	})
	.done(function() {
		
		$("<img>").attr("src", item.media.m).appendTo("#fotoCopertina");

	})
	.fail(errorFn)
	.always(function() {
		console.log("complete");
	});
}
```

---
## 

```javascript

function errorFn (xhr, status, strErr) {
	console.log(xhr);
	console.log(status);
	console.log(strErr);
}
```

---
## 

```javascript

function getJSONData (url) {

  var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  $.getJSON( flickerAPI, {
    tags: "banksy",
    tagmode: "any",
    format: "json"
  })
    .done(function( data ) {
      $.each( data.items, function( i, item ) {
        $( "<img>" ).attr("class", "img-responsive").attr( "src", item.media.m ).after("<br/>").appendTo( "#second_paragraph" );

      });
    });
}
```

---
## 

```javascript


function leggiJSON (argument) {
	
	$.each(argument.items, function(i, item) {
		$("#second_paragraph").append(ite.media.m);

		$("<img>").attr("src", item.media.m).appendTo("#fotoCopertina");
		if(i===10){
			return false;
		}
	});

}

```

---
## 

```javascript

function itsJSON (argument) {
	
  var url = "js/ITS_corsi.json";
  $.getJSON( url, {
    format: "json"
  })
    .done(function( data ) {
      $.each( data.corsi, function( i, item ) {
        $( "<li>" ).text(item.corso).attr("class", "corsi").after("<br/>").appendTo( "#second_paragraph" );
        	$.each(item.materie, function(index, el) {
        		$( "#second_paragraph" ).append("<br/>" + el);
        	});


      });
    });

}

```

---
## 

```javascript

$("#leggiJSON").click(getJSONData);
$("#corsiITS").click(itsJSON);
$("#removeClass").click(function () {
	$("#messaggio").toggleClass('hidden');
	$("#demo").toggleClass('jumbotron');
});

$("#animazioneIMG").click(function () {
	
	$("#fotoCopertina").animate({width: "400px"}, 1000);
	$("#first_paragraph").animate({fontSize: "20pt"}, 2000);
	$("#fotoCopertina").animate({top: "300px"}, 2000, "swing");
	$("#second_paragraph").animate({width: "400px", fontSize: "2em", top: "300px"}, 2000, "swing");


}




	);


$("#loadHtml").click(function () {
	$("#container").html("");
	//$("#container").load("provaAjax.html");
	$("#container").load("provaAjax.html", "#fotoCopertina");


});
```

---
## 

```javascript

function provacolore (argument) {
	var colore = prompt("Che colore vuoi?");

	switch (colore) {
	    case 'rosso':
	        console.log("colore " + colore);
	        $("body").css('background-color', 'red');
	        break;
	    case 'verde':
	        console.log("colore " + colore);
	        $("body").css('background-color', 'green');
	        break;
	    case 'blu':
	        console.log("colore " + colore);
	        $("body").css('background-color', 'blue');
	        break;
	    default:
	        console.log("devi scegliere un colore primario " + colore);
	}
}
```
