function Prodotto(codice, descrizione, prezzo) {

    this.codice = codice;
    this.descrizione = descrizione;
    this.prezzo = prezzo;
    this.immagine = this.codice + ".jpg";

    const stampa = function() {
        return this.codice + ' ' +
            this.descrizione + ' ' +
            this.prezzo;
    };


}