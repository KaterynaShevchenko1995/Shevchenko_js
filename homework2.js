function pow (x , y) {
    let result = 1;
    for (let k = 0; k < y; k++) {result *= x}
    return result;
}

console.log (pow(4, 3));
console.log(pow('k',2));
console.log(pow(null,2));
console.log(pow(true,2));
console.log(pow(false,2));