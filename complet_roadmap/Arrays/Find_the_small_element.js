
function findLarge(arr){
    // return Math.max(...arr)
    if(arr.length === 0) return null;

    let small = arr[0]
    for(let i = 1; i<= arr.length; i++){
        if(arr[i] < small){
            small= arr[i]
        }
    }
    return small
}

// console.log(findLarge([]))
console.log(findLarge([1,2,3,6,4,5]))