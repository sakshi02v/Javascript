
const args = process.argv.slice(2);

if (args.length !== 3) {
    process.exit(1);
}

const a = parseFloat(args[0]);
const b = parseFloat(args[1]);
const c = parseFloat(args[2]);

// Operations
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;

// Store results
const results = [result1, result2, result3, result4];

// Find maximum and minimum values
const maxResult = Math.max(...results);
const minResult = Math.min(...results);

// Print results
console.log(`Results of operations:`);
console.log(`1. a + b * c  = ${result1}`);
console.log(`2. a % b + c  = ${result2}`);
console.log(`3. c + a / b  = ${result3}`);
console.log(`4. a * b + c  = ${result4}`);

console.log(`Maximum result: ${maxResult}`);
console.log(`Minimum result: ${minResult}`);
