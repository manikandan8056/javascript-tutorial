
function findTriplet(arr, target){

    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            for(let k = j+1; k < arr.length; k++){
                if(arr[i] + arr[j] + arr[k] === target){
                    return [arr[i], arr[j], arr[k]]
                }
            }
        }
    }
    return [];
}


console.log(findTriplet([1,4,45,6,10,8],22));