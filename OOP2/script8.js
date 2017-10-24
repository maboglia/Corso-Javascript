var amministratori = ['mauro', 'paolo', 'pippo'];
var password = ['12345', '54321', 'poppi'];

var x = prompt("scrivi nome admin");
var y = prompt("scrivi password");

var posAdm = amministratori.indexOf(x);

function login (x,y) {
	

if ( posAdm > -1  ){

	if (  password[posAdm] == y  ){
		console.log("sei loggato");
	}
	else{
		console.log("hai sbagliato la pw");

	}

return;
}
console.log("admin inesistente")
}

login(x,y);
for (amm in amministratori){
	console.log(amm);
}
