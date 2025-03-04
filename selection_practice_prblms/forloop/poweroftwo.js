// Get command-line argument
const args = process.argv.slice(2); // Ignore first two default arguments
const n = parseInt(args[0]); // Convert input to an integer

// Validate input
if (isNaN(n) || n < 0) {
    console.log("Please provide a valid non-negative integer.");
    process.exit(1); // Exit the program if input is invalid
}

// Print table of powers of 2 up to 2^n
console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
