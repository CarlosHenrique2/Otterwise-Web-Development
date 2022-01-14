function maior (a,b,c) {
    if (a < b && a < c) {
        return b + c
    }else if (b < a && b < c) {
        return a + c
    }else {
        return b + a
    }
}

console.log(maior(10,20,30))