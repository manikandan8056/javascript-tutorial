
function isPalindrom(str){
    let reverseStr = str.split().reverse().join()
    if(reverseStr === str){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

isPalindrom("racecar")