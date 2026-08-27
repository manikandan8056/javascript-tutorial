
// Promise chaining means executing multiple asynchronous operations one after another.

Promise.resolve(10)
    .then(num => {
        console.log(num);
        return num * 2;
    })
    .then(num => {
        console.log(num);
        return num + 5;
    })
    .then(result => {
        console.log(result);
    });

// Output:-
// 10
// 20
// 25

// Important interview point
// The value returned from one .then() becomes the input to the next .then().

// .then(() => {
//     return someValue;
// })
// .then(value => {
//     // someValue comes here
// });