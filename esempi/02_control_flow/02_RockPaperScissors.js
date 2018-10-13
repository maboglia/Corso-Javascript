var sceltaUtente = prompt("Cosa scegli: pietra, carta o forbici?");
var sceltaComputer = Math.random();
if (sceltaComputer < 0.34) {
	sceltaComputer = "pietra";
} else if(sceltaComputer <= 0.67) {
	sceltaComputer = "carta";
} else {
	sceltaComputer = "forbici";
} alert("Computer: " + sceltaComputer);

function compare(scelta1,scelta2){
	if (scelta1 === scelta2){return "Pareggio!";}
	else if(scelta1 === "pietra" && scelta2 === "forbici"){return "pietra vince";}
	else if(scelta1 === "forbici" && scelta2 === "pietra"){return "pietra vince"}
	else if(scelta1 === "carta" && scelta2 === "pietra"){return "carta vince"}
	else if(scelta1 === "pietra" && scelta2 === "carta"){return "carta vince"}
	else if(scelta1 === "forbici" && scelta2 === "carta"){return "forbici vince"}
	else if(scelta1 === "carta" && scelta2 === "forbici"){return "forbici vince"}
	else{return "invalid entry"}
}

var result = compare(sceltaUtente, sceltaComputer);
alert(result);