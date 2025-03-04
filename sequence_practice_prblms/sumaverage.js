// Generate 5 random two-digit numbers
let numbers = [];
for (let i = 0; i < 5; i++) {
    let randomNumber = Math.floor(Math.random() * 90) + 10; // 10 to 99
    numbers.push(randomNumber);
}

// Calculate sum and average
let sum = numbers.reduce((acc, num) => acc + num, 0);
let average = sum / numbers.length;

// results
console.log("Generated Numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));
