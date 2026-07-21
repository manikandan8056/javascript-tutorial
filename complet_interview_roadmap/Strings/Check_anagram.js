// Approach 1: Without Sorting
// function checkAnagram(str1, str2) {

//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let frequency = {};

//     // Count characters from first string
//     for (let i = 0; i < str1.length; i++) {

//         if (frequency[str1[i]]) {
//             frequency[str1[i]]++;
//         } else {
//             frequency[str1[i]] = 1;
//         }

//     }

//     // Decrease count using second string
//     for (let i = 0; i < str2.length; i++) {

//         if (!frequency[str2[i]]) {
//             return false;
//         }

//         frequency[str2[i]]--;
//     }

//     return true;
// }



// Approach 2: Using Sorting
function checkAnagram(str1, str2){
    if (str1.length !== str2.length) {
        return null;
    }
    let sort1 = str1.split("").sort().join("")
    let sort2 = str2.split("").sort().join("")
    // console.log(sort1)
    // console.log(sort2)
    if( sort1 === sort2){
        return "This is Anagram";
    }
    return "This is not Anagram"
}
// console.log(checkAnagram("listen", "silent"));
console.log(checkAnagram("hello", "world"));
