// For Node.js interviews, learn these phases:
// ***********************************************
// ┌──────────────────────┐
// │ Timers               │
// ├──────────────────────┤
// │ Pending Callbacks    │
// ├──────────────────────┤
// │ Idle / Prepare       │
// ├──────────────────────┤
// │ Poll                 │
// ├──────────────────────┤
// │ Check                │
// ├──────────────────────┤
// │ Close Callbacks      │
// └──────────────────────┘
// Timers

// Handles callbacks from:

setTimeout()
setInterval()
// Poll

// Handles I/O operations such as:

// file system
// network
// database
// Check

// Handles:

// setImmediate()
// Close callbacks

// Handles close events such as:

// socket.on("close", ...)


// setTimeout() vs setImmediate()
// ***********************************
// Very common Node.js interview question.

setTimeout(() => {
    console.log("timeout");
}, 0);

setImmediate(() => {
    console.log("immediate");
});

// When executed from the main module, the order can be non-deterministic depending on timing.

// But inside an I/O callback:

fs.readFile("file.txt", () => {

    setTimeout(() => {
        console.log("timeout");
    }, 0);

    setImmediate(() => {
        console.log("immediate");
    });

});

// Typically:

// immediate
// timeout

// because setImmediate() runs in the check phase, which follows the poll phase.

// process.nextTick() vs Promise
// ***********************************
// Node.js has another important queue:

// process.nextTick()

// Example:

console.log("A");

process.nextTick(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Typical Node.js output:

// A
// D
// B
// C

// For interviews, remember:

// Synchronous
//     ↓
// process.nextTick()
//     ↓
// Promise microtasks
//     ↓
// Event Loop phases

// Be careful with process.nextTick() because excessive use can starve I/O.

// Browser vs Node.js
// | Browser            | Node.js              |
// | ------------------ | -------------------- |
// | Web APIs           | Node.js APIs/libuv   |
// | Task Queue         | Event Loop phases    |
// | Microtask Queue    | Microtask queues     |
// | `setTimeout()`     | `setTimeout()`       |
// | DOM events         | I/O events           |
// | `fetch()`          | Network APIs         |
// | `queueMicrotask()` | `queueMicrotask()`   |
// | —                  | `process.nextTick()` |
// | —                  | `setImmediate()`     |

