// The Most Important Event Loop Rule

// For interview purposes, remember this sequence:

// 1. Execute synchronous code
// 2. Empty the Microtask Queue
// 3. Continue with the next Task
// 4. After that task, empty Microtasks again

// So:

console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

// Think:

// Synchronous:
// A
// D

// Microtask:
// C

// Task:
// B

// Final:

// A
// D
// C
// B
// #. Output Prediction — Interview Level 1
// Question
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");

// Answer:

// 1
// 3
// 2
// Question
console.log("1");

Promise.resolve().then(() => {
    console.log("2");
});

console.log("3");

// Answer:

// 1
// 3
// 2
// Question
setTimeout(() => console.log("A"), 0);

Promise.resolve().then(() => console.log("B"));

console.log("C");

// Answer:

// C
// B
// A
// #. Output Prediction — Interview Level 2
console.log("A");

setTimeout(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("D");
});

console.log("E");

// Let's execute it carefully.

// Synchronous
// A
// E
// Microtask
// D
// Timer callback
// B

// The timer creates another microtask:

Promise.resolve().then(() => {
    console.log("C");
});

// That microtask runs before moving to another task.

// Final:

// A
// E
// D
// B
// C
// #. Output Prediction — Interview Level 3
console.log("1");

setTimeout(() => {
    console.log("2");

    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("4");

    setTimeout(() => {
        console.log("5");
    }, 0);
});

console.log("6");

// Execution:

// Synchronous
// 1
// 6
// Microtask
// 4

// Microtask creates:

// Timer → 5
// First timer
// 2

// It creates another microtask:

// 3
// Microtask
// 3
// Next timer
// 5

// Final answer:

// 1
// 6
// 4
// 2
// 3
// 5