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

    let frequency = {}; // { a: 2, b: 2, c: 1, d: 2, e: 1 }
    // frequency counter 
    for(let i = 0; i < str.length; i++){
        if(frequency[str[i]]){
            frequency[str[i]]++;
        }
        else{
            frequency[str[i]] = 1
        }
    }
    // Find first character with count 1
    for(let i = 0; i < str.length; i++){
        if(frequency[str[i]] === 1){
            return str[i]
        }
    }

    // return frequency;

}


console.log(firstNonRepeatingCharacter("aabbcdde"));   // c
// console.log(firstNonRepeatingCharacter("javascript")); // j
// console.log(firstNonRepeatingCharacter("aabbcc"));     // null
// console.log(firstNonRepeatingCharacter("swiss"));      // w