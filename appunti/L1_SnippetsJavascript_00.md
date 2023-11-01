# Snippets Javascript

---

## Accedere al DOM: individua i single element della pagina

//by Id

```javascript
var header = document.getElementById("header");
var navItems = document.getElementById("nav");
var container = document.getElementById("container");
var footer = document.getElementById("footer");

var demoSezione = document.getElementById("demo");
var titoloSezione = document.getElementById("demoSectionTitle");
var titoloArticolo = document.getElementById("demoArticleTitle");
var firstParagraph = document.getElementById("first_paragraph");
var secondParagraph = document.getElementById("second_paragraph");
var demoFooterTitle = document.getElementById("demoFooterTitle");

var rightSidebar = document.getElementById("right_sidebar");
var listaFunzioni_js1 = document.getElementById("lista_funzioni_js1");

//by tagname
var allLinks = document.getElementsByTagName("a");
var allH2 = document.getElementsByTagName("h2");
var unorderedLists = document.getElementsByTagName("ul");
var orderedLists = document.getElementsByTagName("ol");
var mainContent = document.getElementsByTagName("main");

var linkNav = document.getElementById("nav").getElementsByTagName("a");
var linkSide = document.getElementById("right_sidebar").getElementsByTagName("a");
```

---

##

```javascript


function pulisciTitolo () {
 //sostituisci testo
  titoloArticolo.innerHTML = "";
}
```

---

##

```javascript

function pulisciArticolo () {
 //sostituisci testo
  firstParagraph.innerHTML = "";
  secondParagraph.innerHTML = "";
}
```

---

##

```javascript

function scriviArticolo (argument) {
 //sostituisci testo
 // first_paragraph.innerHTML = argument;

 //aggiungi testo metodo 1

 var nuovoParagrafo = document.createElement("p");
 nuovoParagrafo.innerHTML = argument;
 first_paragraph.appendChild(nuovoParagrafo);

}
```

---

##

```javascript

function scriviTitolo (argument) {
 titoloArticolo.innerHTML = argument;
}
```

---

##

```javascript

//array di allievi
var allievi = ['Romolo', 'Numa Pompilio'];

```

---

##

```javascript


function scriviArticoloCOMPLETO (argument1,argument2) {
 first_paragraph.innerHTML = argument1;
 second_paragraph.innerHTML = argument2;
}


```

---

##

```javascript


function infoDOM_0 () {
 // body...

// che tipo di nodo
console.log("Node of type: ", titoloSezione.nodeType);
console.log("Inner HTML: ", titoloSezione.innerHTML);
console.log("Child nodes: ", titoloSezione.childNodes.length);

// quanti link ci sono nella pagina?
console.log("Links: ", allLinks.length);
// quante liste?
console.log("Ordered lists: ", orderedLists.length);
console.log("Unordered lists: ", unorderedLists.length);

// elementi combinati
//console.log("Link  in mainNav: ", linkNav.length);
console.log("Link  in sidebar: ", linkSide.length);

}
```

---

##

```javascript

//risistema tutto
function restore_home(){
 header.style.border = "none";
 demoSezione.style.color = "black";

 pulisciTitolo();
 pulisciArticolo();

 scriviTitolo("Titolo Articolo");
 scriviArticolo("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>");

}
```

---

##

```javascript
//modificare il DOM
function modificaDOM_1(){
 header.style.border = "1px solid black";
 //allH2.style.color = "#C00";
 demoSezione.style.color = "#C00";

 
}
```

---

##

---

##

```javascript

function Calcola(){
 op1 = 5;
 op2 = 4;
 somma = op1 + op2;
 differenza = op1 - op2;
 prodotto = op1 * op2;
 quoziente = op1 / op2;
 var testo;
 testo = ("<br/>Il risultato dell'addizione è " + somma);
 testo += ("<br/>Il risultato della sottrazione è " + differenza);
 testo += ("<br/>Il risultato della moltiplicazione è " + prodotto);
 testo += ("<br/>Il risultato della divisione è " + quoziente);
 
 scriviTitolo("Funzione Calcola: le 4 operazioni aritmetiche dati i parametri 5 e 4");
 scriviArticolo(testo);
 }
```

---

##

```javascript

function CalcolaTable()
 { var test = ('<table class="table">');
  for (i=1;i<=100;i++)
   { test += ('<tr>');
    for (j=1;j<=10;j++)
    { test += ('<td>');
     test += (i*j);
     test += ('</td>');
    }
    test += ('</tr>');
   }
  test += ('</table>');
 scriviTitolo("La tavola pitagorica");
 scriviArticolo(test);
 //document.write(test);
    /*
 $("#first_paragraph tr:first").css('background', '#ccc');
 $("#first_paragraph tr:last").css('background', '#cc0');
 $("#first_paragraph tr:even").css('color','green');
 $("#first_paragraph tr:odd").css('fontWeight','900');
 $("#first_paragraph td:not(td:eq(50))").css('color','darkgreen');

 $("#first_paragraph:parent").css('border','3px solid red ');
 
 $("td:contains('56')").css('fontSize', '2em');

 $("tr:even td").children().css('border', '1px solid green');
var i=0
 
 $("tr:even td").each(function(index, el) {
  i++;
  // $(el).html(i * 3); 
  $(el).after("<td>..</td>"); 
  // $(el).parent().append('Some text'); 
 });*/

 }
```

---

##

```javascript

function Quadrati(){ 
   document.writeln("Stampo i quadrati dei primi 15 numeri");
  for (i=1;i<=15;i++)
   document.writeln(i*i + "<br>");
   document.writeln("Fine elaborazione");
   document.writeln("Torna indietro col tasto del browser");
 }

```

---

##

```javascript

function TestaCroce(){
 var coinFace = Math.floor(Math.random() * 2);
 while(coinFace === 0){
  console.log("Testa! Prova ancora...");
  var coinFace = Math.floor(Math.random() * 2);
 }
 console.log("Croce! Terminato.");
}
```

---

##

```javascript

function Divisore35 () {
 
 for(var i = 1; i < 21; i++){
     if(i % 3 === 0 && i % 5 === 0){
         console.log(i + " è divisibile per 3 e per 5!");
     }else if(i % 3 === 0){
         console.log(i + " è divisibile per 3!");
     }else if(i % 5 === 0){
         console.log(i + " è divisibile per 5!");
     }else{
         console.log(i);
     }
 }

}
```

---

##

```javascript

function arrayCitta (argument) {
// Introduction to 'For' Loops in J  excercise 11/13

 var cities = ["Torino", "Milano", "Roma", "Napoli","Venezia","Bologna"];

 for (var i = 0; i < cities.length; i++) {
     console.log("Vorrei visitare " + cities[i]);
 }


}
```

---

##

```javascript

function arrayNomi (argument) {
// Introduction to 'For' Loops in J  excercise 12/13

 var names = ["Mauro","Paolo","Marco","Matteo","Giovanni"];
 for (var i = 0; i < names.length; i ++) {
     console.log("Un mio amico si chiama " + names[i]);
 }
}

```

---

##

```javascript

function promptColori (argument) {
// More on Control Flow in JS 5/14
 var color = prompt("Qual è il tuo colore primario preferito?","Scrivi il tuo colore preferito qui");

 switch(color) {
   case 'rosso':

     console.log("Red's a good color!");
     scriviArticolo("Red's a good color!");
     break;
   case 'blu':
     console.log("That's my favorite color, too!");
     scriviArticolo("That's my favorite color, too!");
     break;
   case 'giallo':
       console.log("makes me think of parasols in spring");
       scriviArticolo("makes me think of parasols in spring");
       break;  
   default:
     console.log("I don't think that's a primary color!");
     scriviArticolo("I don't think that's a primary color!");
 }
}
```

---

##

```javascript

var miaVariabile = 5;
var miaVariabile2 = 3.4;
var miaVariabile3 = 'scrivo qualcosa';
var miaVariabile4 = true;
var miaVariabile5 = miaVariabile * miaVariabile2;

// if(miaVariabile > 10) 
//  alert(miaVariabile4);
// else
//  console.log(miaVariabile3);

//questo è un commento su una riga
miaVariabile2 = 4;
//alert(miaVariabile5);

/*
mentre  questo 

è un commento su più righe
*/
miaVariabile5 =  miaVariabile * miaVariabile2;
//alert();

```

---

##

```javascript


//console.log(miaVariabile + miaVariabile2);
//alert(miaVariabile + miaVariabile2);

function faiAddizioni(x, y){
 // alert("messaggio dalla funzione");
 //console.log("rimessaggio dalla mia funzione");

 //memorizzo in una variabile locale il risultato della somma tra due variabili esterne
 if (x <10) 
  x=10;

 var somma = x + y;

 //console.log("Il valore della somma delle variabili è "      +        somma);

 //ritorna il valore dell'addizione e interrompe il flusso del codice della funzione
 return somma;


}
```

---

##

```javascript

// console.log(faiAddizioni(5,4));
//alert(faiAddizioni(5,4));
var somma1 = faiAddizioni(6,5);
var somma2 = faiAddizioni(51,14);
var somma3 = faiAddizioni(somma1, somma2);

function modificaPagina(){



var barralaterale = document.getElementById("sidebar");
var nuovaTestatina = document.createElement("h1");
nuovaTestatina.innerHTML = "testo nuova testatina";
barralaterale.innerHTML = "";
barralaterale.appendChild(nuovaTestatina);

//document.write(barralaterale.innerHTML);
//document.write(miaVariabile3 + miaVariabile3);
}

//console.log(somma3);
```

---

##

```javascript



//------------------------------------------------
//Cambia lo sfondo della pagina

var Colori = new Array("red", "green", "blue", "black", "cyan", "#660099");
var count = 0;
var stop = false;

function setcolor()     
{
 if (stop!=true)           
     {
  document.bgColor=Colori[count];

  

  count++;

  if (!Colori[count])
  {
   count = 0; 
  }
  window.setTimeout("setcolor()",2000);
 }
}
```

---

##

```javascript

//---------------------------------------20160321---------

var studente = {
 nome  : "Paolo",
 cognome  : "Bogliaccino",
 eta   : 1,
 coloreOcchi : "azzurri",
 vivace  : true,
 giochi  : ['orsetto', 'puzzle', 'trenino']
};

var corsoITS = {
 istituto  : "ITS",
 indirizzo  : "Piazza dei Mestieri 2",
 numeroAllievi : 28,
 annoDiCOrso  :  [1,2],
 primoAnno  :  true,
 secondoAnno  :  false,
 aule   :  [3, 4, 5, 8],
 materie   :  ['Web Standard II', 'Java per Android'] 
};


function presentaStudente(){

var studente = {
 nome  : "Paolo",
 cognome  : "Bogliaccino",
 eta   : 1,
 coloreOcchi : "azzurri",
 vivace  : true,
 giochi  : ['orsetto', 'puzzle', 'trenino']
};
 var articolo = "Nome: " + studente.nome + "<br/> ";
  articolo += "cognome: " + studente.cognome + "<br/> ";
 articolo += "giochi: " +   "<br/> ";
 articolo += "<ul> ";
  for (var i = 0; i < studente.giochi.length; i++) {
   
   articolo += "<li>giochi: " + studente.giochi[i] + "</li> ";
  };

 articolo += "</ul> ";

 scriviArticolo(articolo);

}
```

---

##

```javascript


//----------------------------costruisco slideshow con setInterval()------

function swapImage(){
 var miaImg = document.getElementById("fotoCopertina");

 if(miaImg.src.match("fantascienzax.jpg")){
  // alert("corrisponde");
  miaImg.src = "images/effetto_noir.jpg";
 }
 else
  miaImg.src = "images/fantascienzax.jpg";
 

}
 //dati
 //dati
 var indiceImmagini = 0;
 var miaImg = document.getElementById("fotoCopertina");

function slideshow(){
 
 var mieImmagini = [
  'images/banksy1.jpg',
  'images/banksy2.jpg',
  'images/banksy3.jpg',
  'images/banksy4.jpg',
  'images/banksy5.jpg',
  'images/banksy6.jpg',
  'images/banksy7.jpg'
 ];
 

 miaImg.setAttribute("src", mieImmagini[indiceImmagini]);

 indiceImmagini++;
 console.log(indiceImmagini);

 if(indiceImmagini>=mieImmagini.length){
  indiceImmagini = 0;
 }
}
```

---

##

```javascript


// setTimeout(swapImage, 5000);
var intervallo = setInterval(slideshow, 3000);

miaImg.onclick = function(){
 clearInterval(intervallo);
 console.warn('hai bloccato lo slideshow');
};

```
