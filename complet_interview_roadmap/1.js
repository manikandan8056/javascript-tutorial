// Coding Question 4: Find Most Frequent Element

// Solution
function mostFrequent(arr) {
    const map = new Map();
    for(let num of arr){
            map.set(num, (map.get(num) || 0) + 1)
    }

    let maxCount = 0 ;
    let mostFrequentElement 
    for(let [key, Count] of map){
        if(Count > maxCount){
            maxCount = Count
            mostFrequentElement  = key
        }
    }
    return {
        element: mostFrequentElement,
        count: maxCount
    };

}
// Input
const numbers = [1, 2, 2, 3, 2, 4, 1];
console.log(mostFrequent(numbers));// { element: 2, count: 3 }