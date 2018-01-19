$(document).ready(function() {

    //1) qui chiamo la funzione che inizializza i prodotti
    caricaProdotti();

    //2) creo un nuovo elemento di tipo ul
    const nuovalista = $("<table>");
    //3) aggiungo all'ul un attributo id = listaProdotti
    nuovalista.attr("id", "listaProdotti");
    //4) appendere l'ul dopo il titolo
    $("h1").after(nuovalista);
    //5) scorrere l'array per inserire il li nella ul
    prodotti.forEach(function(e) {
        //6) creo un nuovo tr per ogni prodotto in database
        const rigaProdotto = $("<tr>");

        //6bis creo un td per ogni colonna della tabella
        const dato1 = $("<td>").text(e.codice);
        const dato2 = $("<td>").text(e.descrizione);
        const dato3 = $("<td>").text(e.prezzo);
        const dato4 = $("<td>").html("<button>dettaglio</button>").on("click", function(params) {
            let o = schedaProdotto(e.codice) || {};
            $("#schedaDettaglio")
                .html("")
                .append("<h2>" + o.descrizione + "</h2>")
                .append("<img src='" + o.immagine + "' alt='" + o.descrizione + "'  />")
                .append("<p>" + o.prezzo + "</p>")
                .append("<p><button>chiudi</button></p>").on("click", function() {
                    $("#schedaDettaglio").hide(600);
                })
                .append("<p><button>acquista</button></p>")
                .show(1000);
            console.log(o.descrizione);
        });
        const dato5 = $("<td>").html("<button>acquista</button>").on("click", function(params) {
            acquistaProdotto(e.codice);
        });

        //7) aggiungo i td alla rigaProdotto
        rigaProdotto.append(dato1).append(dato2).append(dato3).append(dato4).append(dato5);
        $("#listaProdotti").append(rigaProdotto);
    });
    /*
     */

    $("#listaProdotti li").on("click", function(e) {
        console.log($(this).text());
        let i = $(this).clone();
        $("#carrello").append(i);
    });

    $("#btnElenco").click(function() {
        mostra($("#listaProdotti"));
    });

});