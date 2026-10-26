// Q7 - Login Form Validation using RegExp
"use strict";

function validateLogin(username, password) {
    const errors = [];

    if (username.length < 5) {
        errors.push("Username must contain at least 5 characters.");
    }
    if (password.length < 8) {
        errors.push("Password must contain at least 8 characters.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must include at least one number.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must include at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must include at least one lowercase letter.");
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        errors.push("Password must include at least one special character.");
    }

    if (errors.length === 0) {
        console.log("Login validation successful!");
        return true;
    }

    console.log("Login validation failed:");
    errors.forEach(error => console.log(`- ${error}`));
    return false;
}

// Test successful and unsuccessful validation cases.
validateLogin("student01", "Hello@123");
validateLogin("abc", "hello");
