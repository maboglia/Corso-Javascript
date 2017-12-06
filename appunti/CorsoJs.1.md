# JavaScript nel browser
    Window 
    DOM 
    Eventi 
    AJAX 

## Window Object

L'oggetto __Window__ è il più alto livello di oggetti JavaScript che corrispondono alla finestra del browser.

## Timers
Sono funzioni invocate dopo un tempo determinato.

`setTimeout()` 
Pianifica la invocazione dopo un tempo determinato.

`setInterval()` 
Pianifica l'invocazione dopo un intervallo di tempo.

`clearTimeout()`, `clearInterval()` 
Resetta i timer.

### Per esempio

    setTimeout(function(){alert('asdf')},10000)

    setInterval(function(){alert('asdf')},10000)
                
## API Window

`location` 
array oggetto che rappresenta la url attuale.

`history` 
back - forward - go

`navigator`

`screen` 
fornisce informazione relativa al browser e alla risoluzione.

Funzioni per dialog
Window fornisce funzioni per finestre di dialogo.

`alert(messaggio)` 
`res=confirm(messaggio)` 
`res=prompt(messaggio,valore)` 

# DOM
DOM (Document Object Model), è una interfaccia di programmazione per documenti in HTML e XML. Fornisce una rappresentazione strutturata del documento (in forma di una struttura di albero), e definisce un modo per accedervi, Inoltre può modificarne stile e contenuto.

DOM permette un accesso alla struttura di una pagina HTML mediante la mappatura degli elementi di questa pagina in un albero di nodi. Ogni elemento se converte in un nodo e ogni porzione di testo in un nodo di testo.

### API DOM
La manipolazione del contenuto nel browser dipende da un congiunto di funzioni e attributi che son provisti per l'oggetto document, che è di tipo HTMLDocument.

* Maggiori informazioni: http://www.javascriptkit.com/domref/
* Rappresentazione di un documento HTML
* Notazione di navigazione
* Gerarchia di classi DOM
* Fonte: http://stackoverflow.com 

# Selezionare elementi
## Selettori (I)
Esistono molti metodi di selezione di elementi.
* document.getElementById(id) 
* document.getElementsByName(name) 
* document.getElementsByTagName(tagname) 
* document.getElementByClassName(classname) 
## Selettori (II)
Addizionalmente ci sono selettori di tipo CSS.
* document.querySelector(selector) 
* document.querySelectorAll(selector)

# Atraversare il DOM

## Traversing(I)
Una volta stabilito un punto di partenza, si può percorrere la ramificazione
* parentNode 
* childNodes 
* firstChild 
* lastChild 
* nextSibling 
* previousSibling 
## Tipi di nodi
i nodi hanno alcune proprietà che si possono consultare, per vederne le caratteristiche.
* nodeType 
* nodeValue 
* nodeName 
## Traversing (II)
* children 
* firstElementChild 
* lastElementChild 
* nextElementSibling 
* previousElementSibling 
* childElementCount 

## Manipolazione di elementi
Una volta visti i metodi per selezione e introspezione, vediamo come manipolare il DOM.

## Attributi
Esistono metodi specifici per l'accesso agli attributi di un elemento.
* getAttribute 
* setAttribute 
* hasAttribute 
* removeAttribute 
## Contenuti (I)
Esistono metodi per la manipolazione del contenuto.
* innerHTML 
* outerHTML 
* insertAdjacentHTML 
* beforebegin 
* afterbegin 
* beforeend 
* afterend 
## Contenuti (II)
per accedere al contenuto di un elemento, esistono due metodi
* textContext, per HTMLElement
* data, per Node

## Creazione di nodi
Esistono tre metodi per la creazione di nuovi nodi.
* createElement 
* createTextNode 
* cloneNode 
## Manipolazione di elementi
Ci sono alcune funzioni per la manipulazione di nodi dell'albero.
* appendChild 
* insertBefore 
* removeChild 
* replaceChild 
## Posizionamento (I)
Esistono vari metodi utili per conoscere le posizioni degli elementi, E le loro dimensioni.
* w.pageXOffset 
* w.pageYOffset 
* w.innerWidth 
* w.innerHeight 
## Posizionamento (II)
* getBoundingClientRect 
* document.elementFromPoint(x,y) 
* scrollTo(x,y) 
* scrollBy(x,y) 
* scrollIntoView(x,y) 

# Gestione dei Form HTML
i form si possono accedere come qualsiasi altro elemento. 
Inoltre esiste il parametro `document.forms` questi si possono accedere attraverso suoi attributi name e id.

per accedere agli elementi del form, si utilizza la variabile 'elements'.
    `document.forms.name.element.input`


# Stili
per la modifica di proprietà CSS, si usa la propietà 'style'.
Inoltre è possibile strutturare un documento in modo che scambiarsi delle classi e questi riflettono cambi nella presentazione di documentos.
    `document.querySelector('selector').style`

# Eventi
Un evento è qualcosa che scatena una azione specifica nel browser.

## Un evento accade quando un utente:

* Termina di caricare una pagina. 
* Clicca un button. 
* Esegue azioni col mouse o la taastiera. 

Esistono molte forme di aggiungere eventi ad una pagina.
* Categorie di eventi
* Device-dependent input events.
* Tastiera, mouse, dispositivi Touch.
* Device-independent input events
* Click.
* User interface events
* Fuoco, cambi, submit.
* State-change events
* Cambio di stato in generale.
* API-specific events
* DnD, Players.
* Timers and error handlers
* Temporizzatori, errori.

## Cattura di eventi

Esistono due metodi per registrare eventi.
```javascript
b.onclick=function(){console.log('asdf')}
```
```javascript
b.addEventListener('click',function(){
    console.log('asd')
},false)
```
Maggiori informazioni: http://www.quirksmode.org/js/events_mouse.html


# Ajax

AJAX (Asynchronous JavaScript And XML), è una tecnica di sviluppo web per creare applicazioni interattive. Con AJAX è possibile realizzare cambi sulle pagine senza necesità di recaricarle completamente, migliorando la interattività, velocità e usabilità nelle applicazioni. 

### Fonte: https://en.wikipedia.org/wiki/AJAX 

### Esempio
```javascript
var ajax=new XMLHttpRequest()
ajax.open('get',url)
ajax.onload=function(){}
ajax.send()
```            

# JSON
    JSON, acronimo di JavaScript Object Notation, è un formato leggero per lo scambio di dati. 
    JSON è un sottotipo della notazione literal di oggetti di JavaScript che non richiede l'uso di XML.

    Fonte: https://en.wikipedia.org/wiki/JSON 

## Trasformazione
Esistono due metodi per la transformazione tra JSON e Oggetti di JavaScript.

    JSON.stringify Oggetto -> JSON
    Ritorna una stringa in formato JSON corrispondente ad un valore specificato.

    JSON.parse JSON -> Oggetto
    Interpreta una stringa in formato JSON e ritorna il suo oggetto corrispondente.

### Per esempio
```json
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
    }
}
```