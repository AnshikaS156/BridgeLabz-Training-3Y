// Q9 - Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity < 1) {
            throw new Error("Price must be non-negative and quantity must be at least 1.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(coupon) {
        // Accept codes such as SAVE20 or DISC10, where the number is the discount percent.
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(couponPattern);

        if (!match) {
            console.log(`Invalid coupon: ${coupon}`);
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);
        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Coupon discount must be between 1% and 100%.");
            return this.getTotal();
        }

        const total = this.getTotal();
        const finalTotal = total - total * (discountPercent / 100);
        console.log(`Coupon ${coupon} applied: ${discountPercent}% off.`);
        return finalTotal;
    }
}

const cart = new Cart();
cart.addItem("T-shirt", 800, 2);
cart.addItem("Book", 350, 1);

console.log("Cart items:", cart.items);
console.log(`Original total: ₹${cart.getTotal().toFixed(2)}`);
console.log(`Final total: ₹${cart.applyCoupon("SAVE20").toFixed(2)}`);
console.log(`Total with invalid coupon: ₹${cart.applyCoupon("WELCOME").toFixed(2)}`);
