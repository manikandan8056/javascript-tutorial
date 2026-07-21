// Approach 1

// function firstNonRepeatingCharacter(str){

//     for(let i = 0; i < str.length; i++){

//         let count = 0;

//         for(let j = 0; j < str.length; j++){

//             if(str[i] === str[j]){
//                 count++;
//             }

//         }

//         if(count === 1){
//             return str[i];
//         }

//     }
//     return null;
// }

// Approach 2: Optimized Using an Object (Hash Map)
function firstNonRepeatingCharacter(str){
    
}


console.log(firstNonRepeatingCharacter("aabbcdde"));   // c
// console.log(firstNonRepeatingCharacter("javascript")); // j
// console.log(firstNonRepeatingCharacter("aabbcc"));     // null
// console.log(firstNonRepeatingCharacter("swiss"));      // w