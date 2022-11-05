const tribonacci = (numArray, counter) => {
    let tribonacciArray = [];
    if (counter === 0) console.log(0);
    for (let index = 0; index <= counter - 1; index++) {
        if (index < numArray.length) {
            tribonacciArray.push(numArray[index]);
        } else {
            const tribonacciBuilder = (tribonacciArray[index - 1] ? tribonacciArray[index - 1] : 0) 
                    + (tribonacciArray[index - 2] ? tribonacciArray[index - 2] : 0) 
                    + (tribonacciArray[index - 3] ? tribonacciArray[index - 3] : 0)
            tribonacciArray.push(tribonacciBuilder);
        }
    }
    return tribonacciArray;
}

console.log(tribonacci([0, 0, 1], 9));
console.log(tribonacci([1, 1, 1], 5));
console.log(tribonacci([1, 2, 3], 2));

