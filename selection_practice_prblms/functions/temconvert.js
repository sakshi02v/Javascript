// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Reading user input from command line
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asking user for conversion choice
readline.question("Choose conversion: \n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius\nEnter choice (1/2): ", choice => {
    if (choice === '1') {
        readline.question("Enter temperature in Celsius: ", temp => {
            temp = parseFloat(temp);
            if (temp >= 0 && temp <= 100) {
                console.log(`Temperature in Fahrenheit: ${celsiusToFahrenheit(temp).toFixed(2)}°F`);
            } else {
                console.log("Please enter a value between 0°C and 100°C.");
            }
            readline.close();
        });
    } else if (choice === '2') {
        readline.question("Enter temperature in Fahrenheit: ", temp => {
            temp = parseFloat(temp);
            if (temp >= 32 && temp <= 212) {
                console.log(`Temperature in Celsius: ${fahrenheitToCelsius(temp).toFixed(2)}°C`);
            } else {
                console.log("Please enter a value between 32°F and 212°F.");
            }
            readline.close();
        });
    } else {
        console.log("Invalid choice. Please enter 1 or 2.");
        readline.close();
    }
});