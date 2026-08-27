// Parallel means multiple independent operations execute at the same time.

// Suppose:

getUser()
getProducts()
getCategories()

// None depends on another.

// Don't do:

// const user = await getUser();
// const products = await getProducts();
// const categories = await getCategories();

// This is sequential.

// Instead:

const [user, products, categories] = await Promise.all([
    getUser(),
    getProducts(),
    getCategories()
]);

// Flow:

//              ┌── getUser()
//              │
// Start ───────┼── getProducts()
//              │
//              └── getCategories()
//                     ↓
//               All completed
//                     ↓
//                  Results

// This can significantly reduce total waiting time.