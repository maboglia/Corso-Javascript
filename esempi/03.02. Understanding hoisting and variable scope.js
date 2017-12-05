03.02. Understanding hoisting and variable scope.js


function myDog(){
	var dogName= "Pippo";
	console.log(dogName + " dice bau");
}

myDog();
//-------------------------------------------------

function myDog(){
	var dogName= "Pippo";
}

myDog();
	console.log(dogName + " dice bau");
//undefined

//-------------------------------------------------
function myDog(){
	console.log(dogName + " dice bau");
	var dogName= "Pippo";
}

myDog();
//undefined


//-------------------------------------------------
//javascript scope chain
//sposta su e giù ladichiarazionedella variabileper verificare lo scope e l'hoisting