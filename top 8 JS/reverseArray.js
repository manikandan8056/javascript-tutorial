// const reverseArray = (arr) => {
//     const reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// };

// const reverseArray = (arr) =>{
//     const reverseNumber = [];
//     for(let i =arr.length -1; i>= 0; i--){
//         reverseNumber.push(arr[i])
//     }
//     return reverseNumber;
// }



function reverseArray(arr){
    let revArr= [];
    for(let i = arr.length -1; 0 <= i; i--){
       revArr.push(arr[i])
    }
    return revArr;
}

// Example
// console.log(reverseArray([1, 2, 3, 4, 5]));  // Output: [5, 4, 3, 2, 1]
console.log(reverseArray(['a', 'b', 'c', 'd', 'e']));