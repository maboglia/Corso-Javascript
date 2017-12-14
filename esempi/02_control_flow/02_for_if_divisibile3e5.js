for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Divisibile per 3 e 5");
    } else if (i % 3 === 0) {
        console.log("Divisibile per 3 ");
    } else if (i % 5 === 0) {
        console.log("Divisibile per 5 ");
    } else {
        console.log(i);
    }
}