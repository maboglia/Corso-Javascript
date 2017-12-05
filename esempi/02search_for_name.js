text = "Bla bla bla bla bla bla Paperino \
bla bla bla Paperino bla bla Paperino bla bla \
bla bla bla bla bla Paperino";

var nome = "Paperino";
var ricorrenze = [];

// Cerco la "P"
for (var i = 0; i < text.length; i++) {
    if (text[i] === "P") {
        for (var j = i; j < (nome.length + i); j++) {
            ricorrenze.push(text[j]);
        }
    }
}

if (ricorrenze.length === 0) {
    console.log("Nome trovato!");
} else {
    console.log(ricorrenze);
}