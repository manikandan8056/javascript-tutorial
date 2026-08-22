// Promise.allSettled() waits for every promise, regardless of success or failure.

const p1 = Promise.resolve("User");
const p2 = Promise.reject("Order failed");
const p3 = Promise.resolve("Products");

Promise.allSettled([p1, p2, p3])
    .then(results => {
        console.log(results);
    });

Result:

[
    {
        status: "fulfilled",
        value: "User"
    },
    {
        status: "rejected",
        reason: "Order failed"
    },
    {
        status: "fulfilled",
        value: "Products"
    }
]

// | Method                 | If one fails        | Gets all results? |
// | ---------------------- | ------------------- | ----------------- |
// | `Promise.all()`        | Rejects immediately | ❌                 |
// | `Promise.allSettled()` | Continues           | ✅                 |


// Use allSettled() when every operation is independent and you want to know which succeeded and which failed.