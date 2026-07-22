// Approach 1: Using Nested Loops
// function findAllSubstrings(str){
//     for(let i = 0; i < str.length; i++){
//         let curentSubstring = '';
//         for(let j = i; j < str.length; j++){
//             curentSubstring +=str[j];
//             console.log(curentSubstring)
//         }
//     }
// }

function findAllSubstrings(str){
    for(let i = 0; i < str.length; i++){
        for(let j = i; j <= str.length; j++){
            console.log(str.slice(i,j))
        }
    }
}

findAllSubstrings("abc");