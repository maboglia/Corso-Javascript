var oggetti = [
    { nome: "mauro", matricola: 2 },
    { nome: "paolo", matricola: 3 },
    { nome: "pietro", matricola: 4 },


];
//-> arrow function 
const result = oggetti.filter(studente => studente.matricola == 3);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]