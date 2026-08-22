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

// without using split()
function reverseWords(str){

    let word = [];
    let currentWord = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] !== ' '){
            currentWord +=str[i];
        }
        else{
            word.push(currentWord);
            currentWord = '';
        }
    }
    word.push(currentWord);
    // return word;

    let result = '';
    for(let i = word.length-1; i >= 0 ; i--){
        result +=word[i]
        if(word[i] !== 0){
            result +=' '
        }
    }
    return result
}
console.log(reverseWords("Suruthi You Love I"));// I Love You Sruthi
