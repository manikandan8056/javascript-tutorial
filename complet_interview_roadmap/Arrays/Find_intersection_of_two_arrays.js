// Approach 1 Brute Force
function findIntersection(arr1, arr2){
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i]) && !result.includes(arr1[i])){
            result.push(arr1[i])
        }
    }
    return result;
}

// Approach 2: Using Set (Interview Preferred)
// Logic
// Convert the second array into a Set.
// Set.has() takes O(1) average time.
// Traverse the first array.
// If the element exists in the set, add it to the result.
// Use another Set for the result to avoid duplicates

function findIntersection(arr1, arr2){
    let set = new Set(arr2);
    let result = [];

    for(let i of arr1){
        if(set.has(i)){
            result.push(i)
        }
    }
    return result;
}

console.log(findIntersection([1,2,3,4,5], [3,4,5,6,7])); // [ 3, 4, 5 ]