var titolo = document.getElementsByTagName("h1");
// var selettore1 = document.getElementById("");
var selettore2 = document.getElementsByClassName("red");
var selettore3 = document.getElementsByTagName("p");
// var selettore4 = document.getElementsByTagNameNS();

var selettore5 = document.querySelector(".red");
var selettore6 = document.querySelectorAll(".red");
/*
var prodotto = new Object();

prodotto.codice = "C00001";
prodotto.descrizione = "Pasta Barilla";
prodotto.prezzo = 0.5;
*/

// var prodotti = [{
//         codice: "C00001",
//         descrizione: "Pasta Barilla",
//         prezzo: 0.5
//     },
//     {
//         codice: "C00002",
//         descrizione: "Latte Abit",
//         prezzo: 1.5
//     }
// ];

function Prodotto(codice, descrizione, prezzo) {

    this.codice = codice;
    this.descrizione = descrizione;
    this.prezzo = prezzo;

    var stampa = function() {
        return this.codice + ' ' +
            this.descrizione + ' ' +
            this.prezzo;
    };


}

var prodotti = [
    new Prodotto("C00001", "Pasta Barilla", 0.5),
    new Prodotto("C00002", "Latte Abit", 1.5),
    new Prodotto("C00003", "Caffe Illy", 2.5)
];

prodotti.push(new Prodotto("C00004", "Birra Peroni", 2.0));

function creaOggetto(elemento, testo) {

    var nodoElemento = document.createElement(elemento);
    if (testo != undefined && testo != null) {
        var nodoTesto = document.createTextNode(testo);
        nodoElemento.appendChild(nodoTesto);
    }

    console.log("ci sono: " + arguments.length + "argomenti");
    return nodoElemento;

}
var ul = creaOggetto("ul");
console.log(ul);
ul.setAttribute("id", "miaLista");
var p = creaOggetto("p", "prova", "testa l'argomento");

for (let index = 0; index < prodotti.length; index++) {

    const prodotto = prodotti[index];

    let oggetto = creaOggetto("li", prodotto.descrizione + ' ' + prodotto.prezzo);
    ul.appendChild(oggetto);

    console.log(prodotto.descrizione);

}

var body = titolo[0].parentNode;


body.insertBefore(ul, body.children[0]);

var test = document.getElementById("miaLista").children[0];
//document.getElementById("miaLista").removeChild(ul.lastElementChild);

prodotti.forEach(function(e) {
    console.log("il codice prodotto è " + e.codice);
});

var prodottiAcquistati = [];

var puntiElenco = ul.getElementsByTagName("li");
console.log(puntiElenco);
for (let i = 0; i < puntiElenco.length; i++) {
    puntiElenco[i].addEventListener("click", function(params) {
        console.log(params.target.textContent);
        prodottiAcquistati.push(params.target.textContent);

    });
}

//per scorrere una HTMLcollection
for (var item of puntiElenco) {
    console.log(item);
}

document.getElementById("aggiorna").addEventListener("click", stampaCarrello);

// ul.children[0].addEventListener("click", function(params) {
//     console.log(params.target.textContent);
//     document.getElementById("carrello").appendChild(params.target);
// }, false);
function stampaCarrello() {
    document.getElementById("carrello").innerHTML = "";
    prodottiAcquistati.forEach(function(params) {
        var temp = creaOggetto("li", params);
        document.getElementById("carrello").appendChild(temp);
    });
}
console.log(selettore2[1].className);