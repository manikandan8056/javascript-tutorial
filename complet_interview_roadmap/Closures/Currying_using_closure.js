// Currying converts a function with multiple arguments into a sequence of functions.

// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6
// Curried version
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3)); // 6

// Arrow function version:

// const add = a => b => c => a + b + c;

console.log(add(1)(2)(3)); // 6

// The inner functions remember:

// a
// b

// through closures.