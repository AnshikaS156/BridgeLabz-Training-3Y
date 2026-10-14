// Q8. Employee Salary Projection
const currentSalary = 30000; // Monthly salary in rupees
const annualIncrementRate = 8; // Percentage increase each year

let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
    salary *= 1 + annualIncrementRate / 100;
    salary = Math.round(salary);

    projection.push({
        Year: year,
        "Monthly Salary (₹)": salary,
        "Annual Salary (₹)": salary * 12
    });
}

console.table(projection);
