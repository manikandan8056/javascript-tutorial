
function maximumSubarraySum(arr){
    let maxSum = -Infinity;

    for(let i = 0; i < arr.length; i++){

        let currentSum = 0;

        for(let j = i; j < arr.length; j++){

            currentSum += arr[j];

            if(currentSum > maxSum){
                maxSum = currentSum;
            }

        }

    }
    
    return maxSum;
}
console.log(maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));