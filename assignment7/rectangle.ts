export class Rectangle {
    width: number;
    height: number;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateCircum() {
        return this.width * this.height
    }
    static whoAmI() {
        console.log("i'am a rectangle");

    }
}
// var rectangle = new Rectangle(5, 6);
// console.log(rectangle.width)
// console.log(rectangle.height)
// console.log(rectangle.calculateCircum());
// Rectangle.whoAmI()

