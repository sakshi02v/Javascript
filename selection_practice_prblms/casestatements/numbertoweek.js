const args = process.argv.slice(2);

if (args.length !== 1) {
    process.exit(1);
}

const num = parseInt(args[0], 10);

if (num < 1 || num > 7 || isNaN(num)) {
    console.log("Please enter a valid number between 1 and 7.");
    process.exit(1);
}

// Convert number to weekday using switch
var day;
switch(num) {
    case 1: day = "Sunday";
    break;

    case 2: day = "Monday";
    break;

    case 3: day = "Tuesday";
    break;

    case 4: day = "Wednesday";
    break;

    case 5: day = "Thursday";
    break;

    case 6: day = "Friday";
    break;

    case 7: day = "Saturday";
    break;
}

console.log(`The weekday is: ${day}`);