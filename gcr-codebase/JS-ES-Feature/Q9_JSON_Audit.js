// Q9 - JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedEntry = JSON.parse(rawData[index]);

        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user") ||
            !Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
            throw new Error("Missing required key: user or age.");
        }

        // Convert age to a number for consistent validation.
        const age = Number(parsedEntry.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number.");
        }

        const normalizedEntry = { ...parsedEntry, age };

        if (age >= 18) {
            cleanData.push(normalizedEntry);
        } else {
            console.log(`Line ${lineNumber}: valid entry filtered out because user is under 18.`);
        }
    } catch (error) {
        const auditError = { line: lineNumber, message: error.message };
        auditErrors.push(auditError);
        console.log(`Line ${lineNumber} error: ${error.message}`);
    }
}

console.log("\nClean data (valid users aged 18 or older):", cleanData);
console.log("Audit errors:", auditErrors);
console.log(`Clean entries: ${cleanData.length}`);
console.log(`Error count: ${auditErrors.length}`);

// Debugging note: set a breakpoint inside try and catch. Step through JSON.parse;
// malformed JSON jumps directly to catch, while missing keys trigger the custom error.
