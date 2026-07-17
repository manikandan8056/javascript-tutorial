
function findLarge(arr){
    // return Math.max(...arr)
    if(arr.length === 0) return null;

    let largest = arr[0]
    for(let i = 1; i<= arr.length; i++){
        if(arr[i] > largest){
            largest= arr[i]
        }  
    }
    return largest
}

// console.log(findLarge([]))
console.log(findLarge([1,2,3,6,4,5]))