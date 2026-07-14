// const findMissingNumbers = (arr) => {
//     let missingNumbers = [];
//     let min = Math.min(...arr);//spread operator (...) to convert the array into a list of arguments (1, 7, 4, 6, 2, 9) → 1
//     let max = Math.max(...arr);
    
//     for (let i = min; i <= max; i++) { //untill the false the loop can be run
//         if (!arr.includes(i)) { // ! mean mention if not presented in array will it is true
//             missingNumbers.push(i);
//         }
//     }
//     return missingNumbers;
// };

// const findMissingNumbers = (arr) =>{
//     const missingNumber = [];
//     const min =Math.min(...arr)
//     const max =Math.max(...arr)

//     for(let i = min; i<= max; i++){
//         if(!arr.includes(i)){
//             missingNumber.push(i);
//         }
//     }
//     return missingNumber;

// }


// function findMissingNumbers(arr){
//     let missingNumber = [];
//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     for(let i =min; i <= max-1; i++){
//         if(!arr.includes(i))
//         missingNumber.push(i);
//     }
//     return missingNumber;
// };

// // Example
// console.log(findMissingNumbers([1, 7, 4, 6, 2, 9]));  // Output: [3, 5, 8]



function findMissingArr (arr) {
    let misNum=[];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    for(let i = min; i <= max-1; i++){
        if(!arr.includes(i)){
            misNum.push(i);
        }
    }
    return misNum;
}

console.log(findMissingArr([1, 7, 9]))