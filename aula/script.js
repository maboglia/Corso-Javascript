function Studente(nome, cognome, year) {
    this.nome = nome;
    this.cognome = cognome;
    this.year = year;
    this.anni = 2017 - this.year;
    this.challengeJS = [];

    this.presentaStudente = function() {
        var stu = "Lo studente " + this.nome;
        stu += " " + this.cognome;
        stu += " ha circa " + this.anni;
        return stu;
    };

}


var studenti = [
    new Studente("bryan", "folleco", 1999),
    new Studente("igli", "balliu", 1998),
    new Studente("", "", null),
    new Studente("artur", "holobut", 1992),
    new Studente("ludovica", "magnano", 1993),
    new Studente("alexandru", "boaca", 1994),

    new Studente("dario", "d'abbiero", 1990),
    new Studente("giuseppe", "minniti", 1995),
    new Studente("simone", "marzorati", 1997),
    new Studente("danut", "andres", 1995),
    new Studente("alberto", "tito", 1990),
    new Studente("andrei", "tasca", 1991),

    new Studente("cristiano", "maffeis", 1995),
    new Studente("marco", "de palma", 1996),
    new Studente("denilson", "vargas", 1992),
    new Studente("daniele", "spada", 1988),
    new Studente("fabio", "caccia", 1997),
    new Studente("davide", "tacchino", 1995)
];
studenti[8].challengeJS = 1;
studenti[9].challengeJS = 1;
studenti[16].challengeJS = 1;


for (var i = 0; i < studenti.length; i++) {
    if (i > 0 && (i % 6) == 0) {
        var divClear = document.createElement("div");
        divClear.setAttribute("style", "clear:left;");
        document.body.appendChild(divClear);
    }
    var divStudente = document.createElement("div");
    divStudente.setAttribute("style", "border:1px solid #ccc; float:left;width:125px;height:160px;padding:5px; margin:5px;");
    divStudente.innerHTML = (studenti[i].cognome) ?
        "<h4>" + studenti[i].nome + "</h4>" +
        "<h3>" + studenti[i].cognome + "</h3>" +
        "<h4>" + studenti[i].anni + "</h4>" : "";
    if (studenti[i].challengeJS > 0) {
        divStudente.innerHTML += "<h4>" + studenti[i].challengeJS + "</h4>";
        divStudente.className = "green";
    }
    document.body.appendChild(divStudente);

    console.log(studenti[i].presentaStudente());

}