// Function to find 2nd largest and 2nd smallest using sorting
function findSecondLargestAndSmallestSorted(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b); // Sorting in ascending order
    return {
        secondSmallest: sortedArr[1], // 2nd element
        secondLargest: sortedArr[sortedArr.length - 2] // 2nd last element
    };
}

// Generate random numbers
let numbersArray = generateRandomNumbers(10);
console.log("Generated Numbers:", numbersArray);

// Finding without sorting
let result1 = findSecondLargestAndSmallest(numbersArray);
console.log(`(Without Sorting) 2nd Largest: ${result1.secondLargest}, 2nd Smallest: ${result1.secondSmallest}`);

// Finding with sorting
let result2 = findSecondLargestAndSmallestSorted(numbersArray);
console.log(`(With Sorting) 2nd Largest: ${result2.secondLargest}, 2nd Smallest: ${result2.secondSmallest}`);