// When an asynchronous callback becomes ready, it can be placed into a queue.

// For example:

setTimeout(() => {
    console.log("Timeout");
}, 0);

// Even with 0ms, the callback does not execute immediately.

// It goes approximately:

// setTimeout
//    ↓
// Web API
//    ↓
// Callback / Task Queue
//    ↓
// Event Loop
//    ↓
// Call Stack