//FizzBuzz
//--------------
// divisibel by 3 is fizz
// divisibel by 5 is buzz
// divisibel by both 3 and 5 => fizzbuzz
// not divisibel by 3 and 5 we will get same input
// not a namber  it show Not a number

const fizzbuzz =(input)=>{
    if (typeof input !== 'number')
        return NaN;
    else if ((input % 3 === 0) && (input % 5 === 0 ))
        return "fizzbuzz";
    else if (input % 3 ===0 )
        return "fizz";
    else if(input % 5 ===0 )
        return "buzz";
    return input;
}

const output=fizzbuzz(3);
console.log(output);