# Esercizi JavaScript

### warm up 1. 
Calcolare la somma dei primi quattro multipli di 13.

### warm up 2. 
Verificare se la somma dei primi sette numeri primi è maggiore della somma delle prime tre potenze di due.

### warm up 3. 
Verificare se 135 è dispari, 147 è pari, 12 è dispari, 200 è pari.

### warm up 4. 
Calcolare l'area di un triangolo rettangolo i cui cateti sono 23 e 17.

### warm up 5. 
Calcolare la circonferenza di un cerchio il cui raggio è 14.

### warm up 6. 
Calcolare l'area di un cerchio il cui diametro è 47.

### warm up 7. 
Calcolare l'area di un trapezio la cui base maggiore è 48, quella minore è 25 e l'altezza è 13.

### warm up 8. 
Verificare se l'area di un quadrato di lato quattro è minore dell'area di un cerchio di raggio tre.

### warm up 9. 
Calcolare il numero dei minuti di una giornata, di una settimana, di un mese di 30 giorni, di un anno non bisestile.

### warm up 10. 
Verificare se conviene acquistare una camicia che costa 63 € in un nego- zio che applica uno sconto fisso di 10 € o in un altro che applica uno sconto del 17%.	

## warm up 11
prompt() + alert()
* Creare uno script che chieda il nome e il cognome all'utente prima che la pagina venga caricata.
* Provare a chiamare una finestra di dialogo (di tipo alert) che contenga la scritta "Benvenuto"+ nome + cognome.
* In fondo alla pagina deve essere scritto "Benvenuto"+ nome + cognome.

## warm up 12
prompt()	
* Creare una pagina che chieda all'utente di fornire la propria autorizzazione al trattamento dei dati.
* Nel caso non sia data, scrivere "Autorizzazione non concessa".
* Nel caso contrario scrivere "Autorizzazione concessa".

	
## warm up 13
prompt() + array[] 
* Creare una pagina in cui il sistema chiede all'utente il proprio nome
* Il sistema verifica il nome e comunica all'utente se è un amministratore o meno
* E' dato un array di nomi che hanno i diritti di amministratore

	
## warm up 14
3 colori
* Chiedere tre colori in input all'utente: uno per il testo, uno per lo sfondo e uno per il titolo.
* Chiedere all'utente la dimensione del carattere di base (da 1 a 7).
* Determinare la dimensione e le caratteristiche di H1 (+3, grassetto), H2 (+2) e H3 (+1, grassetto, corsivo) rispetto alle caratteristiche inserite dall'utente per il carattere.
* Creare un testo in cui siano evidenti queste caratteristiche.

* Controllare che il colore dello sfondo, quello del titolo e quello del testo siano diversi.
* Nel caso due o più dei colori assegnati dall'utente siano uguali, devono essere presenti regole che determinino che colore devono assumere titolo, testo e sfondo.
* Nel caso l'utente inserisca al posto dei tre colori il testo "*"deve essere caricato un foglio di stile esterno.


## warm up 15
* Creare una finestra pop-up per chiedere il nome dell'utente e scrivere sulla pagina HTML il messaggio "Ciao nome" formattato come heading di primo livello (tag h1). 
*Se l'utente non inserisce il nome scrivere il messaggio "Ciao Utente Anonimo!"

## warm up 16
* Preparare uno script che mostri saluto adatto all'ora del giorno 
* (es: Buon pomeriggio, Buona notte, ecc.). 
* Usare l'oggetto Date() e cercare il metodo adatto su un sito di reference JavaScript, 
* http://www.w3schools.com/jsref/default.asp

## warm up 17
* Creare un form HTML in cui l'utente deve introdurre username e password. 
* Non consentire all'utente di schiacciare il bottone Submit se
* Non ha inserito lo username
* La password non ha almeno 5 caratteri

* In questi casi, segnalare un opportuno messaggio di errore a fianco del relativo campo del form.

## warm up 18
* Creare una pagina HTML il cui colore di sfondo vari a seconda delle preferenze dell'utente, che lo seleziona tramite un'interfaccia.

## warm up 19
* Creare un form HTML per selezionare un colore di sfondo da un menu a tendina. Dopo aver scelto il colore dal menu, l'utente deve premere il bottone "Change color".

## warm up 20
* Creare un form HTML per selezionare un colore di sfondo da un menu a tendina. 
* La lista di elementi include alcuni colori e l'opzione "Altro...". 
* Se l'utente sceglie "Altro", deve comparire un campo di testo in cui scrivere il colore desiderato (in inglese, così potete usarlo direttamente come attributo del background). 
* In caso contrario, il campo di testo non deve essere visibile.



## Esercizi

### 1. Calcolare il costo di un viaggio in automobile, sapendo che la lunghezza è 750 Km, che il consumo di gasolio è 3,2 litri ogni 100 Km, che un litro di gasolio costa 1,432 €, che due terzi del percorso prevedono un pedaggio pari a 1,2 € ogni 10 Km.

### 2. Calcolare il costo di una telefonata, sapendo che la durata è pari a 4 minuti e 23 secondi, che il costo alla chiamata è pari a 0,15 €, che i primi 30 secondi sono gratis, che il resto della telefonata costa 0,24 € al minuto.

### 3. Calcolare il costo di un biglietto aereo acquistato una settimana prima della partenza, sapendo che il costo di base è pari a 200 € (se acquistato il giorno della partenza) e che questo costo diminuisce del 2,3% al giorno (se acquistato prima del giorno della partenza).

### 4. Calcolare il costo di un prodotto usando la seguente formula costo=( prezzo prezzo * 0,20 ) − sconto e sapendo che il prezzo è 100 € e lo sconto è 30 €.

### 5. Calcolare la rata mensile di un mutuo annuale usando la seguente formula 
    * rata = importo * (1+tasso) / 12
    * e sapendo che l'importo annuale è 240 € e il tasso è il 5%.


### 6. Definire in JavaScript una funzione che verifica se l'intersezione dell'intervallo [a, b) con l'intervallo [c, d) è vuota.
    * la funzione ha quattro parametri: a, b, c, d.
    * Invocare la funzione con i seguenti valori: 
        * 2, 4, 5, 7;
        * 2, 4, 4, 7;
        * 2, 4, 3, 7;
        * 5, 7, 2, 4; 
        * 4, 7, 2, 4; 
        * 3, 7, 2, 4.
### 7. Definire in JavaScript una funzione che calcola e restituisce la somma delle cifre di un intero che appartiene all'intervallo [0, 100].
    * La funzione ha un parametro: n.
    * Invocare la funzione con i seguenti valori: 0, 1, 23, 99.


### 8. La media aritmetica semplice di n numeri è così definita 
    * [Wikipedia, alla voce Media (statistica)]:
    * m = (x1 + x2 ... + xn) / n

### 9. Definire in JavaScript una funzione che calcola e restituisce la media aritmetica semplice degli elementi di un array a formato da n numeri.
    * La funzione ha un parametro: a.
    * Invocare la funzione con i seguenti valori:
        * [3, 12, 24]
        * [5, 7, 9, -12, 0].
### 10. Dato un array a e un valore k, il numero di occorrenze di k in a è definito
    come il numero degli elementi di a il cui valore è uguale a k.
    * Definire in JavaScript una funzione che calcola e restituisce il numero di
    occorrenze del valore k nell'array a.
    * La funzione ha due parametri: a, k.
    * Invocare la funzione con i seguenti valori:
        * [10, −5, 34, 0], 1
        * [10, −5, 34, 0], −5.
### 11. Definire in JavaScript un predicato che verifica se ogni elemento di un array di numeri (tranne il primo) è pari alla somma degli elementi che lo precedono.
    * La funzione ha un parametro: a.
    * Invocare la funzione con i seguenti valori:
        * [1, 2, 6, 10, 32]
        * [1, 2, 6, 8, 31].
### 12. Definire in JavaScript una funzione che ha come parametro un array a di numeri e che restituisce un nuovo array che contiene le differenze tra gli elementi adiacenti di a.
    * La funzione ha un parametro: a.
    * Invocare la funzione con i seguenti valori:
        * [1, 2, -6, 0, 3]
        * [2, 2, 3, 3, 4, 4].    


### 13. Scrivere un documento HTML contenente un form con i seguenti campi:
* cognome (casella di testo editabile lunga 40 caratteri)
* nome (casella di testo editabile lunga 30 caratteri)
* matricola (casella di testo editabile lunga 12 caratteri)
* regione di residenza (da scegliere da un menu che riporta le 20 regioni italiane)
* email (casella di testo editabile lunga 30 caratteri)
* telefono (casella di testo editabile lunga 15 caratteri)
* richieste particolari (area di testo editabile di 12 righe per 60 colonne)
* bottone di invio
* bottone di reset

Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli:
* verifica che il cognome non sia vuoto;
* verifica che il nome non sia vuoto;
* verifica che la matricola sia un numero;
* verifica che sia stata selezionata una regione;
* verifica che o l'email o il telefono siano non vuoti.

Fare in modo che, nel documento HTML, tale funzione JavaScript venga eseguita quando l'utente invia il modulo.



### 14. Scrivere un documento HTML contenente una form contenente i seguenti campi:
* cognome e nome (casella di testo editabile lunga 50 caratteri)
* sesso (selezionabile tramite due bottoni radio)
* corso (da scegliere da un menu che riporta diversi corsi)
* CAP (casella di testo editabile lunga 5 caratteri)
* studente lavoratore (selezionabile tramite checkbox)
* descrizione del lavoro svolto (casella di testo editabile lunga 80 caratteri)
* bottone di invio
* bottone di reset

Aggiungere al documento HTML una funzione JavaScript che esegue i seguenti controlli:
* mentre l'utente edita i campi della form:
    * subito dopo che l'utente ha editato il campo CAP, deve verificare che tale campo sia un numero di 5 cifre;
    * subito dopo che l'utente ha editato il campo nome e cognome, deve verificare che tale campo non sia un numero;
* al momento dell'invio del messaggio:
    * verifica che il cognome e nome non sia vuoto;
        * verifica che il sesso sia stato selezionato;
        * verifica che sia stato selezionato un corso;
        * se l'utente ha dichiarato di essere uno studente lavoratore, la descrizione del lavoro svolto non può essere vuota.

