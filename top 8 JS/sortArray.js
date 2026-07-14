//Bubble Sort

// const sortArray = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp;
//                 // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements using destructuring
//             }
//         }
//     }
//     return arr;
// };

// const sortArray = (arr)=>{
//     for(let i = 0; i< arr.length; i++){
//         for(let j = 0; j <arr.length -i -1; j++){
//             if(arr[j] > arr[j+1]){
//                 var temp =arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//             }
            
//         }
//     }
//     return arr;
// }



//Bubble sort algorithm
// function sortArray(arr){
//     for(let i = 0; i < arr.length - 1; i++){
//         for(let j = 0; j < arr.length - i - 1; j++){
//             if(arr[j] > arr[j+1]){
//                 //swapping the elements
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }

//         }
//     }
//     return arr
// }

//Bubble sort algorithm
function sortArray(arr){
    for(let i = 0; i < arr.length - 1; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swapping the elements
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }

        }
    }
    return arr
}
console.log(sortArray([5, 2, 9, 1, 5, 6]));  // Output: [1, 2, 5, 5, 6, 9]