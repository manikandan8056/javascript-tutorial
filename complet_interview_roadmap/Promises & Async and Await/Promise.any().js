// Promise.any() returns the first fulfilled promise.

// Unlike Promise.race(), a rejection doesn't immediately make it fail.

const p1 = Promise.reject("Server 1 failed");

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Server 2 success"), 1000);
});

const p3 = new Promise(resolve => {
    setTimeout(() => resolve("Server 3 success"), 500);
});

Promise.any([p1, p2, p3])
    .then(result => {
        console.log(result);
    });

// Output:
// Server 3 success

// Important difference

// Promise.race()
//     ↓
// First settled promise

// Promise.any()
//     ↓
// First fulfilled promise

// If all promises reject, Promise.any() throws an AggregateError.