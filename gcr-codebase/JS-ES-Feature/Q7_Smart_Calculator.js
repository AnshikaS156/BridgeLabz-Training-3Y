// Q7 - Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Unknown operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;
        case "divide":
            if (secondNumber === 0) {
                throw new Error("DivisionByZeroError: Cannot divide by zero.");
            }
            return firstNumber / secondNumber;
        case "power":
            return Math.pow(firstNumber, secondNumber);
        case "root":
            if (firstNumber < 0) {
                throw new Error("NegativeRootError: Cannot take the square root of a negative number.");
            }
            return Math.sqrt(firstNumber);
        case "subtract":
            return firstNumber - secondNumber;
        default:
            throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        // Use num1 as the root input; other operations use both numbers.
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Demonstrate invalid-operation handling as well.
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`multiply: ${error.name} - ${error.message}`);
}
