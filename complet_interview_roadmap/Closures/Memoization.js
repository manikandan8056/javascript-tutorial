// Memoization means caching previously calculated results.

function memoize(fn) {
    const cache = {};

    return function (num) {

        if (cache[num]) {
            console.log("From cache");
            return cache[num];
        }

        console.log("Calculating");

        const result = fn(num);

        cache[num] = result;

        return result;
    };
}

function square(num) {
    return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
// Calculating
// 25

console.log(memoizedSquare(5));
// From cache
// 25

// The closure remembers:

// cache
// even after memoize() has completed.
// Important interview point
// Memoization improves performance by trading memory for computation time.