var num;
var isb;
var someName;
var score = [10, true, 'sujit'];
var mark = [10, 20, 30, 40];
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["yellow"] = 1] = "yellow";
    color[color["green"] = 2] = "green";
})(color || (color = {}));
var selectedColor = color.red;
console.log(color);
