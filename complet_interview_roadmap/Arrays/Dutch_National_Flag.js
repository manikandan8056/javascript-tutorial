function sort012(arr){
    let low = 0;
    let mid = 0;
    let high = arr.length-1;

    while (mid <= high) {
        if(arr[mid] == 0){
            // Swap arr[low] and arr[mid]
            let swap = arr[low];
            arr[low] = arr[mid];
            arr[mid] = swap
            low++
            mid++

        }
        else if(arr[mid] == 1){
            mid++
        }
        else if(arr[mid] == 2){
            // Swap arr[mid] and arr[high]
            let swap = arr[mid];
            arr[mid] = arr[high];
            arr[high] = swap;
            high--
        }
    }
    return arr
}


console.log(sort012([2, 0, 2, 1, 1, 0])); // [ 0, 0, 1, 1, 2, 2 ]