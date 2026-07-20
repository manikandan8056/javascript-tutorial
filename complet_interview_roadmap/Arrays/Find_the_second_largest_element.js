//-Infinity is used in JavaScript when you want to initialize a variable with the smallest possible value, 
// so that any real number will be larger than it

//Brute Force 

// function findSecondLarge(arr){
//     if(arr.length < 2) return null;
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         }
//         else if(arr[i] > secondLargest && arr[i] !== largest ){
//             secondLargest = arr[i];

//         }
//     }
//     return secondLargest === -Infinity ? null : secondLargest;
    
// }






function findSecondLarge(arr){
    if(arr.length < 2) return null;
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i = 0; i< arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i]
        }
        else if(arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;

}
console.log(findSecondLarge([1,1,1,1]))
console.log(findSecondLarge([1,2,3,6,4,5,7,8]))


