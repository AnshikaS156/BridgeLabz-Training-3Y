// Q6. Progressive Discount System
const purchaseTotal = 6500; // Example purchase amount in rupees
let discountRate;

if (purchaseTotal >= 10000) {
    discountRate = 0.25;
} else if (purchaseTotal >= 5000) {
    discountRate = 0.15;
} else if (purchaseTotal >= 2000) {
    discountRate = 0.05;
} else {
    discountRate = 0;
}

const discountAmount = Math.round(purchaseTotal * discountRate);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log(`Original total: ₹${purchaseTotal}`);
console.log(`Discount percentage: ${discountRate * 100}%`);
console.log(`Final price after discount: ₹${finalPrice}`);
