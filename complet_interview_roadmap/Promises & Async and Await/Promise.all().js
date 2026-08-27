// Use Promise.all() when you have multiple independent promises and need all results.

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Orders");
const p3 = Promise.resolve("Products");

Promise.all([p1, p2, p3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.log(error);
    });

// Output:

// ["User", "Orders", "Products"]
// If one fails?
// const p1 = Promise.resolve("User");
// const p2 = Promise.reject("Order failed");
// const p3 = Promise.resolve("Products");

// Promise.all([p1, p2, p3])
//     .then(console.log)
//     .catch(console.log);

// Output:
// Order failed

// Even though p1 and p3 succeeded, Promise.all() rejects when any one promise rejects.

// Real-world example:
// Suppose your React application needs:

// User
// Products
// Orders

// These don't depend on each other, so fetch them in parallel:

async function loadDashboard() {
    const [user, products, orders] = await Promise.all([
        getUser(),
        getProducts(),
        getOrders()
    ]);

    console.log(user);
    console.log(products);
    console.log(orders);
}