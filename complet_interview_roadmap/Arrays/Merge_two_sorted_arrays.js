function mergeSortedArrays(arr1, arr2){

    let result = [];
    let i = 0;
    let j = 0;

    // compare elements of both arrays and push the smaller one to result array
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i]) // push the smaller element to result array
            i++
        }
        else{
            result.push(arr2[j]) // push the smaller element to result array
            j++
        }
    }

    // Remaining elements of arr1
    while(i < arr1.length){
        result.push(arr1[i]) // push remaining elements of arr1 to result array
        i++
    }
    // Remaining elements of arr2
    while(j < arr2.length){
        result.push(arr2[j]) // push remaining elements of arr2 to result array
        j++
    }
    return result;
}

console.log(mergeSortedArrays([1,3,5,7,9],[2,4,6,8,10])); // output [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]