
// function bubbleSort(arr){  
//     for(let i = 0; i < arr.length-1; i++){
//         //  let swapped = false;
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 // swapped = true;
//             }
//         }
//         // if(!swapped){
//         //     break; 
//         // }
//     }
//     return arr;
// }


// console.log(bubbleSort([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]


// function selectionSort(arr){
//     for(let i = 0; i < arr.length-1; i++){
//         let minIndex = i;
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[minIndex]){
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i){
//             let swap = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = swap
//         }
//     }
//     return arr;
// }
// console.log(selectionSort([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]

function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let currentValue = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > currentValue){
            arr[j+1] = arr[j]
            j--;
        }
        arr[j+1]=currentValue;
    }
    return arr;
}

console.log(insertionSort([5,2,9,1,5,6]));// Output: [1, 2, 5, 5, 6, 9]