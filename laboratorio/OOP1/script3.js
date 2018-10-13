//array

//costruisco un array vuoto
var array1 = new Array();
console.log(array1.length);

array1[0] = 2;
array1[1] = 7;
array1[2] = 69;

console.log(array1.length);

//costruisco un array di 3 posizioni con nessun valore
var array2 = new Array(3);
console.log(array2.length);

array2[0] = 20;
array2[1] = 70;
array2[2] = 690;

console.log("la prima posizione dell'array 1 vale " + array1[0]);
console.log("la prima posizione dell'array 2 vale " + array2[0]);

//costruisco un array di 3 posizioni con 3 valori
var array3 = new Array(3, 30, 300);
console.log("la prima posizione dell'array 3 vale " + array3[0]);
console.log(array3.length);

//4 modo, più utilizzato per costruire un array
var array4 = [7,77,777];
array4[10] = 5;

console.log("la prima posizione dell'array 4 vale " + array4[0]);
console.log(array4.length);


var studenti = [   
		["artur", "holobut", 1992],//cognome posiz studenti[0][2] 
		["dario", "d'abbiero", 1990],
		["bryan", "folleco", 1999],
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




//cicli for (posso utilizzarli per scorrere un array)

for (var i = 0; i < studenti.length; i++) {
	eta = 2017 - (studenti[i][2]);
	console.log("Lo stud " + studenti[i][1] + " ha circa " + eta);

};




