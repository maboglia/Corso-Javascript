function Studente(cognome, nome, year) {
    this.nome = nome;
    this.cognome = cognome;
    this.year = year;
    this.anni = 2017 - this.year;
    this.challengeJS = [];
    this.challengeJava = [];

    this.presentaStudente = function() {
        var stu = "Lo studente " + this.nome;
        stu += " " + this.cognome;
        stu += " ha circa " + this.anni;
        return stu;
    };

}

var colori = [
    'white',
    'yellow',
    'orange',
    'green',
    'blue',
    'brown',
    'black',
];


var studenti = [

    new Studente("pizzuti", "chiara", 1990),
    new Studente("gastaldi", "stefano", 1997),
    new Studente("maggi", "federica", 1992),
    new Studente("dibenedetto", "giulia", 1990),
    new Studente("desogus", "mattia", 1992),
    new Studente("cordova", "tracy", 1991),

    new Studente("iusso", "andrea", 1990),
    new Studente("caiulo", "federica", 1987),
    new Studente("mihoc", "nicolas", 1995),
    new Studente("colliard", "emily", 1994),
    new Studente("arico", "paolo", 1987),

    new Studente("toscano", "roberta", 1991),
    new Studente("restuccia", "lorenzo", 1993),
    new Studente("medda", "marco", 1995),
    new Studente("guddemi", "erika", 1994),
    new Studente("mameli", "valentina", 1989)

];


for (var i = 0; i < studenti.length; i++) {
    if (studenti[i].nome == "andrea" || studenti[i].nome == "roberta") {
        var divClear = document.createElement("div");
        divClear.setAttribute("style", "clear:left;");
        document.body.appendChild(divClear);
    }
    var divStudente = document.createElement("div");
    var divCinturaJS = document.createElement("div");
    var divCinturaJava = document.createElement("div");

    divStudente.setAttribute("style", "border:1px solid #ccc; float:left;width:125px;height:200px;padding:5px; margin:5px;");
    divCinturaJS.setAttribute("style", "margin:2px auto;width:96%;height:20px;border:1px solid #ccc;");
    divCinturaJava.setAttribute("style", "margin:2px auto;width:96%;height:20px;border:1px solid #ccc;");

    divStudente.innerHTML = (studenti[i].cognome) ?
        "<h4>" + studenti[i].nome + "</h4>" +
        "<h3>" + studenti[i].cognome + "</h3>" +
        "<h4>" + studenti[i].anni + "</h4>" : "";

    if (studenti[i].challengeJS > 0) {
        //divStudente.innerHTML += "<h4>" + studenti[i].challengeJS + "</h4>";
        //divCinturaJS.setAttribute("style", "background-color:" + colori[studenti[i].challengeJS]);
        var testo = document.createTextNode("Javascript");
        divCinturaJS.appendChild(testo);
        divCinturaJS.setAttribute("onclick", "console.dir(this.parentElement.innerHTML)");
        divCinturaJS.className = colori[studenti[i].challengeJS];
        divStudente.appendChild(divCinturaJS);
        //divStudente.innerHTML += "<h4>" + studenti[i].challengeJava + "</h4>";

    }
    if (studenti[i].challengeJava > 0) {
        var testo = document.createTextNode("Java");
        divCinturaJava.appendChild(testo);
        divCinturaJava.className = colori[studenti[i].challengeJava];
        divStudente.appendChild(divCinturaJava);
    }


    document.body.appendChild(divStudente);

    console.log(studenti[i].presentaStudente());
    console.dir(studenti);
    var studentiJSON = JSON.stringify(studenti);
    console.dir(studentiJSON);

}