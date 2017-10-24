function saluto () {
	console.log("ciao");
}


function saluto_con_argomenti (argument) {
	
	console.log("ciao " + argument);
}

var saluta = function (a) {
	console.log("ciao " +  a);
	
};

function somma(a,b){
	var sommaa = a+b;
	return sommaa;
}

var sommaAnonima = function  (a, b) {
	console.log("ciao da sommaAnonima");
	return;	
	console.log("ciao da sommaAnonima 2");
}


saluto();
saluto_con_argomenti("mauro");
saluta("mauro");
console.log(  somma(5,4) ) ;

console.log(sommaAnonima(7,8));
