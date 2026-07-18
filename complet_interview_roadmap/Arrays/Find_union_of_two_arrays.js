// function findUnion(arr1, arr2){

//     let result = [];

//     for(let num of arr1){
//         if(!result.includes(num)){
//             result.push(num)
//         }
//     }
//     for(let num of arr2){
//         if(!result.includes(num)){
//             result.push(num)
//         }
//     }
//     return result;
// }
function findUnion(arr1, arr2){
    let set = new Set();

    for(let num of arr1){
        if(!set.has(num)){
            set.add(num)
        }
    }
    for(let num of arr2){
        if(!set.has(num)){
            set.add(num)
        }
    }
    return [...set];
}
console.log(findUnion([1,2,3,4], [3,4,5,6]));