function rotateLeft(arr, k){
    
    let n = arr.length;
    let result = []

    // Handle K greater than array length
     k  = k % n;
     // console.log(k) // 2
    
    // Add remaining elements
    for(let i = k; i < n; i++){
        result.push(arr[i])// [3] -> [3,4] -> [3,4,5] 
    }
    // Add first K elements
    for(let i = 0; i < k; i++){
        result.push(arr[i])// [3,4,5,1] -> [3,4,5,1,2]
    }
    return result; // [3,4,5,1,2]
}

console.log(rotateLeft([1,2,3,4,5],2));