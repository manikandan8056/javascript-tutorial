function flattenArray(arr){
    let result = []

    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...flattenArray(item))
        }
        else{
            result.push(item)
        }
    }
    return result;
}


const arr = [1, [2, [3, 4], 5], 6];

console.log(flattenArray(arr)) // [ 1, 2, 3, 4, 5, 6 ]


// Call Stack
// flatten([1,[2,[3,4],5],6])

// │
// ├── item = 1
// │      result = [1]
// │
// ├── item = [2,[3,4],5]
// │
// │      flatten([2,[3,4],5])
// │
// │      │
// │      ├── item = 2
// │      │      result = [2]
// │      │
// │      ├── item = [3,4]
// │      │
// │      │      flatten([3,4])
// │      │
// │      │      ├── item = 3
// │      │      │      result = [3]
// │      │      │
// │      │      ├── item = 4
// │      │      │      result = [3,4]
// │      │      │
// │      │      └── return [3,4]
// │      │
// │      ├── result = [2,3,4]
// │      │
// │      ├── item = 5
// │      │      result = [2,3,4,5]
// │      │
// │      └── return [2,3,4,5]
// │
// ├── result = [1,2,3,4,5]
// │
// ├── item = 6
// │      result = [1,2,3,4,5,6]
// │
// └── return [1,2,3,4,5,6]
// Time Complexity
// O(n)

// Every element is visited exactly once.

// Space Complexity
// O(n)
// result stores all elements.
// Recursive calls use the call stack.