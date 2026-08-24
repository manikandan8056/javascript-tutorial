// Must-Know Interview Questions
// *********************************
// For your interview preparation, make sure you can answer these without looking at notes:

// Basic
// *********
// What is the JavaScript Event Loop?
// What is the Call Stack?
// What are Web APIs?
// What is the Callback Queue?
// What is the Microtask Queue?
// What is the difference between Microtask and Macrotask?
// Why does setTimeout(fn, 0) not execute immediately?
// Are Promises synchronous or asynchronous?
// Is async/await synchronous or asynchronous?
// Does await block JavaScript execution?

// Output questions
// **********************
// Promise vs setTimeout
// Multiple .then() calls
// Nested Promises
// Promise inside setTimeout
// setTimeout inside Promise
// async/await + Promise
// Multiple setTimeout
// Nested async/await
// process.nextTick() vs Promise
// setImmediate() vs setTimeout()

// Node.js
// *************
// What are Node.js Event Loop phases?
// What happens during the Poll phase?
// What is the Check phase?
// What is setImmediate()?
// process.nextTick() vs setImmediate()
// Can Node.js handle multiple requests if JavaScript is single-threaded?
// What happens when a Node.js server receives 15K requests/sec?
// How can blocking code affect the Event Loop?
// What is Event Loop starvation?
// How do you identify Event Loop blocking in production?

// ⭐ The one mental model to memorize

// When you see an Event Loop output question, don't guess.

// Use this:

//                 JavaScript
//                     │
//                     ▼
//               ┌───────────┐
//               │ Call Stack│
//               └─────┬─────┘
//                     │
//           synchronous execution
//                     │
//                     ▼
//           ┌─────────────────┐
//           │ Microtask Queue │
//           │ Promise / await │
//           └────────┬────────┘
//                    │
//                    ▼
//           ┌─────────────────┐
//           │   Task Queue    │
//           │ setTimeout      │
//           │ DOM events      │
//           └────────┬────────┘
//                    │
//                    ▼
//               Event Loop
//                    │
//                    └──────→ Call Stack

// Interview shortcut:-

// Synchronous → Microtasks → Tasks

// And for Node.js:

// Synchronous → process.nextTick() → Promise microtasks → Event Loop phases