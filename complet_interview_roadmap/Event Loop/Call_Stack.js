// The Call Stack keeps track of currently executing JavaScript functions.

// JavaScript executes synchronous code one statement at a time.

function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();

// Execution:

// Call Stack

// first()
//   ↓
// second()
//   ↓
// console.log()
//   ↓
// second() removed
//   ↓
// first() removed

// The stack follows LIFO — Last In, First Out.

// Interview question

// Q: Is JavaScript single-threaded?

// Yes. JavaScript has a single call stack, so JavaScript code itself executes one piece of synchronous code at a time.

// However, browsers and Node.js provide mechanisms for handling asynchronous operations outside the call stack.