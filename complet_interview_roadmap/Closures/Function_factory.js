// A function factory creates functions dynamically.

function multiplyBy(x) {
    return function (y) {
        return x * y;
    };
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy2(10)); // 20
console.log(multiplyBy5(10)); // 50

// Each returned function remembers its own x.

// multiplyBy2 → x = 2
// multiplyBy5 → x = 5

// This is another example of closure.