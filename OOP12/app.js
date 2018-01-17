$(document).ready(function() {


    $("h1").after("<ul id='listaProdotti'></ul>");

    prodotti.forEach(function(e) {
        $("#listaProdotti").append("<li>" + e.descrizione + "</li>");
    });




});