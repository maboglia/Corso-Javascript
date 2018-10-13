$(function() {

    var titoli = $("h2");
    var elenco = $("<ul id='argomenti'>");
    var contatoreArgomento = 0;


    titoli.each(function(index, elem) {
        $(this).html("<a  id='argomento" + contatoreArgomento + "' name='argomento" + contatoreArgomento + "'></a>" + $(this).html());
        elenco.append("<li><a href='#argomento" + contatoreArgomento++ + "'>" + $(this).text() + "</a></li>");
        //console.log(index);
    });

    $("#argomenti li a").each(function(i, e) {
            //this.preventDefault();
            $(this).click(function(i) {
                let segnalibro = $(this).attr("href");
                alert();
                console.log($(segnalibro).offset().top);
                $("html,body").animate({
                    scrollTop: 1000
                }, 1000);
            });
        }

    );

    $("h1").after(elenco);
});