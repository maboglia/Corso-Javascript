//evoluzione 1
var step = function prova() {
    alert('test');
};

step();


//evoluzione 2
var step = function prova() {
    alert('test');
}();



//evoluzione 3
(function prova() {
    alert('test');
})();

//evoluzione 4 - le variabili rimangono private
(function prova() {
    var a = 1;
    alert('test');
})();

console.log(a);