// 07 QBit / Javascript Cookbook(2 nd Edition) - O 'Reilly (2015) PDF EPUB - GOLU/Javascript Cookbook, 2nd Edition - Shelley Powers.pdf

// 1.2

var sentence = 'Questa è una frase. Questa è una frase con una lista di cose: ' +
    'fragole, pere, arance, mele, banane. Era una lista di frutti. ';
var start = sentence.indexOf(': ');
var end = sentence.indexOf('. ', start + 1);
var listStr = sentence.substring(start + 1, end);

console.log(listStr);
fruits = listStr.split(', ');
console.log(fruits);
fruits.forEach(function(elmnt, indx, arry) {
    arry[indx] = elmnt.trim();
});
console.log(fruits);

var start = sentence.indexOf(":");
var end = sentence.indexOf(".", start + 1);
var fruits = sentence.substring(start + 1, end).split(",");
console.log(fruits);



// 1.3.Checking
// for an Existing,
// Nonempty String

// Problem
// You want to verify that a variable is defined,
// is a string,
// and is not empty.

if (((typeof unknownVariable != 'undefined ' && unknownVariable) &&
        unknownVariable.length() > 0) &&
    typeof unknownVariable.valueOf() == 'string ')...