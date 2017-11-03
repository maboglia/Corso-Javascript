


## #Una funzione può essere assegnata a una variabile.
var f=function(x){
    console.log(x)
}
f(10)

## #Come una funzione può essere assegnata a una variabile, è possibile che una funzione riceva altre funzioni come parte di suoi parametri.
function f(x,g){
    return g(x)
}

var a=f(10,function(x){return x*2})
console.log(a) // 20

## #Inoltre una funzione può essere di forma anonima, E si può eseguire nella definizione.
var a=(function(x,y){
    return x+y
}(1,2))

console.log(a) // 3

## #Altra caratteristica importante sulle funzioni in JavaScript, è che può definirsi una funzione dentro un'altra funzione.
function a(){
    var x=10
    function b(){
        return x+1
    }
    return b()
}
console.log(a())
## Varargs
Come in Java, una funzione può essere invocata con più parametri di quelli definiti, o con meno.
Tutti i parametri che sono stati inviati a una funzione possono essere acceduti attraverso l'oggetto "arguments".
function a(){
    console.log(arguments)
}

a(1,2,3,4,5,6)
## Hoisting
Le variabili in JavaScript hanno ambito di funzione, questo significa che tutte le variabili dichiarate in una funzione sono visibili nel corpo della funzione. Anche prima di essere dichiarate.
Più informazioni: 
http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html 
Esempi
var a='asdf';
(function b(){
    console.log(a)
})() // asdf
var a='asdf';
(function b(){
    console.log(a)
    var a='qwer'
})() // undefined
## Oggetti
Un oggetto è una valore composto, che aggrega molteplici valori, siano essi primitivi o altri tipi di collezione.
Un oggetto in JavaScript può essere definito in 3 modi:
Definizione literal. 
Instanziazione di classi. 
## Creazione a partire da un prototipo. 
## #1ª Forma: Definizione literal
E' una definizione di proprietà di tipo chiave:valore.
a={
    x:1,
    y:[1,2,3,4,5],
    z:function(a){return a}
}

## #2ª Forma: Instanziazione di classi
Altra maniera per definire un oggetto è instanziando una classe di un tipo di oggetto pre-definito in JavaScript o con una propria definizione di classe.
a=new Object()
b=new String('asdf')

## Oggetti come array asociativo
Le variabili di un oggetto si possono accedere come se fossero array associativi:
a={x:1,y:2}
console.log(a.x)
console.log(a['x'])

#Classi
Una classe in JavaScript è una collezione di oggetti che ereditano proprietà di un medesimo prototipo.
function A(){
    this.a=10
    this.b=11
}
a=new A()

#Prototipi
Un prototipo è un oggetto associato all'oggetto che sta definendo, e del quale va a ereditare proprietà.
E' stabilito quando l'oggetto è creato.
Si può accedere attraverso la variabile prototype
Usi
Si usa per aggregare funzioni a una definizione anche dopo aver istanziato l'oggetto.
a=new String('asdf')
String.prototype.salutare=function(){
    return 'ciao'
}
console.log(a.salutare())
Questa non è una pratica raccomandata!
Maggiori informazioni: stackoverflow
Usi
può servire per realizzare ereditarietà tra oggetti.
function A(){
    this.a=100
    this.x=function(){
        return this.a
}}t
function B(){this.b=100}
B.prototype=new A()
b=new B()
console.log(b.x())
3ª Forma: Object.create
Costruisce un nuovo oggetto a partire da un prototipo stabilito.
                
function A(){
    this.f=function(){return 'asdf'}
}
a=new A()
b=Object.create(a)
console.log(b.f())

Object.keys
Ritorna un array di nomi delle proprietà enumerabili di un oggetto.
function A(){
    this.x=1
    this.y=2
}
console.log(Object.keys(new A()))
Object
La classe Object, possiede vari metodi:
toString()
Ritorna la rappresentazione in stringa di un oggetto.
valueOf()
Ritorna la forma primitiva di un oggetto.
JSON
JSON, acronimo di JavaScript Object Notation, è un formato leggero per lo scambio di dati. JSON è un sottotipo della notazione literal di oggetti di JavaScript che non richiede l'uso di XML.
Fonte: https://en.wikipedia.org/wiki/JSON 

Esempio
{"menu": {
    "id": "file",
    "value": "File",
    "popup": {
        "menuitem": [
            {"value": "New", "onclick": "CreateNew()"},
            {"value": "Open", "onclick": "Open()"},
            {"value": "Close", "onclick": "Close()"}
        ]
    }
    }}
Trasformazione
Esistono due metodi per la transformazione tra JSON e Oggetti di JavaScript.
JSON.stringify Oggetto -> JSON
Ritorna una stringa in formato JSON corrispondente ad un valore specificato.
JSON.parse JSON -> OggEtTO
Interpreta una stringa in formato JSON e ritorna il suo oggetto corrispondente.
JavaScript nel browser
Window DOM Eventi AJAX 
Window Object
L'oggetto Window è il più alto livello di oggetti JavaScript che corrispondono alla finestra del browser.

Timers
Sono funzioni invocate dopo un tempo determinato.
setTimeout() 
Pianifica la invocazione dopo un tempo determinato.
setInterval() 
Pianifica l'invocazione dopo un intervallo di tempo.
clearTimeout() clearInterval() 
Resetta i timer.
Esempi:
setTimeout(function(){alert('asdf')},10000)

setInterval(function(){alert('asdf')},10000)
                
API Window
location: 
array oggetto che rappresenta la url attuale.
history 
back - forward - go
navigator, screen 
fornisce informazione relativa al browser e alla risoluzione.
Funzioni per dialog
Window fornisce funzioni per finestre di dialogo.
alert(mensaje) 
res=confirm(mensaje) 
res=prompt(mensaje,valor) 
DOM
DOM (Document Object Model), è una interfaccia di programmazione per documenti in HTML e XML. Fornisce una rappresentazione strutturata del documento (in forma di una struttura di albero), e definisce un modo per accedervi, Inoltre può modificarne stile e contenuto.
DOM permette un accesso alla struttura di una pagina HTML mediante la mappatura degli elementi di questa pagina in un albero di nodi. Ogni elemento se converte in un nodo e ogni porzione di testo in un nodo di testo.
API DOM
La manipolazione del contenuto nel browser dipende da un congiunto di funzioni e attributi che son provisti per l'oggetto document, che è di tipo HTMLDocument.
Maggiori informazioni: http://www.javascriptkit.com/domref/
Rappresentazione di un documento HTML

Notazione di navigazione

Gerarchia di classi DOM
 
Fonte: http://www.ikdoeict.be/ 
 
Fonte: http://stackoverflow.com 
Selettori (I)
Esistono molti metodi di selezione di elementi.
document.getElementById(id) 
document.getElementsByName(name) 
document.getElementsByTagName(tagname) 
document.getElementByClassName(classname) 
Selettori (II)
Addizionalmente ci sono selettori di tipo CSS.
+ document.querySelector(selector) 
document.querySelectorAll(selector) 
Traversing(I)
Una volta stabilito un punto di partenza, si può percorrere la ramificazione
parentNode 
childNodes 
firstChild 
lastChild 
nextSibling 
previousSibling 
Tipi di nodi
i nodi hanno alcune proprietà che si possono consultare, per vederne le caratteristiche.
nodeType 
nodeValue 
nodeName 
Tarversing (II)
children 
firstElementChild 
lastElementChild 
nextElementSibling 
previousElementSibling 
childElementCount 
Attributi
Esistono metodi specifici per l'accesso agli attributi di un elemento.
getAttribute 
setAttribute 
hasAttribute 
removeAttribute 
Contenuti (I)
Esistono metodi per la manipolazione del contenuto.
innerHTML 
outerHTML 
insertAdjacentHTML 
beforebegin 
afterbegin 
beforeend 
afterend 
Contenuti (II)
per accedere al contenuto di un elemento, esistono due metodi, dipende se si tratta come HTML Element o Node
textContext, per HTMLElement. 
data, per Node. 
Manipolazione di elementi
Una volta visti i metodi per selezione e introspezione, vediamo come manipolare il DOM.
Creazione di nodi
Esistono tre metodi per la creazione di nuovi nodi.
createElement 
createTextNode 
cloneNode 
Manipolazione di elementi
Ci sono alcune funzioni per la manipulazione di nodi dell'albero.
appendChild 
insertBefore 
removeChild 
replaceChild 
Posizionamento (I)
Esistono vari metodi utili per conoscere le posizioni degli elementi, E le loro dimensioni.
w.pageXOffset 
w.pageYOffset 
w.innerWidth 
w.innerHeight 
Posizionamento (II)
getBoundingClientRect 
document.elementFromPoint(x,y) 
scrollTo(x,y) 
scrollBy(x,y) 
scrollIntoView(x,y) 
Form
i form si possono accedere come qualsiasi altro elemento, Inoltre esiste il parametro 'document.forms' questi si possono accedere attraverso suoi attributi name e id.
per accedere agli elementi del form, si utilizza la variabile 'elements'.
document.forms.name.element.input
Stili
per la modifica di proprietà CSS, si usa la propietà 'style'.
Inoltre è possibile strutturare un documento in modo che scambiarsi delle classi e questi riflettono cambi nella presentazione di documentos.
document.querySelector('selector').style
Eventi
Un evento è qualcosa che scatena una azione specifica nel browser.
Tipicamente un evento accade quando un utente:
Termina di caricare una pagina. 
Clicca un button. 
Esegue azionicol mouse o la taastiera. 
Esistono molte forme di aggiungere eventi ad una pagina.
Categorie di eventi
Device-dependent input events.
Tastiera, mouse, dispositivi Touch.
Device-independent input events
Click.
User interface events
Fuoco, cambi, submit.
State-change events
Cambio di stato in generale.
API-specific events
DnD, Players.
Timers and error handlers
Temporizzatori, errori.
Cattura di eventi
Esistono due metodi per registrare eventi.
b.onclick=function(){console.log('asdf')}
b.addEventListener('click',function(){
    console.log('asd')
},false)
Maggiori informazioni: http://www.quirksmode.org/js/events_mouse.html
Ajax
AJAX (Asynchronous JavaScript And XML), è una tecnica di sviluppo web per creare applicazioni interattive. Con AJAX è possibile realizzare cambi sulle pagine senza necesità di recaricarle completamente, migliorando la interattività, velocità e usabilità nelle applicazioni. 
Fonte: https://en.wikipedia.org/wiki/AJAX 
Esempio
var ajax=new XMLHttpRequest()
ajax.open('get',url)
ajax.onload=function(){}
ajax.send()
            