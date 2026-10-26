// Q5 - Movie Ticket Booking (Objects + RegExp)
"use strict";

function bookMovieTicket(name, email, seats) {
    const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatCount = Number(seats);
    const errors = [];

    if (!namePattern.test(name.trim())) {
        errors.push("Name must contain alphabets only.");
    }
    if (!emailPattern.test(email.trim())) {
        errors.push("Please enter a valid email address.");
    }
    if (!Number.isInteger(seatCount) || seatCount < 1 || seatCount > 10) {
        errors.push("Seats must be a whole number from 1 to 10.");
    }

    if (errors.length > 0) {
        console.log("Booking failed:");
        errors.forEach(error => console.log(`- ${error}`));
        return null;
    }

    const booking = { name: name.trim(), email: email.trim(), seats: seatCount };
    console.log("Booking successful!");
    console.log(`Ticket Details: ${JSON.stringify(booking, null, 2)}`);
    return booking;
}

// Test a valid booking and an invalid booking.
bookMovieTicket("Anshika Saraswat", "anshika@example.com", 3);
bookMovieTicket("Riya123", "invalid-email", 12);
