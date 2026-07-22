
// Approach 1 : Brute Force Approach
function longestSubstring(str){
    let maxLength = 0;
    for (let i = 0; i < str.length; i++) {
        let current = '';
        for(let j = i; j < str.length; j++){
            if(current.includes(str[j])){
                break;
            }
            current +=str[j]
            if(current.length > maxLength){
                maxLength = current.length  
            }
        }  
        
    }
    return maxLength
}

// Approach 2 : (Sliding Window)


// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("dvdf"));
console.log(longestSubstring("pwwkew"));