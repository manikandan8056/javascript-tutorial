//Approach 1 — Brute Force
function nextGreaterElement(arr){
    let result = []
    for(let i = 0; i < arr.length; i++){
        let nextGeneration = -1;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                nextGeneration = arr[j]
                break;
            }
        }
        result.push(nextGeneration)
    }
    return result;
}
console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [ 5, 10, 10, -1, -1 ]
