var bottone = "<button onclick='test(\"red\")'>red</button>";

var out = document.getElementById("output");

//console.dir(out);
function test(a){
	if(a){
		out.innerHTML = "ciao " + a;
		out.style.backgroundColor = a;
	}
	else{
		var colori = ['purple', 'yellow', 'green', 'brown', 'blue'];
		var rand = Math.floor(   (   Math.random() * colori.length )  );
		out.innerHTML = "ciao paperino " + rand;
		out.style.backgroundColor = colori[rand];


	}
}
var btn1 = document.getElementById("btn1");

btn1.onclick = function  () {
	test();
};

	document.write(bottone);


/*
for (var i = 0; i < 100; i++) {
	document.write(bottone);
};*/