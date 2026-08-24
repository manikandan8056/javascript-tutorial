// The browser provides APIs that JavaScript can use for asynchronous operations.

// Examples:

// setTimeout()
// fetch()
// DOM events
// setInterval()

// Example:-

console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 1000);

console.log("End");

// The timer doesn't sit inside the Call Stack for one second.

// Conceptually:-

// Call Stack
//     |
//     | setTimeout()
//     ↓
// Browser Web API
//     |
//     | waits 1 second
//     ↓
// Callback Queue
//     |
//     ↓
// Event Loop
//     |
//     ↓
// Call Stack

// Output:

// Start
// End
// Timer