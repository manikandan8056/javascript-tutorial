function rotateRight(arr, k) {

    let n = arr.length;
    let result = [];

    k = k % n;
    // console.log(k) // 2

    // Last K elements
    for(let i = n-k; i < n; i++){
        result.push(arr[i]); // [ 4 ] -> [ 4, 5 ]
    }
    
    // Remaining elements
    for(let i = 0; i < n-k; i++){
        result.push(arr[i]); // [ 4, 5, 1 ] -> [ 4, 5, 1, 2 ] -< [ 4, 5, 1, 2, 3 ]
    }

    return result; 

}

console.log(rotateRight([1,2,3,4,5],2)); // [4,5,1,2,3]