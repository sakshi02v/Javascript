const args = process.argv.slice(2);

if (args.length !== 1) {
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (num < 0 || num > 9 || isNaN(num)) {
    console.log("Please enter a valid single-digit number (0-9).");
    process.exit(1);
}

// Convert number to word using switch-case
let word;
switch (num) {
    case 0: word = "Zero"; break;
    case 1: word = "One"; break;
    case 2: word = "Two"; break;
    case 3: word = "Three"; break;
    case 4: word = "Four"; break;
    case 5: word = "Five"; break;
    case 6: word = "Six"; break;
    case 7: word = "Seven"; break;
    case 8: word = "Eight"; break;
    case 9: word = "Nine"; break;
    default: word = "Invalid"; break;
}

console.log(`The number in words is: ${word}`);