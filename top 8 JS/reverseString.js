

// function reverseString(str){
//     reversString= "";
//     for(let i = str.length-1; i>=0; i--){ //untill false loop can be run
//         reversString +=str[i];
//     }
//     return reversString;
// }

// function reverseString(str){
//     reversString = '';
//     for(let i = str.length -1; i >= 0; i--){
//         reversString +=str[i]
//     }
//     return reversString;
// }
// console.log(reverseString("hello")); 

// function reverseString(str){
//     reversString = '';
//     for(let i =str.length -1; i >= 0; i--){
//         reversString +=str[i];
//     }
//     return reversString;
// }


// function reverseString(str){
//     let revStr = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         revStr +=str[i];
//     }
//     return revStr;
// }


// function reverseString(str){
//     const revStr ='';
//     for(let i = str.length-1; i >= 0; i--){
//         revStr +=str[i]
//     }
//     return revStr;

// }

function reverseString(str){
    let revstr = '';
    for (let i = str.length - 1; i >= 0; i--){
        revstr += str[i];
    }
    return revstr;
}

console.log(reverseString('ihturS uoy evoL I'));
// console.log(('abcd efg').length); // Output: 4