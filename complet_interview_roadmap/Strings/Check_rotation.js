// Approach 1: Using includes()

// function checkRotation(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }

//     let combine = str1 + str1;

//     return combine.includes(str2);
// }

// Approach 2: Without includes()

function checkRotation(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    for(let i = 0; i < str1.length; i++){
        let rotation  = str1.slice(i) + str1.slice(0,i)

        if(rotation == str2){
            return true
        }
    }
    return false
}
console.log(checkRotation("ABCD", "CDAB"));
console.log(checkRotation("water", "terwa"));
console.log(checkRotation("hello", "world"));