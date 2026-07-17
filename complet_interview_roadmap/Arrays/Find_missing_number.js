function findMissingNumbers(arr){

    // let set = new Set(arr);

    let max = Math.max(...arr);//9
    let min = Math.min(...arr);//1
    let result = [];

    for(let i = min; i < max; i++){
        if(!arr.includes(i)){
        // if (!set.has(i)) { 
            result.push(i)
        }
    }
    return result;
}

console.log(findMissingNumbers([1, 7, 4, 6, 2, 9]));  //[ 3, 5, 8 ]

// includes() takes O(n) time.
// Set.has() takes O(1) average time.