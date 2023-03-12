function sumCyc(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(`1. Рішення з використанням циклу: ${sumCyc(100)}`);


function sumRec(n) {
    if (n === 1) {
        return 1;
    }
    else {
        return n + sumRec(n - 1);
    }
}

console.log(`2. Рішення з використанням рекурсії: ${sumRec(100)}`);