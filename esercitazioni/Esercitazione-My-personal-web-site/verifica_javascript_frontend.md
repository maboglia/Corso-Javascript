# My Personal Web site

* Esercitazione: realizzare un sito web single page responsive 
* Tecnologie: Html5, CSS, Javascript
* Librerie: è possibile utilizzare framework e librerie

![wireframe](./personal_web_wf.png)


## Organizzazione del codice sorgente

* NomeProgetto
  * file index.html 
  * cartella css,
  * cartella per **js** e **json**,
  * cartella per immagini,
  * cartella per font (opzionale).



## Sezioni
---

## Navbar principale

* Posizionare una barra dinavigazione *fixed* posizionata in alto con i collegamenti alle sezioni elencate di seguito.
* L'intestazione deve essere cliccabile e riportare a inizio pagina, deve contenere: nome, cognome e *job title* (la professione che vorresti di fare tra 5 anni).
* le sezioni della pagina dovranno essere raggiunte con scorrimento verticale morbido (**JQuery** smooth scroll animate con )
* NB: tutte le informazioni pubblicate, compresi i collegamenti alle immagini, dovranno essere **letti da un file** in formato **json** (**JS:** JSON.parse(), **JQuery**: getJSON())

## elevator pitch:

* la prima *section* è il punto di ingresso del tuo sito. 
* Deve contenere un buon *elevator pitch*: è quel che diresti ad un interlocutore che ti chiede di cosa ti occupi, mentre l’ascensore vi porta velocemente al piano, non c’è molto tempo!, usa poche parole/frasi ben studiate.

* Questa sezione deve essere rappresentata con uno *slideshow* orizzontale. 
* La sezione si deve differenziare anche a livello tipografico. 
* Puoi utilizzare il componente carousel di bootstrap

## about me:

* la section deve impaginare una o più foto e una short bio.
* La biografia deve contenere diversi paragrafi (almeno tre), 
* devi impostarla come *slideshow* orizzontale, 
* con effetti di scorrimento e cambio temporizzato delle slide. (**JS:** setInterval())
* ogni paragrafo occupa una slide
* rendi disponibili dei controlli per scorrere i paragrafi

## skill:

* questa section evidenzia le principali attività competenze e relativa autovalutazione 
* le competenze devo essere rappresentate graficamente (skill-bar animata con **JQuery**) 
* ed esporre informazioni veritiere (solo aspetti positivi!) su linguaggi, tecnologie, software ed altri saperi

## portfolio:

* Il portfolio è una collezione fotografica (o slide graficamente curate) dei lavori realizzati.
* La sezione deve essere impaginata come una galleria fotografica, 
* cliccando su una miniatura si aprirà una finestra modal che permetterà di scorrere le immagini ingrandite. 
* Si può usare un plugin **JQuery** per lo *slideshow* di immagini.


## contact:

* Inserisci un modulo preimpostato per i contatti: email, oggetto, descrizione 
* All'invio del modulo, verifica con **js** che i campi siano correttamente compilati, altrimenti informa l'utente.
* Non occorre implementare l'invio del modulo.

## footer:

* in questa sezione puoi indicare un indirizzo email ‘professionale’ ed i contatti social, da implementare graficamente usando **font-awesome** o simili

## altri componenti

* completa la pagina con  pulsante "torna su", possibilmente da attivare quando inizia lo scorrimento della pagina,