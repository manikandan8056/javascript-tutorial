// Approach 1: Recursion

function permutations(str, current=''){
    if(str.length == 0){
        console.log(current);
        return;
    }
    for(let i = 0; i < str.length; i++){
        let remainder = str.slice(0, i) + str.slice(i + 1)
        permutations(remainder, str[i] + current)
    }
}

permutations("ABC");
// permutations("");

// console.log("str".slice(0 + 1));
// console.log("str".slice(0 , 2));