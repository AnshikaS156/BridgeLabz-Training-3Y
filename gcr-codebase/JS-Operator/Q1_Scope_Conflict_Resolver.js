// Q1 - Scope Conflict Resolver

// Global bonus value
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local salary variable
    let salary = 40000;

    // Add the global bonus only for permanent employees
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ${salary}`);
}

// Test both outcomes
calculateSalary(true);
calculateSalary(false);

// The local salary changes inside the function; the global bonus remains unchanged.
console.log(`Global bonus after function calls: ${bonus}`);
