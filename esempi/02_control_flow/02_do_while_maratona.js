var maratona = function(distanza) {
    // Write your do/while loop here!
    do {
        console.log("Continua a correre, mancano " + distanza + " km all'arrivo!");
        distanza -= 1;
    } while (distanza > 0)

};

maratona(5);