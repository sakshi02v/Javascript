let n = parseInt(process.argv[2]);

// Check if n is a valid number
if (isNaN(n) || n <= 0) {
    console.log("Please provide a valid positive integer for n.");
} else {
    let harmonicNumber = 0;
    
    // Calculate the harmonic number
    for (let i = 1; i <= n; i++) {
        harmonicNumber += 1 / i;
    }
    
    console.log(`The ${n}th Harmonic Number (H${n}) is: ${harmonicNumber.toFixed(6)}`);
}