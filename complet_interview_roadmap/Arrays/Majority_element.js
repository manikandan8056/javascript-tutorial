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

function nextGreaterElement(arr){
    
}
console.log(nextGreaterElement([4, 5, 2, 10, 8]));