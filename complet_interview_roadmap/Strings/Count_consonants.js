
function countConsonants(str){
    let count = 0;
    for(let i of str.toLowerCase()){
        if(i >= 'a' && i <= 'z' && i != 'a' &&i != 'e' &&i != 'i' &&i != 'o' &&i != 'u'){
            count++
        }
    }
    return count;
}
console.log(countConsonants("Hello world"))