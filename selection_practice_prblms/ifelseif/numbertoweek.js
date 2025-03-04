const args = process.argv.slice(2);

if (args.length !== 1) {
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (num < 1 || num > 7 || isNaN(num)) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

// Convert number to weekday using if-else
let day;
if (num === 1) day = "Sunday";
else if (num === 2) day = "Monday";
else if (num === 3) day = "Tuesday";
else if (num === 4) day = "Wednesday";
else if (num === 5) day = "Thursday";
else if (num === 6) day = "Friday";
else if (num === 7) day = "Saturday";

console.log(`The weekday is: ${day}`);