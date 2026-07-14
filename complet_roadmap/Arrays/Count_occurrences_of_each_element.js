function countOccurence(arr){
    let countOccur = {};

    for(let i of arr){
        countOccur[i] = ((countOccur[i] || 0 ) + 1)
    }
    return countOccur;
}

console.log(countOccurence([1,2,2,1,4,6,7,4,7,8,9]))