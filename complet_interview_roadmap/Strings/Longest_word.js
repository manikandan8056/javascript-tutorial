// Approach 1: Without split()

function longestWord(str){
    let currentWord = '';
    let longestWord = '';

    for(let i = 0; i <= str.length; i++){
        if(i === str.length || str[i] === " "){ // last word and space then only came inside condition

            if(currentWord.length > longestWord.length){
                longestWord = currentWord
            }
            currentWord = ''
            
        }
        else{
                currentWord +=str[i]
            }
    }
    return longestWord;
}

// Approach 2: Using split()
// function longestWord(str){
//     let word = str.split(" ")
//     // console.log(word);
//     let largest = ''
//     for(let i = 0; i < word.length; i++){
//         // console.log(word[i]);
//         if(word[i] > largest){
//             largest = word[i]
//         }
//     }
//     return largest;
// }

console.log(longestWord("I love JavaScript programming"));