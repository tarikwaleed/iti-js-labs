import { Rectangle } from "./rectangle";
class Square extends Rectangle {

    width: number;
    constructor(width: number) {
        super(width, width)
    }
    static whoAmI() {
        super.whoAmI()
        console.log("i'm a square too");

    }

}
var square = new Square(5);
console.log(square.width);
console.log(square.height);
console.log(square.calculateCircum());
Square.whoAmI()



