function saluta(test) {
	
	var messaggio1 = "ciao";
	var messaggio2 = "dalla funzione";

	var continua = test;

	if(continua){ alert(typeof continua); }
	else { console.log(continua); }

	/*
	alert('\n\n' + messaggio1 + '\nqual\n\tcos\'altro');
	alert('<h2>' + messaggio2 + '</h2>');
	alert("il miglior libro di javascript è  \"Eloquent javascript\" ");*/
}

function somma (a, b) {
	var somma = a + b;
	console.log("Il risultato dell'addizione è: " + somma  );

	return somma;

}
/*
dichiaro e implemento la funzione calcolo:
la richiamo passando 3 argomenti, due valori numerici ed una stringa che rappresenta l'operazione da eseguire
*/
function calcolo (a, b, operazione) {
	//dichiaro una variabile risultato che ritornerò alla fine della funzione
	var risultato;

/*	if (operazione == "addizione"){	
			risultato = a + b;
	}
	if (operazione == "sottrazione"){
			risultato = a - b;
	}
	if (operazione == "moltiplicazione"){
			risultato = a * b;
	}
	if (operazione == "divisione"){
			risultato = a / b;
	}*/

	switch(operazione){
		case "addizione":
		risultato = somma(a,b);
		break;

		case "sottrazione":
		risultato = a - b;
		break;

		case "moltiplicazione":
		risultato = a * b;
		break;

		case "divisione":
		risultato = a / b;
		break;

		default:
		risultato = "non ho capito l'operazione...";
		break;
	}

	return risultato;
}


var a = prompt("inserisci primo valore numerico:");
	a = parseFloat(a);
var b = prompt("inserisci secondo valore numerico:");
	b = parseFloat(b);
var op = prompt("inserisci operazione:");

var x = calcolo(a, b, op);
console.log("il risultato del calcolo è: " + x);