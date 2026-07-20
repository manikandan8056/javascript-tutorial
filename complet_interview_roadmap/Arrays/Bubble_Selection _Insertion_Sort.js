
function bubbleSort(arr){
    
    for(let i = 0; i < arr.length-1; i++){
        //  let swapped = false;
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                // swapped = true;
            }

        }
        // if(!swapped){
        //     break; 
        // }
    }
    return arr;
}


console.log(bubbleSort([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]

// console.log(selectionSort([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]

// console.log(insertionSort([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]