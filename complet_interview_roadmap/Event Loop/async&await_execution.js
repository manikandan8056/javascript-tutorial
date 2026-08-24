// async/await is built on top of Promises.

// Example:

async function test() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

test();

console.log("D");

// Output:

// C
// A
// D
// B

// Why?

// Before await:

console.log("A");

// runs synchronously.

// At:

await Promise.resolve();

// the rest of the function is scheduled as a microtask.

// So:

// C
// A
// D
// B
// Very important interview rule

// Think of:

// await something;

// as:

// Pause this async function and schedule the continuation as a Promise microtask.

// It does not block the entire JavaScript thread.