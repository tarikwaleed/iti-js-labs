export class Point2D {
    x: number;
    y: number
    constructor(x: number, y: number) {
        this.x = x
        this.y = y

    }
    calculateLength(other: Point2D) {
        var a = this.x - other.x;
        var b = this.y - other.y;
        var c = Math.sqrt(a * a + b * b);
        return c

    }
}