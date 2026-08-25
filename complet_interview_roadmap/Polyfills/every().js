// What every() does
// Returns true only if all elements satisfy the condition.

const numbers = [2, 4, 6, 8];

console.log(
    numbers.every(num => num % 2 === 0)
);

// true
// Polyfill
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }

    return true;
};
// Key point

// every() uses AND logic.

// All → true
// At least one fails → false