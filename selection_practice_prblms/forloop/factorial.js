let num = parseInt(process.argv[2]);

if (isNaN(num) || num < 0) {
    console.log("Please provide a valid non-negative integer.");
} else {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    console.log(`The factorial of ${num} is: ${factorial}`);
}