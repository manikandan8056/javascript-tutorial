// Approach 1: Using Built-in Functions
// function capitalizeWords(str){
//     if (str.length === 0) {
//         return null;
//     }
//     return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")  
// }


// Approach 2: Without split(), join(), or slice()
function capitalizeWords(str){
    if (str.length === 0) {
        return null;
    }

    let result = '';
    for(let i = 0; i < str.length; i++){
        if(i === 0 || str[i-1] === " "){
            result +=str[i].toUpperCase()
        }
        else{
            result +=str[i]
        } 
    }
    return result;
}

let sentence = "i love you sruthi";
// let sentence = ""

console.log(capitalizeWords(sentence));  // Output: "I Love You Sruthi"