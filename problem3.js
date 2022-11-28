function theGreatestOne(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x
        }
        return z

    }
    else {
        if (y > z) {
            return y
        }
        return z
    }
}