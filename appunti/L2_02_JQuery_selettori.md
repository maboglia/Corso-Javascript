# SELETTORI
I Selettori in jquery permettono di prendere il controllo di uno o più
oggetti di una pagina web, per seleziona un elemento si usa la
funzione $ a cui viene passato un "qualcosa"

## Selezionare gli elementi

La principale caratteristica della funzione `jQuery()` (abbreviata in `$()` ) è quella di selezionare elementi HTML per modificarli: basta passare un parametro stringa (tra apici doppi  o singoli ) come negli esempi che seguono:

```javascript
$("div");
$("#mioId");
$(".miaClasse");
$("p#mioId");
$("ul li a.nav");
```
---
## selettori css 2 / css 3

jQuery supporta tutti i selettori anche quelli avanzati e quelli del CSS3

```javascript
$("p > a");
$("input[type=text]");
$("a:first");
$("p:odd");
$("li:first-child");
```
---
## jQuery supporta poi alcuni selettori custom:

```javascript
$(":animated");
$(":button"); selects any button elements (inputs or buttons)
$(":radio");
$(":checkbox"); selects checkboxes
$(":checked");
$(":header"); selects header elements (h1, h2, h3, etc.)
```
---
## Selettori TAG HTML

```javascript
$(elemento)
```

* selezionare gli elementi HTML passati come parametro
  * $("a") tutti i link (e ancore) della pagina
  * $("p") tutti i paragrafi della pagina
  * $("a,p") tutti i link e i paragrafi della pagina
---
## Selettori di ID

* Permette di selezionare l’elemento della pagina che ha l’id passato come parametro
* `$(#idelemento)` elemento della pagina con attributo id="principale"
* `$("div#principale")` div della pagina con attributo id="principale"
* `$("#principale")` Essendo l’id univoco all’interno della pagina la selezione del div poteva essere omessa
---
## Selettori di CLASSE

* `$(.nomeclasse)` Per selezionare gli elementi della pagina che hanno la classe passata come parametro 
* `$(".evidenziato")` Elementi della pagina che hanno classe evidenziato
* `$("div.evidenziato")` tutti i div della pagina con classe evidenziato
---
## Selettori per ATTRIBUTI
selettore|descrizione
---|---
`$(elemento[attributo])` | elementi della pagina che hanno l’attributo passato come parametro
`$(elemento[attributo=x])` | elementi della pagina che hanno l’attributo passato come parametro uguale al valore x 
`$(elemento[attributoˆ=x])` | elementi della pagina che hanno l’attributo passato come parametro che inizia per x 
`$(elemento[attributo$=x])`| elementi della pagina che hanno l’attributo passato come parametro che finisce per x
`$(elemento[attributo*=x])` | elementi della pagina che hanno l’attributo passato come parametro che contiene la stringa x 
`$("input[value]")` | elementi input in cui è specificato l’attributo value
`$("input[type=‘radio’]")` | elementi input di tipo radio
`$("a[hrefˆ=‘http://’]")` | i link con indirizzo non relativo
`$("a[href*='it.wikipedia.org']")` | i link che contengono nell’indirizzo la stringa ‘it.wikipedia.org’
`$("a[href$='.pdf']")` | i link a file pdf
`$("img[title]")` | elementi img in cui è specificato l’attributo title
`$("img[title=‘logo’]")` | le immagini in cui l’attributo titolo è uguale a ‘logo’
`$("img[src$='.png']")` | le immagini con estensione png
`$("img[title^='logo']")` | le immagini in cui l’attributo titolo inizia con ‘logo’
`$("img[title*='logo']")` | le immagini in cui l’attributo titolo contiene la stringa ‘logo’
     
---
## Selettori GERARCHICI
selettore|descrizione
---|---
`$(padre > figli)`| elementi "figli" che sono discendenti diretti dell’elemento "padre" 
`$(fratello+sorelle)`|
`$(".A + .B")`|Permette di selezionare gli elementi "sorelle" che sono direttamente preceduti da un elemento "fratello"
`$(fratello~sorelle)`|
`$(".A ~ .B")`|Permette di selezionare gli elementi "sorelle" che sono preceduti da un elemento "fratello"
`$(padri:has(discendenti))`|Permette di selezionare gli elementi "padri" che hanno almeno un "discendente" passato come parametro 
`$("ul:has(a)")`|tutti gli ul che hanno come discendente almeno un link
`$("div:has(img)") `|tutti i div che hanno comediscendente almeno un’immagine
`$(div > li)`|errato!!! Selezionerebbe tutti gli elementi di una lista contenuti direttamente in un div.
---
## Selettori di Posizione

selettore|descrizione
---|---
Questi selettori sono zero-based | utilizzano come indice iniziale lo 0
`$(:first) $(:last)`| Permettono di selezionare il primo (:first) e ultimo (:last) elemento di un insieme il primo link della pagina
`$("p.evidenziato:first")`| il primo paragrafo con class "evidenziato"
`$("img[src*=logo]:last")`| ultima immagine che contenga nell’indirizzo la parola logo
`$(:first-child) $(:last-child)`|Per selezionare il primo (:first-child) e l’ultimo (:last-child) elemento discendente
`$("p.evidenziato:first-child") `|Per selezionare il primo elemento contenuto in ogni paragrafo con class "evidenziato" 
`$("li:last-child")`|Per selezionare l'ultimo elemento contenuto in ogni li
`$("div:first-child")`|Per selezionare il primo elemento contenuto in ogni div
`$(:even) $(:odd)`|Permettono di selezionare gli elementi in posizioni pari (:even) e dispari (:odd)
`$("li:odd")`|i list item di posizione dispari
`$("table.zebra tr:even")`|le righe in posizione pari delle tabelle che hanno class "zebra"
     ---
## Selettori Cardinali di Posizione 

* `$(:nth-child(n))` e `$(:nth-child(even|odd))` Permettono di selezionare gli elementi discendenti in posizioni uguale a n

selettore|descrizione
---|---
$("tr:nth-child(4)")|il quarto elemento contenuto in ogni tr 
$("tr:nth-child(even)")|gli elementi in posizione pari in ogni tr
$("tr:nth-child(odd)")|dispari in ogni tr gli elementi in posizione

* Questi selettori sono zero-based: utilizzano come indice iniziale lo 0
* `$(:eq(n))`, `$(:lt(n))` e `$(:gt(n))` Permettono di selezionare gli elementi in posizioni uguale, maggiore o minore di n

selettore|descrizione
---|---
$("tr:eq(4)")|il quinto elemento tr
$("tr:lt(4)")|i primi cinque tr
$("tr:gt(4)")|dal sesto tr in poi
---
## Selettori Custom

selettore|descrizione
---|---
:button| seleziona tutti i bottoni
:checkbox| seleziona tutte le checkbox
:radio| seleziona tutti i radio button
:checked| seleziona le check box e i radio button che sono selezionati
:disabled, :enabled| elementi di input disabilitati o abilitati
$("li:not(.evidenziato)")| gli elementi li che non hanno classe evidenziato
:hidden| elementi nascosti
:visible| elementi visisbili
:text| seleziona textbox
:filter(selettore)|applica un ulteriore selettore all'insieme selezionato
:contains(cerca)|seleziona gli elementi che contengono il testo "cerca"
---


Selettore | Esempio | Seleziona
--- | --- | ---
 \* | $("*") | Tutti gli elementi
 \#id | $("#lastname") | L'elemento con id lastname
 .class | $(".intro") | Tutti gli elementi con classe intro
 element | $("p") | Tutti gli elementi p
 .class.class | $(".intro.demo") | Tutti gli elementi con le classi intro e demo
 :first | $("p:first") | Il primo elemento p
 :last | $("p:last") | L'ultimo elemento p
 :even | $("tr:even") | Tutti gli elementi tr pari
 :odd | $("tr:odd") | Tutti gli elementi tr dispari
 :eq(index) | $("ul li:eq(3)") | Il quarto elemento nella lista (l'indice parte da 0)
 :gt(no) | $("ul li:gt(3)") | Elementi della lista con indice superiore a 3
 :lt(no) | $("ul li:lt(3)") | Elementi della lista con indice minore di 3
 :not(selector) | $("input:not(:empty)") | Tutti gli input che non sono vuoti

---

Selettore | Esempio | Seleziona
--- | --- | ---
 :header | $(":header") | Tutte le intestazioni (h1, h2 ecc.)
 :animated | $(":animated") | Tutti gli elementi animati
 :contains(text) | $(":contains('test')") | Tutti gli elementi che contengono la stringa specificata
 :empty | $(":empty") | Tutti gli elementi privi di nodi figlio
 :hidden | $("p:hidden") | Tutti gli elementi p nascosti
 :visible | $("table:visible") | Tutte le tabelle visibili
 s1,s2,s3 | $("th,td,.intro") | Tutti gli elementi a cui corrispondono i rispettivi selettori
 [attribute] | $("a[href]") | Tutti gli elementi a con un attributo href
 [attribute=value] | $("a[href='default.htm']") | Tutti gli elementi a con attributo href uguale a default.htm
 [attribute!=value] | $("a[href!='default.htm']") | Tutti gli elementi a con attributo href diverso da default.htm
 [attribute$=value] | $("img[src$='.jpg']") | Tutti gli elementi img con attributo src che termina con .jpg

---

Selettore | Esempio | Seleziona
--- | --- | ---
 :input | $(":input") | Tutti gli elementi di input (input, textarea ecc.)
 :text | $(":text") | &lt;input type="text"/&gt;
 :password | $(":password") | &lt;input type="password"/&gt;
 :radio | $(":radio") | &lt;input type="radio"/&gt;
 :checkbox | $(":checkbox") | &lt;input type="checkbox"/&gt;
 :submit | $(":submit") | &lt;input type="submit"/&gt;
 :reset | $(":reset") | &lt;input type="reset"/&gt;
 :button | $(":button") | &lt;input type="button"/&gt;
 :image | $(":image") | &lt;input type="image"/&gt;
 :file | $(":file") | &lt;input type="file"/&gt;
 :enabled | $(":enabled") | Elementi di input attivi
 :disabled | $(":disabled") | Elementi di input disabilitati
 :selected | $(":selected") | Elementi di input selezionati
 :checked | $(":checked") | Elementi di input spuntati (checkbox)

---

## Selettori principali.

* Selettore di ID => $("#blocco")
* Selettore di Classe => $(".elenco")
* Selettore tramite nome TAG => $("p")
* Selettore tramite attributi => $("[title*= titolo]")

---

```javascript
<body>
<div id="blocco">  <!-- $('#blocco') -->
<p><strong>ELENCO:</strong> III C </p> $("strong") $("p strong")
<ul class="elenco"> <!-- $('.elenco') -->
<li>PAOLO</li>
<li>PIETRO</li>
<li>CARLO</li>
<li>YASMINE</li>
</ul>
<strong>Fine elenco</strong> $("strong")
</div>
</body>
```
