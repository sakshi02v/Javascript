// Function to find and store prime factors of a number
function getPrimeFactors(n) {
    let factors = [];
    
    // Divide by 2 until n becomes odd
    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    // Check odd factors from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    // If n is still a prime number greater than 2
    if (n > 2) {
        factors.push(n);
    }

    return factors;
}

// Taking input from user
const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number: "), 10);

// Validate input
if (isNaN(number) || number <= 1) {
    console.log("Please enter a valid number greater than 1.");
} else {
    let primeFactors = getPrimeFactors(number);
    console.log(`Prime Factors of ${number}: ${primeFactors.join(', ')}`);
}
