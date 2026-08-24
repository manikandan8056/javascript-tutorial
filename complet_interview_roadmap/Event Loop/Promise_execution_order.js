// This is one of the most common interview areas.

// Consider:

console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");

// Output:

// 1
// 3
// 2

// Because .then() is asynchronous.

// Even though the Promise is already resolved, its callback goes to the Microtask Queue.

// Promise + setTimeout
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output:

// Start
// End
// Promise
// Timeout

// Remember:

// Synchronous code
//        ↓
// Microtasks
//        ↓
// Tasks / callbacks