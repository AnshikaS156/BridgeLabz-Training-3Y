// Q3 - Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        // A null entry must be checked before accessing its properties.
        if (transaction === null) {
            throw new Error("NULL_ENTRY: Transaction is null.");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_FIELD: Transaction is missing id or amount.");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT: Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: valid`);
    } catch (error) {
        invalidTransactions.push({
            index: index + 1,
            transaction,
            category: error.message.split(":")[0],
            message: error.message
        });
        console.log(`Transaction at row ${index + 1} failed: ${error.message}`);
    }
}

console.log("\nValid transactions:", validTransactions);
console.log("Invalid transactions:", invalidTransactions);
console.log(`Successful count: ${validTransactions.length}`);
console.log(`Failed count: ${invalidTransactions.length}`);

// Debugging note: set a breakpoint inside the loop and inspect index,
// transaction, validTransactions, and invalidTransactions in the debugger.
