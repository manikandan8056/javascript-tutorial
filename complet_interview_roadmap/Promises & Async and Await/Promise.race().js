// Promise.race() returns the result of the first promise to settle.

// "Settle" means either:
// fulfilled
// rejected

const p1 = new Promise(resolve => {
    setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise(resolve => {
    setTimeout(() => resolve("Second"), 500);
});

Promise.race([p1, p2])
    .then(result => {
        console.log(result);
    });

// Output:
// Second

// Because p2 completed first.

// Common use case: timeout
const apiCall = fetch("/api/users");

const timeout = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Request timed out");
    }, 3000);
});

Promise.race([apiCall, timeout])
    .then(result => console.log(result))
    .catch(error => console.log(error));