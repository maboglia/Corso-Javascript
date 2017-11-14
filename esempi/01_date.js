var dataCorrente = function(sp) {
    oggi = new Date();
    var dd = oggi.getDate();
    var mm = oggi.getMonth() + 1; //Gennaio = 0.
    var yyyy = oggi.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};
console.log(dataCorrente('/'));
console.log(dataCorrente('-'));