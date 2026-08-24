// The Microtask Queue contains higher-priority asynchronous work.

// Common examples:

// Promise.then()
// Promise.catch()
// Promise.finally()
// queueMicrotask()

// Example:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Output:

// A
// D
// C
// B

// Why?

// 1. A              → synchronous
// 2. D              → synchronous
// 3. C              → microtask
// 4. B              → callback/task
// Important rule

// After the current synchronous code finishes, the event loop processes microtasks before moving to the next task/callback.