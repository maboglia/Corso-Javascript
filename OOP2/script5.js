function addizione (a,b) {
	return a + b;
}

function sottrazione (a,b) {
	return a - b;
}

function moltiplicazione (a,b) {
	return a * b;
}

function divisione (a,b) {
	return a / b;
}
function scriviOutput (argument) {
	var out = document.getElementById("output");
	out.innerHTML  = out.innerHTML + argument;
	out.innerHTML += "<br>";

}
var btn1 = document.getElementById("btn1");


btn1.onclick = function () {

	var num1 = document.getElementById("num1").value;
	var num2 = document.getElementById("num2").value;
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		//scriviOutput(num1);
	scriviOutput(addizione(num1, num2));
	scriviOutput(sottrazione(num1, num2));
	scriviOutput(moltiplicazione(num1, num2));
	scriviOutput(divisione(num1, num2));
}

// var num1 = parseFloat(prompt("primo valore", 1));
// var num2 = parseFloat(prompt("secondo valore", 1));

//console.dir(num1);

