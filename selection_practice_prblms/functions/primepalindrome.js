// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Function to check if number & its palindrome are prime
function checkPrimeAndPalindrome(num) {
    if (!isPrime(num)) {
        console.log(`${num} is not a prime number.`);
        return;
    }

    console.log(`${num} is a prime number.`);

    let palindrome = getPalindrome(num);
    console.log(`Palindrome of ${num} is ${palindrome}.`);

    if (isPrime(palindrome)) {
        console.log(`Palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`Palindrome ${palindrome} is not a prime number.`);
    }
}

// Taking input from user
const prompt = require('prompt-sync')(); // Import prompt-sync for user input
let number = parseInt(prompt("Enter a number: "), 10);
checkPrimeAndPalindrome(number);
