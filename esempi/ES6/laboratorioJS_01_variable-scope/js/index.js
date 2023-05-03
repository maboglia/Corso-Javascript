/**
 * variable scope 
 * */

// //dichiara una fun
// function f(x) {
//     return x / 2;
// }
// // console.log(f(10));
// console.log(x); //: x is not defined !!

// //dichiaro 2 fun

// function f1() {
//     console.log("funzione uno");
// }

// function f2() {
//     console.log("funzione due");
// }

// //chiamo le funzioni

// f1();
// f2();
// f1();

//3 un altro esempio (lexical declaration) 

//dichiaro una variabile x

const x = 5;

//dichiaro una fun

function f() {
    console.log(x);
    console.log(y);
}


//dichiaro y

const y = 4;

// chiamo la funzione

f();