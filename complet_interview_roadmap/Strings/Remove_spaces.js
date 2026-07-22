// Approach 1: Using a Loop

// function removeSpaces(str){
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             result +=str[i]
//         }
//     }
//     return result;
// }

// Approach 2: Using Built-in Function

function removeSpaces(str){
    return str.replaceAll(" ", "")
}
console.log(removeSpaces(" I Love JavaScript "));