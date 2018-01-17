function Prodotto(codice, descrizione, prezzo) {

    this.codice = codice;
    this.descrizione = descrizione;
    this.prezzo = prezzo;

    const stampa = function() {
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