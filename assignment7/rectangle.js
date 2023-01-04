"use strict";
exports.__esModule = true;
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateCircum = function () {
        return this.width * this.height;
    };
    Rectangle.whoAmI = function () {
        console.log("i'am a rectangle");
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
// var rectangle = new Rectangle(5, 6);
// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.calculateCircum());
// Rectangle.whoAmI()
