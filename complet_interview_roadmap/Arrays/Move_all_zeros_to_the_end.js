function moveZeros(arr){

    let result = [];
    let zeroCount = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i])
        }
        else{
            zeroCount++
        }
    }
    while(zeroCount--){
        result.push(0)
    }
    
    return result;
}

console.log(moveZeros([1, 0, 2, 0, 4, 6, 0, 7, 8]));