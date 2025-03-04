const args = process.argv.slice(2);

if (args.length !== 1) {
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (![1, 10, 100, 1000, 10000, 100000].includes(num)) {
    console.log("Please enter a valid number (1, 10, 100, 1000, etc.).");
    process.exit(1);
}

let place;
if (num === 1) place = "Unit";
else if (num === 10) place = "Ten";
else if (num === 100) place = "Hundred";
else if (num === 1000) place = "Thousand";
else if (num === 10000) place = "Ten Thousand";
else if (num === 100000) place = "Lakh";

console.log(`The place value is: ${place}`);