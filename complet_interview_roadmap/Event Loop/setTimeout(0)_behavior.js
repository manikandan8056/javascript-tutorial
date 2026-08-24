// This is a very common trick question.

setTimeout(() => {
    console.log("Hello");
}, 0);

console.log("World");

// Output:

// World
// Hello

// 0 does not mean:

// Execute immediately.

// It means approximately:

// Run the callback after the minimum delay has elapsed and when the event loop gets an opportunity to process it.

// For example:

setTimeout(() => {
    console.log("Timeout");
}, 0);

for (let i = 0; i < 1000000000; i++) {}

console.log("Done");

// You will get:

// Done
// Timeout

// The timer cannot interrupt the currently executing synchronous code.