// Brute force algaritham
// function reverseString(str){
//     let result = '';
//     for(let i = str.length-1; i >= 0;  i--){
//         result +=str[i];
//     }
//     return result;
// }
// console.log(reverseString('ihturS uoy evoL I')); // I Love you Sruthi

//
// function isPalindrom(str){
//     let check = str.split().reverse().join();
//     if(check === str){
//         console.log('true')
//     }
//     else{
//         console.log('false')
//     }
// }
// isPalindrom("racecar") // true

// function countVowels(str){
//     const vowels = ["a","e","i","o","u"];
    
//     let count = 0;
//     for(let i of str.toLowerCase()){
//         if(vowels.includes(i)){
//             // console.log(i)
//             count++
//         }
//     }
//     return count;
// }
// console.log(countVowels("Hello world")) // 3

// function countConsonants(str){

//     let count = 0;
//     for(let i of str.toLowerCase()){
//         if(i >= 'a' && i <= 'z' && 'a'!== i && 'e' !== i && 'i' !== i && 'o' !== i && 'u' !== i){
//             count++
//         }
//     }
//     return count;
// }
// function removeDuplicateCharacters(str){
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         let found = false
//         for(let j = 0; j < str.length; j++){
//             if(str[i] === result[j]){
//                 found = true;
//                 break;
//             }
//         }
//         if(!found){
//             result +=str[i]
//         }
//     }
//     return result;
// } 
// console.log(removeDuplicateCharacters("programming"));


// Approach 1
// function firstNonRepeatingCharacter(str){

//     for(let i = 0; i < str.length; i++){
//         let count = 0;
//         for(let j = 0; j < str.length; j++){
//             if(str[i] == str[j]){
//                 count++
//             }
//         }
//         if(count === 1){
//             return str[i]
//         }
//     }
// }

// Approach 2: Optimized Using an Object (Hash Map)
// function firstNonRepeatingCharacter(str){
//     let frequency = {};
//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]]){
//             frequency[str[i]]++
//         }
//         else{
//             frequency[str[i]] = 1
//         }
//     }
//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]] == 1){
//             return str[i];
//         } 
//     }
//     // return frequency;
// }
// console.log(firstNonRepeatingCharacter("aabbcdde"));   // c
// console.log(firstNonRepeatingCharacter("javascript")); // j
// console.log(firstNonRepeatingCharacter("aabbcc"));     // null
// console.log(firstNonRepeatingCharacter("swiss"));      // w

// function firstRepeatingCharacter(str){
//     for(let i = 0; i < str.length; i++){
//         let count = 0;
//         for(let j = 0; j < str.length; j++){
//             if(str[i] === str[j]){
//                 count++
//             }
//         }
//         if(count >= 2){
//             return str[i];
//         }
//     }
//     return null;
// }

// console.log(firstRepeatingCharacter("aabbcdde"));   // a
// console.log(firstRepeatingCharacter("javascript")); // a
// console.log(firstRepeatingCharacter("abc"));     // null
// console.log(firstRepeatingCharacter("swiss"));      // s

// function capitalizeWords(str){
//     let result ='';

//     for(let i = 0; i < str.length; i++){
//         if(i === 0 || str[i-1] === ' '){
//             result +=str[i].toUpperCase();
//         }
//         else{
//             result +=str[i]
//         }
//     }
//     return result;
// }
// function capitalizeWords(str){
//     return str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// }
// console.log(capitalizeWords("i love you sruthi"));  // Output: "I Love You Sruthi"

// function reverseWords(str){
//     return str.split(" ").reverse().join(" ")
// }

// function reverseWords(str){
//     let word = str.split(" ")
//     // return word
//     let result = '';
//     for(let i = word.length-1; i >= 0 ; i--){
//         result +=word[i]
//         if(word[i] !== 0){
//             result +=" "
//         }
//     }
//     return result
// }
// // without using split()
// function reverseWords(str){

//     let word = [];
//     let currentWord = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             currentWord +=str[i];
//         }
//         else{
//             word.push(currentWord);
//             currentWord = '';
//         }
//     }
//     word.push(currentWord);
//     // return word;

//     let result = '';
//     for(let i = word.length-1; i >= 0 ; i--){
//         result +=word[i]
//         if(word[i] !== 0){
//             result +=' '
//         }
//     }
//     return result
// }
// console.log(reverseWords("Suruthi You Love I"));// I Love You Sruthi

// function checkAnagram(str1, str2){
//     let sort1 = str1.split("").sort().join("");
//     let sort2 = str2.split("").sort().join("");

//     if(sort1 == sort2){
//         return "This is anagram"
//     }
//     else{
//         return "This is not a anagram"
//     }
// }
// console.log(checkAnagram("listen", "silent")); // This is anagram
// console.log(checkAnagram("hello", "world"));// This is not a anagram

// function longestWord(str){
//     let currentWord = '';
//     let longestWord = '';
//     for(let i = 0; i <= str.length; i++){
//         if(i == str.length ||str[i] === " "){
//             if(currentWord.length > longestWord.length){
//                     longestWord = currentWord
//                     currentWord = ''
//             }
//         }
//         else{
//             currentWord +=str[i]
//         }
//     }
//     return longestWord;
// }

// function longestWord(str){
//     let word = str.split(" ")
//     let longtWord = '';
//     for(let i = 0; i < word.length; i++){
//         if(word[i] > longtWord){
//             longtWord = word[i]
//         }
//     }
//     return longtWord;
// }
// console.log(longestWord("I love JavaScript programming"));


// function longestSubstring(str){
//     let maxLength = 0;
//     for(let i = 0; i < str.length; i++){
//         let current = '';
//         for(let j = i; j < str.length; j++){
//             if(current.includes(str[j])){
//                 break;
//             }
//             current +=str[j]
//             if(current.length > maxLength){
//                 maxLength = current.length;
//             }
//         }
//     }
//     return maxLength;
// }

// console.log(longestSubstring("abcabcbb"));// 3
// console.log(longestSubstring("dvdf")); // 3
// console.log(longestSubstring("pwwkew"));// 3

// function characterFrequency(str){

//     let frequency = {};
//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]]){
//             frequency[str[i]]++
//         }
//         else{
//             frequency[str[i]] = 1;
//         }
//     }
//     return frequency;
// }

// console.log(characterFrequency("programming")); //{ p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }

//  Approach 2: Ignore Spaces and Case

// function characterFrequency(str){
//     let frequency = {};

//     for(let i = 0; i < str.length; i++){
//         if(str[i] != " "){
//             let ch = str[i].toLowerCase();
//             // console.log(ch)
//             if(frequency[ch]){
//                 frequency[ch]++
//             }
//             else{
//                 frequency[ch] = 1;
//             }
//         }
//     }
//     return frequency;
// }

// console.log(characterFrequency("I Love Programming")); // { i: 2, l: 1, o: 2, v: 1, e: 1, p: 1, r: 2, g: 2, a: 1, m: 2, n: 1 }

// function compressString(str){
//     let result='';
//     let count = 1;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i+1]){
//             count++
//         }
//         else{
//             result +=str[i]+count
//             count = 1
//         }
//     }
//     return result
// }
// console.log(compressString("aaabbccccd"));// a3b2c4d1

// function removeSpaces(str){
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] != " "){
//             result +=str[i]
//         }
//     }
//     return result;
// }

// function removeSpaces(str){
//     return str.replaceAll(" ", "")
// }
// console.log(removeSpaces(" I Love JavaScript ")); // ILoveJavaScript

// function toggleCase(str){
//     let result = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= 'A' && str[i] <= 'Z'){
//             result +=str[i].toLowerCase()
//         }
//         else if(str[i] >= 'a' && str[i] <= 'z'){
//             result +=str[i].toUpperCase()
//         }
//         else{
//             result +=str[i]
//         }
//     }
//     return result;
// }
// console.log(toggleCase("JavaScript")); // jAVAsCRIPT
// console.log(toggleCase("WELCOME")); // welcome
// console.log(toggleCase("nodejs")); // NODEJS
// console.log(toggleCase("ChatGPT 2025!")); // cHATgpt 2025!


// function checkRotation(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let combine = str1 + str1;
//     return combine.includes(str2);
// }

// console.log(checkRotation("ABCD", "CDAB"));// true
// console.log(checkRotation("water", "terwa"));// true
// console.log(checkRotation("hello", "world"));// false


// function buildLPS(pattern) {

//     let lps = new Array(pattern.length).fill(0); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]


//     let length = 0;
//     let i = 1;

//     while (i < pattern.length) {

//         if (pattern[i] === pattern[length]) {

//             length++;
//             lps[i] = length;
//             i++;

//         } else {

//             if (length !== 0) {
//                 length = lps[length - 1];
//             } else {
//                 lps[i] = 0;
//                 i++;
//             }
//         }
//     }

//     return lps; // [ 0, 0, 1, 2, 0, 1, 2, 3, 4 ]
// }

// function KMP(text, pattern) {

//     let lps = buildLPS(pattern); // [ 0, 0, 1, 2, 0, 1, 2, 3, 4 ]

//     let i = 0;
//     let j = 0;

//     while (i < text.length) {

//         if (text[i] === pattern[j]) {
//             i++;
//             j++;
//         }

//         if (j === pattern.length) {
//             return i - j;
//         }

//         else if (i < text.length && text[i] !== pattern[j]) {

//             if (j !== 0) {
//                 j = lps[j - 1];
//             } else {
//                 i++;
//             }
//         }
//     }

//     return -1;
// }


// console.log(buildLPS("ABABCABAB")) // [ 0, 0, 1, 2, 0, 1, 2, 3, 4 ]

// console.log(KMP("ABABDABACDABABCABAB", "ABABCABAB")); // 10
// console.log(KMP("Hello World", "JavaScript"));


