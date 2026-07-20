// Brute Force
// function findDuplicates(arr){

//     let seen = [];
//     let duplicateValue = [];

//     for(let i = 0; i < arr.length; i++){
//         if(!seen.includes(arr[i])){
//             seen.push(arr[i])
//         }
//         else{
//             duplicateValue.push(arr[i])
//         }
//     }
//     return duplicateValue;
// }

function findDuplicates(arr){
    let seen = new Set();
    let duplicate = new Set();

    for(let i of arr){
        if(seen.has(i)){
            duplicate.add(i)
        }
        else{
            seen.add(i)
        }
    }
    return [...duplicate];
}
console.log(findDuplicates([1,2,3,2,4,5,1,6,5])); // [ 2, 1, 5 ]