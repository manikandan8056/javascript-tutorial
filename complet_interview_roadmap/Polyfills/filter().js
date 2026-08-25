// What filter() does
// Returns a new array containing only elements that satisfy a condition.

const numbers = [1, 2, 3, 4];

const result = numbers.filter((num) => num % 2 === 0);

console.log(result); // [2, 4]
// Polyfill
Array.prototype.myFilter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};
// Usage
const numbers = [1, 2, 3, 4, 5];

console.log(
    numbers.myFilter((num) => num > 2)
);

// [3, 4, 5]
// Interview explanation

// "I create an empty array, iterate over the original array, execute the callback, 
// and push the current element only when the callback returns a truthy value."

// Time: O(n)
// Space: O(n)