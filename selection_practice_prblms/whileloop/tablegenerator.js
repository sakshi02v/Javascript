const args = process.argv.slice(2);

const n = parseInt(args[0]);

if (isNaN(n) || n < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    let power = 0;
    let value = 1;

    console.log("Power of 2 Table:");
    while (power <= n && value <= 256) {
        console.log(`2^${power} = ${value}`);
        value *= 2; 
        power++;    
    }
}