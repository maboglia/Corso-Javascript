var giorniDelMese = function(month, year) {
    // Mese di gennaio = 1 
    //Giorno 0 è l'ultimo Giorno del mese precedente

    return new Date(year, month, 0).getDate();

    // Mese di gennaio = 0 
    // return new Date(year, month+1, 0).getDate();
}

console.log(giorniDelMese(1, 2017));
console.log(giorniDelMese(2, 2017));
console.log(giorniDelMese(9, 2017));
console.log(giorniDelMese(12, 2017));