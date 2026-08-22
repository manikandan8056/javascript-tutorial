// Create a Promise

// A Promise represents a value that may be available now, later, or never.

// It has 3 states:

// 1.pending
// 2.fulfilled
// 3.rejected
const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});


promise
    .then(result => console.log(result))
    .catch(error => console.log(error));

// Output:
// Operation successful

// Using async/await

async function execute() {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

execute();