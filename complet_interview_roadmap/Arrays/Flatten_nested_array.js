function flattenArray(arr){
    let result = []

    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item))
        }
        else{
            result.push(item)
        }
    }
    return result;
}


const arr = [1, [2, [3, 4], 5], 6];

console.log(flattenArray(arr)) // [ 1, 2, 3, 4, 5, 6 ]