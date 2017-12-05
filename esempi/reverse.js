function reverse(str) {
    if (typeof str != "string") {
        throw "This function only accepts strings";
    }
    var result = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(str.length-i-1);
        result = result + c;
    }
    return result;
}