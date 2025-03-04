// Function to check if a number is a palindrome
function isPalindrome(num) {
    let originalNum = num.toString(); // Convert number to string
    let reversedNum = originalNum.split('').reverse().join(''); // Reverse the string
    return originalNum === reversedNum; // Compare original and reversed
}

// Function to check if two numbers are palindromes
function checkTwoPalindromes(num1, num2) {
    let isNum1Palindrome = isPalindrome(num1);
    let isNum2Palindrome = isPalindrome(num2);

    console.log(`${num1} is ${isNum1Palindrome ? "" : "not "}a palindrome.`);
    console.log(`${num2} is ${isNum2Palindrome ? "" : "not "}a palindrome.`);
}

// Example usage
checkTwoPalindromes(121, 454); // Both are palindromes
checkTwoPalindrome
