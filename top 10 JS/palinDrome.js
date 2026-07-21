// palindrom is a word that read the same forword and backword
function isPalindrom(str){
    let reverseString = str.split("").reverse().join("")
    if(str === reverseString){
        console.log(true)
    }
    else{
        console.log(false)
    };
}
isPalindrom("racecar");
