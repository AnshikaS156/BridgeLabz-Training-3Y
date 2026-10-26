// Q1 - Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [];
const invalidNumericData = [];

for (const value of apiData) {
    // Convert each input to Number, Boolean, and String for inspection.
    const numericValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Original: ${stringValue} | Number: ${numericValue} | Boolean: ${booleanValue} | String: "${stringValue}"`);

    // The assignment explicitly treats NaN, whitespace, and "100px" as invalid.
    const explicitlyInvalid = value === "NaN" ||
        (typeof value === "string" && value.trim() === "") ||
        (typeof value === "string" && value === "100px");

    if (!Number.isNaN(numericValue) && !explicitlyInvalid) {
        validNumericData.push(numericValue);
    } else {
        invalidNumericData.push(value);
        console.log(`Invalid numeric input: ${stringValue}`);
    }
}

console.log("\nValid numeric data:", validNumericData);
console.log("Invalid data:", invalidNumericData);
