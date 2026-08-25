// Native
const numbers = [1, 2, 3];

numbers.forEach((num) => {
    console.log(num);
});

// forEach() does not return a new array.

// Polyfill
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
// Usage
const numbers = [10, 20, 30];

numbers.myForEach((num, index) => {
    console.log(index, num);
});

// Output:

// 0 10
// 1 20
// 2 30
// Interview explanation

// "forEach simply iterates over the array and executes the callback for each element. 
// Unlike map, it doesn't create or return a new array."