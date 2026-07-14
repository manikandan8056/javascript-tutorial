function removeDuplicateWord(arr){
    let unique = []
    for(let i = 0; i < arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDuplicateWord([1,2,2,1,4,6,7,4,7,8,9]))