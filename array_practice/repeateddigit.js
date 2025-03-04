// Function to find numbers with repeated digits (like 11, 22, 33, etc.)
function findRepeatedDigitNumbers(rangeStart, rangeEnd) {
    let repeatedNumbers = [];

    for (let i = rangeStart; i <= rangeEnd; i++) {
        let strNum = i.toString(); // Convert number to string
        if (strNum.length === 2 && strNum[0] === strNum[1]) { // Check if both digits are same
            repeatedNumbers.push(i);
        }
    }

    return repeatedNumbers;
}

// Define the range 0-100
let repeatedDigitsArray = findRepeatedDigitNumbers(10, 99);

// Display the result
console.log("Numbers with repeated digits:", repeatedDigitsArray);
