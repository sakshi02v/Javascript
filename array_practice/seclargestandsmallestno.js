// Function to generate 10 random 3-digit numbers and store them in an array
function generateRandomNumbers(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 900) + 100); // Random number between 100-999
    }
    return numbers;
}

// Function to find the 2nd largest and 2nd smallest without sorting
function findSecondLargestAndSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        // Finding largest and second largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        // Finding smallest and second smallest
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return { secondLargest, secondSmallest };
}

// Generate random numbers and find results
let numbersArray = generateRandomNumbers(10);
console.log("Generated Numbers:", numbersArray);

let { secondLargest, secondSmallest } = findSecondLargestAndSmallest(numbersArray);
console.log(`2nd Largest Number: ${secondLargest}`);
console.log(`2nd Smallest Number: ${secondSmallest}`);
