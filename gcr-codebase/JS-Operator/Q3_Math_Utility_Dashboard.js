// Q3 - Math Utility Dashboard

const x = 16.75;

// Calculate the requested mathematical values
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display a formatted result summary using a template literal
console.log(`Math Utility Dashboard
Input: ${x}
Rounded value: ${roundedValue}
Square root: ${squareRoot}
Power (x^3): ${cube}
Random number (10-50): ${randomNumber}`);
