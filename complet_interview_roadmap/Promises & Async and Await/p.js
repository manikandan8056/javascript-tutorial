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