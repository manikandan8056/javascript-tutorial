// Count character occurrence:
// *********************************

// const countCharacterOccurrence = (str) => {
//     const charCount = {};

//     for (const char of str) {
//         charCount[char] = (charCount[char] || 0) + 1; // charCount[char] if value not present we take it as a undefine
//     }

//     return charCount;
// };

// Example
// const countCharacterOccurrence = (str) =>{
//     const countChar={}
//     for(let char of str){
//         countChar[char] = (countChar[char] || 0 ) +1 ;
//     }
//     return countChar;
// }

// function countCharacterOccurrence(str){
//     countChar = {};
//     for(let char of str){
//         countChar[char] = (countChar[char] || 0) + 1;
//     }
//     return countChar;
// }

// function countCharacterOccurrence(str){
//     const countChar ={};
//     for(let char of str){
//         countChar[char] = (countChar[char] || 0) +1;
//     }
//     return countChar;
// }

// function countCharacterOccurrence(str){
//     let countChar = {}
//     for(let char of str){
//         countChar[char] = ((countChar[char] || 0) +1);
//     }
//     return countChar;
// }

// console.log(countCharacterOccurrence("hello"));  // Output: { h: 1, e: 1, l: 2, o: 1 }


function countCharacterOccurrence(str){
    let countChar = {};
    for(let ch of str){
        countChar[ch] = (countChar[ch] ||0) + 1;
    }
    return countChar;
}

console.log(countCharacterOccurrence("hello world"));  // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }