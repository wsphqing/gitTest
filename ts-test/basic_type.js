var x;
x = ['hello', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
var u = undefined;
var n = null;
x = null;
function warnUser() {
    console.log('This is my warning message');
}
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('Something failed');
}
function infiniteLoop() {
    while (true) {
    }
}
var obj;
obj = [];
var someValue = 'this is a string';
var strLength = someValue.length || someValue.length;
function f(input) {
    var a = 100;
    var b;
    if (input) {
        var b_1 = a + 1;
        return b_1;
    }
    return b;
}
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
console.log(createSquare({ color: 'black' }));
