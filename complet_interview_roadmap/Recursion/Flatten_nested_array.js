function flattenArray(arr){
    const result = [];
    for(let num of arr){
        if(Array.isArray(num)){
            result.push(...flattenArray(num))
        }
        else{
            result.push(num)
        }
        
    }
    return result;
}


console.log(flattenArray([1,[2,[3,4],5],6]));// [ 1, 2, 3, 4, 5, 6 ]