var colore = prompt("Qual è il tuo colore preferito?", "red");


var corpo = document.getElementsByTagName("body");


//alert(cc); 
var sicuro = confirm("sei proprio sicuro?");

if (sicuro){
	var cc = corpo[0].style.backgroundColor = colore;	
}
