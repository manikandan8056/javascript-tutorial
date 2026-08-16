// function reverseArray(arr){
//     let result = [];
//     for(let i = arr.length-1; i >= 0; i--){
//         result.push(arr[i])
//     }
//     return result;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// function findLarge(arr){
//     // return Math.max(...arr); // 7
//     let largest = 0;
//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest;


// }
// console.log(findLarge([1,2,3,6,4,5,7])) // 7

// function findSmall(arr){
//     // return Math.min(...arr); // 1
//     let smallestVal = arr[0];
//     for(let i = 1; i <= arr.length-1; i++){
//         if(arr[i] < smallestVal){
//             smallestVal = arr[i]
//         }
//     }
//     return smallestVal;
// }

// console.log(findSmall([1,2,3,6,4,5,7])) // 1

// function findSecondLarge(arr){
//     if(arr.length < 2) return null;
//     let secondLargest = -Infinity;
//     let largest = -Infinity;

//     for(let i = 0; i <= arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }
//         else if(arr[i] > secondLargest && arr[i] !== largest){
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest === -Infinity? null: secondLargest;
// }
// console.log(findSecondLarge([1,2])) // 1
// console.log(findSecondLarge([1,1,1,1])) // null
// console.log(findSecondLarge([1,2,3,6,4,5,7,8])) // 7


// function removeDuplicate(arr){
//     let unique =[]
//     for(let i = 0; i <= arr.length-1; i++){
//         if(!unique.includes(arr[i])){
//             unique.push(arr[i])
//         }
//     }
//     return unique;
// }

// console.log(removeDuplicate([1,2,2,1,4,6,7,4,7,8,9]))// [ 1, 2, 4, 6, 7, 8, 9 ]

// function countOccurence(arr){
//     let countOccur= {};
//     for(let i of arr){
//         countOccur[i] = ((countOccur[i] || 0) + 1)
//     }
//     return countOccur;
// }

// function countOccurence(arr){
//      let frequency = {};

//     for(let i of arr){
//         if(frequency[i]){
//             frequency[i]++;
//         }
//         else{
//             frequency[i] = 1;
//         } 
//     }
//     return frequency;
// }

// console.log(countOccurence([1,2,2,1,4,6,7,4,7,8,9])) // { '1': 2, '2': 2, '4': 2, '6': 1, '7': 2, '8': 1, '9': 1 }

// function moveZerosEnd(arr){
//     let result = [];
//     let zeroCount = 0;

//     for(let i = 0; i <= arr.length-1; i++){
//         if(arr[i] !== 0){
//             result.push(arr[i])
//         }
//         else{
//             zeroCount++
//         }
//     }
//     while(zeroCount > 0){
//         result.push(0)
//         zeroCount--
//     }
//     return result;
// }
// console.log(moveZerosEnd([1, 0, 2, 0, 4, 6, 0, 7, 8])); // [ 1, 2, 4, 6, 7, 8, 0, 0, 0 ]

// function rotateLeft(arr, k){
    
//     let n = arr.length;
//     let result = []

//     // Handle K greater than array length
//      k  = k % n;
//      // console.log(k) // 2
    
//     // Add remaining elements
//     for(let i = k; i < n; i++){
//         result.push(arr[i])// [3] -> [3,4] -> [3,4,5] 
//     }
//     // Add first K elements
//     for(let i = 0; i < k; i++){
//         result.push(arr[i])// [3,4,5,1] -> [3,4,5,1,2]
//     }
//     return result; // [3,4,5,1,2]
// }

// console.log(rotateLeft([1,2,3,4,5],2)); //[ 3, 4, 5, 1, 2 ]

// function mergeSortedArrays(arr1, arr2){
//     let result =[];
//     let i = 0;
//     let j = 0;

//     while(i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i])
//             i++
//         }
//         else{
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while(i < arr1.length){
//         result.push(arr1[i])
//         i++
//     }
//     while(j < arr2.length){
//         result.push(arr2[j])
//         j++
//     }
//     return result;
// }
// console.log(mergeSortedArrays([1,3,5,7,9],[2,4,6,8,10]));// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// function flattenArray(arr){
//     let result = [];

//     for(let item of arr){
//         if(Array.isArray(item)){
//             result.push(...flattenArray(item))
//         }
//         else{
//             result.push(item)
//         }
//     }
//     return result;
// }

// const arr = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(arr)) // [ 1, 2, 3, 4, 5, 6 ]

// function findMissingNumbers(arr){
//     let result =[];
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);

//     for(let i = min; i <= max; i++){
//         if(!arr.includes(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(findMissingNumbers([1, 7, 4, 6, 2, 9]));// [ 3, 5, 8 ]

// function findDuplicates(arr){
//     let duplicate = new Set();
//     let seen = new Set();;
//     for(let i = 0; i <= arr.length; i++){
//         if(!seen.has(arr[i])){
//             seen.add(arr[i])
//         }
//         else{
//             duplicate.add(arr[i])
//         }
//     }
//     return [...duplicate]
// }

// function findDuplicates(arr){
//     let seen = [];
//     let duplicate = [];
//     for(let i = 0; i<= arr.length; i++){
//         if(!seen.includes(arr[i])){
//             seen.push(arr[i])
//         }
//         else{
//             duplicate.push(arr[i])
//         }
//     }
//     return duplicate;
// }
// console.log(findDuplicates([1,2,3,2,4,5,1,6,5]));// [ 2, 1, 5 ]

//find commen element 

// function findIntersection(arr1, arr2){
//     let result = [];
//     for(let i = 0; i <= arr1.length; i++){
//         if(arr1.includes(arr2[i]) && !result.includes(arr2[i])){
//             result.push(arr2[i])
//         }
//     }
//     return result;
// }


// function findIntersection(arr1, arr2){
//     let set = new Set(arr2);
//     let result = [];
//     for(let i of arr1){
//         if(set.has(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// console.log(findIntersection([1,2,3,4,5], [3,4,5,6,7])); // [ 3, 4, 5 ]

// Find union of two arrays
// function findUnion(arr1, arr2){

//     let result = [];

//     for(let i of arr1){
//         if(!result.includes(i)){
//             result.push(i)
//         }
//     }
//     for(let i of arr2){
//         if(!result.includes(i)){
//             result.push(i)
//         }
//     }
//     return result;
// }
// function findUnion(arr1, arr2){
//     let set = new Set()

//     for(let i of arr1){
//         if(!set.has(i)){
//             set.add(i)
//         }
//     }
//     for(let i of arr2){
//         if(!set.has(i)){
//             set.add(i)
//         }
//     }
//     return [...set]
// }
// console.log(findUnion([1,2,3,4], [3,4,5,6])); // [ 1, 2, 3, 4, 5, 6 ]

// Find pair with given sum

// function findPair(arr,target){

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i] , arr[j]];
//             }

//         }
//     }
// }
// console.log(findPair([2,7,11,15], 9)); // [ 2, 7 ]

// function findTriplet(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             for(let k = j+1; k < arr.length; k++){
//                 if(arr[i] + arr[j] + arr[k] === target){
//                     return [arr[i], arr[j], arr[k] ]
//                 }
//             }
//         }
//     }
// }
// console.log(findTriplet([1,4,45,6,10,8],22));//[ 4, 10, 8 ]

// function maximumSubarraySum(arr){
//     let maxSum = -Infinity;

//     for(let i = 0; i < arr.length; i++){
//         let currentSum = 0;
//         for(let j = i; j < arr.length; j++){
//             currentSum += arr[j];
//             if(currentSum > maxSum){
//                 maxSum = currentSum
//             }
//         }
//     }
//     return maxSum;
// }
// console.log(maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6

// function productExceptSelf(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         let productItSelf = 1
//         for(let j = 0; j < arr.length; j++){
//             if(i !== j){
//                 productItSelf *=arr[j]
//             }
//         }
//         result.push(productItSelf)
//     }
//     return result;
// }
// console.log(productExceptSelf([1,2,3,4])); // [ 24, 12, 8, 6 ]


// function findLeaders(arr){
//     let result = []

//     for(let i = 0; i < arr.length; i++){
//         let hasGreaterOnRight  = false;

//         for(let j = i+1; j < arr.length; j++){
            
//             if(arr[i] < arr[j]){ // 16 < 17 //
//                 hasGreaterOnRight  = true;
//                 break;
//             }
//         }
//         if(!hasGreaterOnRight ){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(findLeaders([16,17,4,3,5,2])); // [ 17, 5, 2 ]



// function sort012(arr){
//     let low = 0;
//     let mid = 0;
//     let high = arr.length-1;

//     while (mid <= high) {
//         if(arr[mid] == 0){
//             // Swap arr[low] and arr[mid]
//             let swap = arr[low];
//             arr[low] = arr[mid];
//             arr[mid] = swap
//             low++
//             mid++

//         }
//         else if(arr[mid] == 1){
//             mid++
//         }
//         else if(arr[mid] == 2){
//             // Swap arr[mid] and arr[high]
//             let swap = arr[mid];
//             arr[mid] = arr[high];
//             arr[high] = swap;
//             high--
//         }
//     }
//     return arr
// }


// console.log(sort012([2, 0, 2, 1, 1, 0])); // [ 0, 0, 1, 1, 2, 2 ]

// function mergeIntervals(intervals){
//     if(intervals.length <= 1) return intervals
//     // Sort intervals based on starting value
//     intervals.sort((a, b) => a[0] - b[0]);
//     let result = [];
//     result.push(intervals[0]);
//     for(let i = 1; i < intervals.length; i++){
//         let current = intervals[i];
//         let last = result[result.length-1];
//         // console.log(current, last);
//         // [ 2, 6 ] [ 1, 3 ]
//         // [ 8, 10 ] [ 1, 3 ]
//         // [ 9, 12 ] [ 1, 3 ]
//         if(current[0] <= last[1]){ // Check Overlap
//             last[1] = Math.max(current[1], last[1]);

//         }
//         else{
//             result.push(current);
//         } 
//     }
//     return result;
// }
// console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [9, 12]])); // [ [ 1, 6 ], [ 8, 12 ] ]

//Approach 1 — Brute Force
// function majorityElement(arr){
//     for(let i = 0; i < arr.length; i++){
//         let count = 0;
//         for(let j = 0; j < arr.length; j++){
//             if(arr[i] == arr[j]){
//                 count++
//             }
//         }
//         if(count > arr.length/2){
//             return arr[i]
//         }
//     }
//     return null;
// }


// Approach 2 — Hash Map
// function majorityElement(arr){
//     let frequency = new Map(); // Map(2) { 2 => 4, 1 => 3 }
//     for(let i = 0; i < arr.length; i++){
//         if(frequency.has(arr[i])){
//             frequency.set(arr[i], frequency.get(arr[i]) + 1)
//         }
//         else{
//             frequency.set(arr[i], 1)
//         }
//         if(frequency.get(arr[i]) > arr.length /2){
//             return arr[i];
//         }
//     }
//     return null;
// }

// Approach 3 — Boyer-Moore Voting Algorithm
// function majorityElement(arr){
//     let canditate = null;
//     let count = 0;

//     for(let i = 0; i < arr.length; i++){
//         if(count == 0){
//             canditate = arr[i]
//         }
//         if(canditate == arr[i]){
//             count++
//         }
//         else{
//             count--
//         }
//     }
//     return canditate;
// }

// function majorityElement(arr){
//     let frequency = {}; // { '1': 3, '2': 4 }
//     // Count each element
//     for(let i of arr){
//         if(frequency[i]){
//             frequency[i]++
//         }
//         else{
//             frequency[i] = 1
//         }
//     }
//      // Find majority element
//     for(let key in frequency){
//         // console.log(key);
//         if(frequency[key] > arr.length / 2){
//             return Number(key)
//         }  
//     }
//     return null;
// }
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
// console.log(majorityElement([1, 2, 3, 4])); // null


// //Approach 1 — Brute Force
// function nextGreaterElement(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         let nextGeneration = -1;
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] > arr[i]){
//                 nextGeneration = arr[j]
//                 break;
//             }
//         }
//         result.push(nextGeneration)
//     }
//     return result;
// }
// console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [ 5, 10, 10, -1, -1 ]

//Approach 1 — Brute Force
// function maxProfit(price){
    
//     let maxProfit = 0;
//     for(let i = 0; i < price.length; i++){
//         for(let j = i+1; j < price.length; j++){
//             let profit = price[j] - price[i]
//             if(profit > maxProfit){
//                 maxProfit = profit
//             }
//         }  
//     }
//     return maxProfit;
// }

// Approach 2 — Optimized ⭐
// function maxProfit(price){
//     let minProfit = price[0]
//     let maxProfit = 0;
//     for(let i = 1; i < price.length; i++){

//         if(price[i] < minProfit){
//             minProfit = price[i]
//         }

//         let profit = price[i] - minProfit

//         if(profit > maxProfit){
//             maxProfit = profit
//         }

//     }
//     return maxProfit;
// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

//Approach 1 — Brute Force
// function trapRainWater(arr) {

//     let totalWater = 0;

//     for (let i = 0; i < arr.length; i++) {

//         let leftMax = 0;
//         let rightMax = 0;

//         // Find maximum on the left
//         for (let j = 0; j <= i; j++) {
//             if (arr[j] > leftMax) {
//                 leftMax = arr[j];
//             }
//         }

//         // Find maximum on the right
//         for (let j = i; j < arr.length; j++) {
//             if (arr[j] > rightMax) {
//                 rightMax = arr[j];
//             }
//         }

//         let water = Math.min(leftMax, rightMax) - arr[i];

//         if (water > 0) {
//             totalWater += water;
//         }
//     }

//     return totalWater;
// }

// console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// // Approach 2 — Two Pointers ⭐
// // This is the best solution to know for interviews because it achieves:

// // Time:  O(n)
// // Space: O(1)

// function trapRainWater(arr) {
//     let left = 0;
//     let right = arr.length - 1;
//     let leftMax = 0;
//     let rightMax = 0;
//     let totalWater = 0;
//     while (left < right) {
//         if (arr[left] < arr[right]) {
//             if (arr[left] >= leftMax) {
//                 leftMax = arr[left];
//             } else {
//                 totalWater += leftMax - arr[left];
//             }
//             left++;
//         } else {
//             if (arr[right] >= rightMax) {
//                 rightMax = arr[right];
//             } else {
//                 totalWater += rightMax - arr[right];
//             }
//             right--;
//         }
//     }
//     return totalWater;
// }

// console.log(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// function bubbleSort(arr){
//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = 0; j < arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([5, 2, 9, 1, 5, 6]));  // Output: [ 1, 2, 5, 5, 6, 9 ]


// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         let minIndex = i
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i){
//             let swap = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex]=swap;
//         }
//     }
//     return arr;
// }

// console.log(selectionSort([5, 2, 9, 1, 5, 6]));  // Output: [ 1, 2, 5, 5, 6, 9 ]

function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentValue){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1]=currentValue;
    }
    return arr;
}

console.log(insertionSort([5,2,9,1,5,6]));// Output: [1, 2, 5, 5, 6, 9]