---
marp: false
title: Fondamenti
paginate: true
author: mauro
---
![bg](./ITS_BG_Slide.jpg)

Mauro Bogliaccino

# Corso Javascript

## JQuery: i filtri

---
![bg](./ITS_BG_Slide.jpg)

# JQuery: FILTRI

I filtri permettono di ottenere una maggiore precisione nella selezione degli elementi fatta con i selettori

* Filtri semplici (Basic Filter)
	* :first
	* :last
	* :not()
	* :eq()

---
![bg](./ITS_BG_Slide.jpg)

* Filtri sul contenuto ( Content Filter)
	* :empty
	* :contains(text)
	* :has(selector)

---
![bg](./ITS_BG_Slide.jpg)

* Filtri sugli attributi ( Attribute )
	* [attribute]
	* [attribute=value]
	* [attribute!=value]

---
![bg](./ITS_BG_Slide.jpg)

* Filtri sugli elementi dei form ( Form )
	* :input
	* :text
	* :submit
	* :disabled
	* :checked

---
![bg](./ITS_BG_Slide.jpg)


## FILTRI SU TABELLE

Cognome | Provincia | #
---|---|---
MAURO|TO|presente
PAOLO|TO|assente
CARLO|MI|presente
PIETRO|MI|presente
YASMINE|RM|assente


* `$("th").css("background-color", "#9bbb59");`
* `$("tr:odd").css ("background-color", "#dee7d1");`
* `$("tr:even").css ("background-color", "#eff3ea");`
* `$( "td:contains('assente')" ).css('color','red');`
* `$( "td[align=left]").css('text-align','center');`

---
![bg](./ITS_BG_Slide.jpg)


## FILTRI SU MODULI


### checkbox

```html
<form name="nome_form" id="id_form">
	<label>Colori preferiti</label>
<input type="checkbox" value="rosso" /> Rosso
<input type="checkbox" value="giallo" /> Giallo
<input type="checkbox" value="blu" /> Blu
<input type="button" value="sono selezionati..." onclick="dammi_selezionati()" />
</form>
```

---
![bg](./ITS_BG_Slide.jpg)

```javascript
<script type="text/javascript">
function dammi_selezionati(){
	var stringa='';
	$(":checked") .each( function() {
		stringa+=" "+ $(this).val() +" ";
	});
	alert(stringa);
}
</script>
```

---
![bg](./ITS_BG_Slide.jpg)

### option

```javascript

<form name="nome_form" id="id_form">
<label>Colori preferiti</label><br />
<select id="colori"multiple="multiple">
<option value="rosso">Rosso</option>
<option value="blu">Blu</option>
<option value="giallo">Giallo</option>
</select>
<input type="button" onclick="dammi_selezionato()"
value="Dammi selezionati">
</form>
<script type="text/javascript">
function dammi_selezionato(){
	var stringa='';
	$("#colori option:selected").each( function() {
		stringa+=" "+ $(this).val() + " ";
	});
	alert(stringa);
} ;
</script>
```
