function fatorial(n) {
    let fat = 1;
    for (let i = n; i > 1; i--) {
        fat = fat * i;
    }
    return fat;
}

function recursiva(n) {
    if (n === 1) {
        return 1
    } else {
        return n * recursiva(n - 1);
    }
}

console.log(fatorial(5));
console.log(recursiva(5));