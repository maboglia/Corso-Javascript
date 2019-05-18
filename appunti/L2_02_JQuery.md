# Esempi Jquery

## SELETTORI
I Selettori in jquery permettono di prendere il controllo di uno o più
oggetti di una pagina web, per seleziona un elemento si usa la
funzione $ a cui viene passato un "qualcosa"

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
