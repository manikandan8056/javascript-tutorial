// What find() does
// Returns the first element satisfying the condition.

const numbers = [1, 3, 5, 8, 10];

const result = numbers.find(num => num % 2 === 0);

console.log(result); // 8
// Polyfill
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }

    return undefined;
};
// Important

// Once a matching element is found, we immediately return.

if (callback(this[i], i, this)) {
    return this[i];
}

// So we don't unnecessarily loop through the remaining elements.

// Time: Best case O(1), worst case O(n).