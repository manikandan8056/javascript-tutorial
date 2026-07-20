// Approach 1: Brute Force

function productExceptSelf(arr){
    let result = []

    for(let i = 0; i< arr.length; i++){
        
        let product = 1;

        for(let j = 0; j < arr.length; j++){

            if(i !== j){
                product *=arr[j]
            }
        }
        result.push(product);
    }
    return result;
}

// Approach 2: Prefix & Suffix Product


console.log(productExceptSelf([1,2,3,4]));