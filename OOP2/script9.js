var studenti = [   
		["dario", "d'abbiero", 1990],
		["bryan", "folleco", 1999],
		["artur", "holobut", 1992],
		["ludovica", "magnano", 1993],
		["alexandru", "boaca", 1994],

		["igli", "balliu", 1998],
		["giuseppe", "minniti", 1995],
		["simone", "marzorati", 1997],
		["danut", "andres", 1995],
		["alberto", "tito", 1990],
		["andrei", "tasca", 1991],

		["cristiano", "maffeis", 1995],
		["marco", "de palma", 1996],
		["denilson", "vargas", 1992],
		["daniele", "spada", 1988],
		["fabio", "caccia", 1997],
		["davide", "tacchino", 1995]
  ];
var somma = 0;
var contatore = 0;

for (var i = 0 ; i < studenti.length; i++) {

	if(studenti[i].indexOf("dario") > -1 ) contatore++;
	//if (studenti[i][0] == "dario") contatore++;

	somma += studenti[i][2];


}


console.log(contatore);
console.log(somma);
console.log(somma/contatore);
