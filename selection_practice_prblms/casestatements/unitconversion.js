const args = process.argv.slice(2);
let choice = parseInt(args[0]);
let value = parseInt(args[1]);
let result;

switch (choice) {
    case 1:
        result = value * 12; // Feet to Inches
        console.log(`${value} Feet = ${result} Inches`);
        break;
    case 2:
        result = value * 0.3048; // Feet to Meters
        console.log(`${value} Feet = ${result.toFixed(4)} Meters`);
        break;
    case 3:
        result = value / 12; // Inches to Feet
        console.log(`${value} Inches = ${result.toFixed(4)} Feet`);
        break;
    case 4:
        result = value / 0.3048; // Meters to Feet
        console.log(`${value} Meters = ${result.toFixed(4)} Feet`);
        break;
    default:
        console.log("Invalid choice! Please enter a valid option (1-4).");
}