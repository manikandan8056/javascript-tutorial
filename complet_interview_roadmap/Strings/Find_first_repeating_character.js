
// function firstRepeatingCharacter(str){

//     for(let i = 0; i < str.length; i++){
//         let count = 0;

//         for(let j = 0; j < str.length; j++){
//             if(str[i] == str[j]){
//                 count++
//             }
//         }
//         if(count >= 2){
//             return str[i]
//         }
//     }
//     return null;
// }

// Approach 2: Optimized Using an Object (Hash Map)

function firstRepeatingCharacter(str){
    let seen = {};

    for(let i = 0; i < str.length; i++){
        if(seen[str[i]]){
            return str[i]
        }
        seen[str[i]] = true
    }
    return null;
}

// console.log(firstRepeatingCharacter("aabbcdde"));   // a
// console.log(firstRepeatingCharacter("javascript")); // a
// console.log(firstRepeatingCharacter("abc"));     // null
console.log(firstRepeatingCharacter("swiss"));      // s