// Q2. Multi-Type Data Summary
// Create sample values for the required JavaScript data types.
const userName = "Anshika";
const age = 19;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const user = { name: "Anshika", course: "BTech CSE" };
const middleName = null;
let optionalValue;

const entries = [
    { Label: "String", Value: userName, Type: typeof userName },
    { Label: "Number", Value: age, Type: typeof age },
    { Label: "Boolean", Value: isStudent, Type: typeof isStudent },
    { Label: "Array", Value: JSON.stringify(subjects), Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Null", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Undefined", Value: String(optionalValue), Type: typeof optionalValue }
];

// Display the complete report in one table.
console.table(entries);
