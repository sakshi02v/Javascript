const args = process.argv.slice(2);

if (args.length !== 1) {
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (num < 0 || num > 9 || isNaN(num)) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

// Convert number to word using if-else
let word;
if (num === 0) word = "Zero";
else if (num === 1) word = "One";
else if (num === 2) word = "Two";
else if (num === 3) word = "Three";
else if (num === 4) word = "Four";
else if (num === 5) word = "Five";
else if (num === 6) word = "Six";
else if (num === 7) word = "Seven";
else if (num === 8) word = "Eight";
else if (num === 9) word = "Nine";

console.log(`The number in words is: ${word}`);