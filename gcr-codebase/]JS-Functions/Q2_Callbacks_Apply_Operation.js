// Q2: Callbacks - Apply Operation
// Applies a callback operation to every number in an array.

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

const doubledNumbers = applyOperation(numbers, number => number * 2);
console.log("Doubled:", doubledNumbers); // [2, 4, 6, 8]

const squaredNumbers = applyOperation(numbers, number => number * number);
console.log("Squared:", squaredNumbers); // [1, 4, 9, 16]
