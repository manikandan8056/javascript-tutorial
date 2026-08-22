// Approach 1: Using an Object
// function characterFrequency(str){

//     let frequency = {};

//     for(let i = 0; i < str.length; i++){
        
//         if(frequency[str[i]]){
//             frequency[str[i]]++;
//         }
//         else{
//             frequency[str[i]] = 1;
//         }

//     }
//     return frequency;
// }

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


console.log(compressString("aaabbccccd"));