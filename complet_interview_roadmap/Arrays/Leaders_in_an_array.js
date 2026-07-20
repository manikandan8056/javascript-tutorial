// Approach 1: Brute Force

function findLeaders(arr){
    let result = []

    for(let i = 0; i < arr.length; i++){
        let hasGreaterOnRight  = false;

        for(let j = i+1; j < arr.length; j++){
            
            if(arr[i] < arr[j]){ // 16 < 17 //
                hasGreaterOnRight  = true;
                break;
            }
        }
        if(!hasGreaterOnRight ){
            result.push(arr[i])
        }
    }
    return result;
}

// Approach 2: Traverse from Right

console.log(findLeaders([16,17,4,3,5,2]));