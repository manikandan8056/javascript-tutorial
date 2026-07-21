

function countVowels(str){
    const vowels = ["a", "e","i","o","u"]
    let count = 0
    for(let i of str.toLowerCase()){
        if(vowels.includes(i)){
            console.log(i);
            count++
        }
    }
    return count;

}

console.log(countVowels("Hello world"))