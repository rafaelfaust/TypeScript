function greet(name) {
    console.log("Ol\u00E1, ".concat(name, "!"));
}
greet('Rafael');

function doubleNumber(number: number): number {
    return number *2
}

const result = doubleNumber(3)
console.log(result)