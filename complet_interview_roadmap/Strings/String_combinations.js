// Approach 1: Recursion

function combinations(str, current='', index = 0){
    if (current.length > 0) {
        console.log(current);
    }
    for(let i = index; i < str.length; i++){
        combinations(str, current + str[i], i + 1)
    }

}

combinations("ABC");