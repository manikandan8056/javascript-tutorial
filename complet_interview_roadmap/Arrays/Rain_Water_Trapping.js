//Approach 1 — Brute Force
function trapRainWater(arr) {

    let totalWater = 0;

    for (let i = 0; i < arr.length; i++) {

        let leftMax = 0;
        let rightMax = 0;

        // Find maximum on the left
        for (let j = 0; j <= i; j++) {
            if (arr[j] > leftMax) {
                leftMax = arr[j];
            }
        }

        // Find maximum on the right
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > rightMax) {
                rightMax = arr[j];
            }
        }

        let water = Math.min(leftMax, rightMax) - arr[i];

        if (water > 0) {
            totalWater += water;
        }
    }

    return totalWater;
}

console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// Approach 2 — Two Pointers ⭐
// This is the best solution to know for interviews because it achieves:

// Time:  O(n)
// Space: O(1)

function trapRainWater(arr) {

    let left = 0;
    let right = arr.length - 1;

    let leftMax = 0;
    let rightMax = 0;

    let totalWater = 0;

    while (left < right) {

        if (arr[left] < arr[right]) {

            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                totalWater += leftMax - arr[left];
            }

            left++;

        } else {

            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                totalWater += rightMax - arr[right];
            }

            right--;
        }
    }

    return totalWater;
}

console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));