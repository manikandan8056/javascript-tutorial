// What some() does
// Returns true if at least one element satisfies the condition.

const numbers = [1, 3, 5, 8];

console.log(
    numbers.some(num => num % 2 === 0)
);

// true
// Polyfill
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
};
// Key point

// some() uses OR logic.

// At least one → true
// None → false