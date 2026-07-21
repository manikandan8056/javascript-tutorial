// Approach 1: Without reverse()

// function reverseWords(str){
//     let word = str.split(" ")
//     let result = '';
//     for(let i = word.length-1; i >= 0; i--){
//         result +=word[i];
//         if(i > 0){
//             result +=" ";
//         }
//     }
//     return result;
// }

// Approach 2: Using Built-in Functions

function reverseWords(str){
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("I Love JavaScript"));