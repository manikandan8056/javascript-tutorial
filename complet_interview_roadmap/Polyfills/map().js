// What map() does
// map() creates a new array by transforming every element.

const numbers = [1, 2, 3];

const result = numbers.map((num) => num * 2);

console.log(result); // [2, 4, 6]
// Polyfill
Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
};
// Usage
const numbers = [1, 2, 3];

const result = numbers.myMap((num) => {
    return num * 2;
});

console.log(result); // [2, 4, 6]
// Interview explanation

// "myMap creates a new array, loops through the original array, executes the callback for every element, 
// and pushes the returned value into the new array."

// Time: O(n)
// Space: O(n)