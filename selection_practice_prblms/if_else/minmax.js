function getRandomNumber() {
    return Math.floor(Math.random() * 900) + 100; 
}

let numbers = []; 
let minVal = Infinity; 
let maxVal = -Infinity; 

console.log("Generated 3-digit numbers: \n");
for (let i = 0; i < 5; i++) {
    let num = getRandomNumber();
    numbers.push(num);
    process.stdout.write(num + " "); 

    
    if (num < minVal) minVal = num;
    if (num > maxVal) maxVal = num;
}

console.log("Minimum Value:", minVal);
console.log("Maximum Value:", maxVal);