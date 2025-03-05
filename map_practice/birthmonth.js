function getRandomMonth() {
    return Math.floor(Math.random() * 12) + 1; // Generates a number between 1-12
}

let birthMonths = {}; // Dictionary to store individuals grouped by birth month

// Initialize the dictionary with empty arrays for each month
for (let i = 1; i <= 12; i++) {
    birthMonths[i] = [];
}

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = getRandomMonth();
    birthMonths[month].push(`Person${i}`);
}

// Print the results
console.log("Individuals grouped by birth month:");
for (let month in birthMonths) {
    console.log(`Month ${month}:`, birthMonths[month]);
}
