//var frutti = new Array('prugna');
var frutti = ['prugna'];

//frutti[0] = "mela";
//frutti[1] = "pera";
//frutti[10]= "banana"; 
frutti.push('mela');
frutti.push('Pera');
frutti.push('banana');
frutti.push('fragola');
frutti.push(true);

console.log( frutti);
console.log( frutti.length);
console.log(frutti[7]);
frutti.sort();
console.log( frutti);

frutti.reverse();
console.log( frutti);

var x = frutti.pop();
console.log( frutti);
console.log(x);

var y = frutti.slice(2, 4);
console.log(y);

var pos = frutti.indexOf("banana",5);
if(pos > -1) console.log("esiste...");else console.log("non esiste...");

frutti.shift();
document.body.innerHTML = frutti.join(" | ");