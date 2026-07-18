// function findPair(arr, target){

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === target){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
//     // return [];
// }

function findPair(arr, target){
    let seen = new Set();

    for(let num of arr){
        let complement = target - num ;
        if(seen.has(complement)){
            return [complement, num]
        }
        seen.add(num)
    }
    // return [];
}

console.log(findPair([2,7,11,15], 9));