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

function characterFrequency(str){

    let frequency = {};

    for(let i = 0; i < str.length; i++){

        let ch = str[i].toLowerCase()
        
        if(frequency[ch]){
            frequency[ch]++;
        }
        else{
            frequency[ch] = 1;
        }
        
    }
    return frequency;
}
console.log(characterFrequency("programming"));