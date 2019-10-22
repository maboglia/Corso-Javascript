function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}
Rectangle.prototype.area = function() {
    return (this.width * this.height);
};
Rectangle.prototype.toString = function() {
    return "Rectangle of width: " + this.width + " and height: " + this.height;
};
Rectangle.prototype.valueOf = function() {
    return this.area();
};
Rectangle.prototype.equals = function(oRect) {
    return (this.width == oRect.width && this.height == oRect.height);
};
Rectangle.prototype.compareTo = function(oRect) {
    return (this.area() - oRect.area());
};

var myRect = new Rectangle(5, 6);
var myRect2 = new Rectangle(7, 8);
var myRect3 = new Rectangle(5, 6);
var myRect4 = myRect;

alert(typeof myRect);
alert(myRect instanceof Rectangle);
alert(myRect instanceof Object);
alert(myRect.toString());

alert(myRect.equals(myRect2));
alert(myRect.equals(myRect3));
alert(myRect.equals(myRect4));