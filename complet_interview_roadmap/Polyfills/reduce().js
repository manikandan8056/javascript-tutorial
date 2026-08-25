// This is one of the most important polyfills for interviews.
// Native example

const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(result); // 10
// Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator;
    let startIndex;

    if (arguments.length >= 2) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(
            accumulator,
            this[i],
            i,
            this
        );
    }

    return accumulator;
};
// Usage
const numbers = [1, 2, 3, 4];

const result = numbers.myReduce(
    (acc, num) => acc + num,
    0
);

console.log(result); // 10
// Without initial value
const numbers = [1, 2, 3, 4];

console.log(
    numbers.myReduce((acc, num) => acc + num)
);

// 10
// Interview explanation

// "Reduce maintains an accumulator. If an initial value is provided, I use it as the accumulator 
// and start from index 0. Otherwise, I use the first array element as the accumulator and start from index 1."

// Time: O(n)
// Space: O(1) excluding the callback.