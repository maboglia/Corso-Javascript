$(document).ready(function() {

    //1) qui chiamo la funzione che inizializza i prodotti
    caricaProdotti();

    //2) creo un nuovo elemento di tipo ul
    const nuovalista = $("<ul>");
    //3) aggiungo all'ul un attributo id = listaProdotti
    nuovalista.attr("id", "listaProdotti");
    //4) appendere l'ul dopo il titolo
    $("h1").after(nuovalista);
    //5) scorrere l'array per inserire il li nella ul
    prodotti.forEach(function(e) {
        //6) creo un nuovo li
        const nuovoLi = $("<li>").text(e.descrizione);
        //7) aggiungo il li alla lista ul
        $("#listaProdotti").append(nuovoLi);
    });
    /*
     */

    $("#listaProdotti li").on("click", function(e) {
        console.log($(this).text());
        let i = $(this).clone();
        $("#carrello").append(i);
    });

});