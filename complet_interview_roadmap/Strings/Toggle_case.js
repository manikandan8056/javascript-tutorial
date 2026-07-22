// Approach 1: Using Built-in Functions

function toggleCase(str){

    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] >= 'A' && str[i] <= 'Z'){
            result +=str[i].toLowerCase()
        }
        else if(str[i] >= 'a' && str[i] <= 'z'){
            result +=str[i].toUpperCase()
        }
        else{
            result +=str[i]
        }
    }
    return result;
}

console.log(toggleCase("JavaScript")); // jAVAsCRIPT

console.log(toggleCase("WELCOME")); // welcome

console.log(toggleCase("nodejs")); // NODEJS

console.log(toggleCase("ChatGPT 2025!")); // cHATgpt 2025!