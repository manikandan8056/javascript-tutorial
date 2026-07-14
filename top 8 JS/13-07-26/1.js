// function reverString(str){
//     let revStr = '';
//     for (let i = str.length-1; i >=0; i--){
//         revStr +=str[i]
//     }
//     return revStr;

// }

// console.log(reverString('what happen'));

// function reverArray(arr){
//     let reveArr = [];
//     for(let i=arr.length-1; i >= 0; i--){
//         reveArr.push(arr[i])
//     }
//     return reveArr;
// }

// console.log(reverArray(['i','l','o','v','e']))

// function capitalizeWords(str) {
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }
// let sentence = "i love you sruthi";

// console.log(capitalizeWords(sentence));  // Output: "I Love You Sruthi"

// function  countCharacterOccurrence(sentence){
//     let charCount = {}
//     for(let letter of sentence){
//         charCount[letter] = (charCount[letter] || 0 ) + 1
//     }
//     return charCount;

// }
// console.log(countCharacterOccurrence("hello world"));  // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

// function findMissingNumbers(arr){
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)
//     let missNumber = []
//     for(let i =  min; i <= max; i++){
//         if(!arr.includes(i)){
//             missNumber.push(i)
//         }
//     }
//     return missNumber;
// }
// console.log(findMissingNumbers([1, 2, 4, 6, 7, 9]));  // Output: [3, 5, 8]

//Bubble sort algorithm
// function sortArray(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 //swapping the elements
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements using destructuring
//             }

//         }
//     }
//     return arr
// }
// console.log(sortArray([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]

// function outer() {
//     let count = 0; // Private variable

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner; // Return the function, NOT the result
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter(); // 4
// counter(); // 5
// counter(); // 6


//Increment Inside a Function
// let count = 0;

// function increment() {
//     count++;
//     console.log(count);
// }

// increment(); // 1
// increment(); // 2
// increment(); // 3
// increment(); // 4

// search for a specific value inside a nested object, 
// you can write a recursive function
// const data = {
//     user: {
//       name: "Alice",
//       details: {
//         address: {
//           city: "New York",
//           zip: "10001"
//         },
//         hobbies: ["reading", "coding"]
//       }
//     }
//   };
  
//   function hasValue(obj, target) {
//     for (let key in obj) {
//       const value = obj[key];
  
//       if (typeof value === "object" && value !== null) {
//         if (hasValue(value, target)) 
//           return true;
//       } else {
//         if (value === target) 
//           return true;
//       }
//     }
//     return false;
//   }
// console.log(hasValue(data, "New York")); // true
// console.log(hasValue(data, "dancing"));  // false
// console.log(hasValue(data, "coding"));   // true    

// function to flatten a nested array and keep all values using recursion
function keepValue(arr) {
    let output = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            output.push(...keepValue(item)); // Flatten nested array
        } else {
            output.push(item);
        }
    }
    return output;
}

const arr = [1, [2, [3, 4], 5], 6];

console.log(keepValue(arr)); //output: [1, 2, 3, 4, 5, 6]

// function keepValue(arr){
//     let output = []
//     for(let i of arr){
//         if(i == number){
//             output.push(i)
//         }
//         if(i !==null ){
//             const num = map.(i => i.charAt(0).remove())
//             output.push(num)
//         }
//     }
//     return ouput
// }
// const arr = [1, [2, [3, 4], 5], 6];
// // output = [1, 2, 3, 4, 5, 6]

// console.log(keepValue(arr));