var obj = /** @class */ (function () {
    function obj() {
    }
    obj.prototype.sum = function () {
        console.log(this.x + this.y);
    };
    obj.prototype.printVar = function () {
        console.log(this.x + " " + this.y);
    };
    return obj;
}());
var object1 = new obj();
object1.x = 10;
object1.y = 20;
object1.printVar();
