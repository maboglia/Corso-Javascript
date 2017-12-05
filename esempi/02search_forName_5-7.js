// Search Text for Your Name 5/7
/*jshint multistr:true */
var text = "Jide got up today determined to get Jide coding again after Jide took so many days off";
var myName = "Jide";
var hits = [];

for (var i = 0; i < text.length; i ++) {
    if (myName[0]=== text[i]) {
        for (var j = i; j < i+myName.length; j ++) {
            hits.push(text[j]);
        } 
    }
}
if (hits.length<1) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
