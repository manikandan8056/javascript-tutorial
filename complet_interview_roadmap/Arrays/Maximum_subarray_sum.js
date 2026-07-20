// Brute Force

// function maximumSubarraySum(arr){
//     let maxSum = -Infinity;

//     for(let i = 0; i < arr.length; i++){

//         let currentSum = 0;

//         for(let j = i; j < arr.length; j++){

//             currentSum += arr[j];

//             if(currentSum > maxSum){
//                 maxSum = currentSum;
//             }

//         }

//     }
    
//     return maxSum;
// }


// Kadane's Algorithm

function maximumSubarraySum(arr){
    let currentSum = arr[0];
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++){
        
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        maxSum = Math.max(maxSum , currentSum)
    }
    return maxSum;
}
console.log(maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));