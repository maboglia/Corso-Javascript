function calcolaRisultato(N) {
		console.log("questa è la funzione per il calcolo della radice q");
		console.warn("Il valore da calcolare: " + N);

		var risultato = Math.sqrt(N);
		alert(risultato);
}


var N;

var msg = "Attenzione numero negativo!";
var esci = "Vuoi uscire?";


var continua = true;

//ciclo while, finché 'continua' == true
while (continua){

	 N = prompt("inserisci un numero intero");

	if  ( N<0 ){
		alert(msg);
		//qui stampo a video il messaggio di errore
	}

	else {
		 calcolaRisultato(N); 
	}

	var risposta = prompt(esci);

	if (risposta == "SI"){
		//esco dal ciclo while
		continua = false;
	} 


}

calcolaRisultato(9);
calcolaRisultato(16);
calcolaRisultato(25);



