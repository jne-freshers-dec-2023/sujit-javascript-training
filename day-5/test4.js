var obj2 = /** @class */ (function () {
    function obj2(a, b) {
        this.a = a;
        this.b = b;
    }
    obj2.prototype.printVar = function () {
        console.log(this.a + " " + this.b);
    };
    return obj2;
}());
var object2 = new obj2(58, 67);
object2.printVar();
