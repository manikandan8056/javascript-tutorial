//CountTruthy
//------------
//falsy:- undefined,null,0,"",false

const array=[0,null,undefined,"",false,2,3,5];//numbers only consider as a value
const CountTruthy=(array)=>{
    let Count = 0;
    for(let value of array)
        if(value)//javascript engine easly find boolean or non boolean it is truthy or falsy
        //if the result is truthy count can be increment
         Count++;
    return Count;

}
console.log(CountTruthy(array));