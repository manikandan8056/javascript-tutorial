// ⭐ Most Important Interview Questions

// For your interview preparation, make sure you can explain these without looking at notes:

// 1. What is a closure?

// A closure is created when a function remembers and retains access to variables from its outer lexical scope, 
// even after the outer function has finished executing.

// 2. Why are closures useful?

// Main uses:

// Private variables
//      ↓
// Data encapsulation
//      ↓
// Function factories
//      ↓
// Memoization
//      ↓
// Callbacks
//      ↓
// Event listeners
//      ↓
// Debounce / Throttle
// 3. Does closure copy the variable?

// Usually, think of it as the function retaining access to the lexical environment, not simply making a snapshot copy.

// That's why this works:

function counter() {
    let count = 0;

    return () => ++count;
}

const c = counter();

console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3

// The closure retains access to the same count.

// 🔥 One Interview Problem Combining Everything

// Try predicting the output before running it:

function createCounter() {
    let count = 0;

    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter2.increment());
console.log(counter1.getCount());
console.log(counter2.getCount());

// Answer:

// 1
// 2
// 1
// 2
// 1

// Because counter1 and counter2 each have their own closure and their own count variable.

// 🧠 Closure Mental Model

// Whenever you see:

function outer() {
    let data = something;

    return function inner() {
        // uses data
    };
}

// Think:

// outer()
//   │
//   ├── data
//   │
//   └── inner()
//          │
//          └── 🔒 remembers data

// That mental model will help you solve most closure output questions quickly.