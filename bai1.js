function findOppositeNumber(n, inputNumber) {
    let a = inputNumber+n/2;
    if(a<n) return a;
    else return a-n;
}

let x = findOppositeNumber(10,6);
console.log(x);