function sumArray(arr, index = 0) {
    if (index === arr.length) {
        return 0;
    }

    return arr[index] + sumArray(arr, index + 1);
}

console.log(sumArray([1,2,3,4,5]));