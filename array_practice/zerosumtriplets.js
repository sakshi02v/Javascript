// Function to find all triplets that sum to zero
function findTriplets(arr) {
    let triplets = [];
    let n = arr.length;

    // Sort the array to use two-pointer approach
    arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        // Avoid duplicate triplets
        if (i > 0 && arr[i] === arr[i - 1]) continue;

        let left = i + 1, right = n - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (sum === 0) {
                triplets.push([arr[i], arr[left], arr[right]]);
                
                // Move both pointers and avoid duplicates
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Example input array
let numbers = [-3, 1, 2, -1, 4, 0, -2, 3, -4];

// Find and display triplets
let result = findTriplets(numbers);
console.log("Triplets that sum to zero:", result.length ? result : "No triplets found.");
