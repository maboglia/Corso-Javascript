function Studente (nome, cognome, anno) {
	
	this.nome = nome;
	this.cognome = cognome;
	this.anno = 2017 - anno;
	this.accendiPC = function  () {
		console.log(this.nome + "ha acceso il pc");
		return "eseguito";
	}

}


Studente.genere = 'M';



var studenti = [
	new Studente("panco", "pallone", 1500),
	new Studente("Panco", "pallone", 1400),
	new Studente("Banco", "pallone", 1700),
	new Studente("Zanco", "pallone", 1600),
	new Studente("pinco", "pallino", 1200)
	
];

for (var i = 0; i < studenti.length; i++) {
	var output  = studenti[i].nome;
		output += " ";
		output += studenti[i].cognome;
		output += " ";
		output += studenti[i].anno;
		output += " ";
		output += studenti[i].accendiPC();
		output += "<br>";
		document.write(output);
}

//console.log(studenti[0].nome);
//console.log(studenti[1].nome);
//console.info(studenti.length);
