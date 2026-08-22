// Sequential means:

// API 1
//  ↓
// API 2
//  ↓
// API 3

// The next API depends on the previous API.

// Example:
async function getUser() {
    return {
        id: 101,
        name: "Mani"
    };
}

async function getOrders(userId) {
    return [
        { id: 1, userId }
    ];
}

async function getOrderDetails(orderId) {
    return {
        orderId,
        product: "Laptop"
    };
}

// Now:
async function execute() {

    const user = await getUser();

    const orders = await getOrders(user.id);

    const details = await getOrderDetails(orders[0].id);

    console.log(details);
}

execute();

// Flow:

// getUser()
//    ↓
// user.id
//    ↓
// getOrders(user.id)
//    ↓
// order.id
//    ↓
// getOrderDetails(order.id)

// Here you cannot run them all at the same time because each step needs data from the previous step.