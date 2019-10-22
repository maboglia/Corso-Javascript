//'use strict';
// didn't use var
var foo = "Hello world";

// new object with two properties with the same name
var myObject = {
    samename: 1,
    samename: 2
};

// function with the same name for multiple parameters
function myFunction(a, b, a) {
    return a + b;
}

document.write(myFunction(5, 4, 3));