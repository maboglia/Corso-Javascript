var titolo = $("h1");
var paragrafi = $("p");
var elCasseRed = $(".red");
var prodotti = [];


function caricaProdotti() {

    prodotti = [
        new Prodotto("C00001", "Pasta Barilla", 0.5),
        new Prodotto("C00002", "Latte Abit", 1.5),
        new Prodotto("C00003", "Caffe Illy", 2.5)
    ];

    prodotti.push(new Prodotto("C00004", "Birra Peroni", 2.0));


}

function messaggio() {
    console.log("ciao");
}

function mostra(elemento) {
    //hide, show, toggle
    elemento.toggle(1500, messaggio);
}

//scorro i prodotti e creo dei list item
console.log(prodotti);

function leggiProdotti() {

    prodotti.forEach(function(e) {
        console.log("il codice prodotto è " + e.codice);
    });



}

function schedaProdotto(codProdotto) {
    let o = {};
    for (const iterator of prodotti) {
        if (iterator.codice === codProdotto) {
            console.log("trovato!");
            o = iterator;
            break;
        }

    }
    return o;
}


/*
function creaOggetto(elemento, testo) {

    var nodoElemento = $(elemento);
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
console.log(selettore2[1].className);*/