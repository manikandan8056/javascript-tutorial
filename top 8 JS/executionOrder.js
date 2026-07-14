// Multiple Promises and setTimeout

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");
//Start-End-Promise-Timeout

// console.log("X");
// setTimeout(() => console.log("Y"), 0);
// (async () => {
//   console.log("Z");
//   await Promise.resolve();
//   console.log("W");
// })();
// console.log("V");
// X - Z - V - W - Y

// console.log("1");
// setTimeout(() => console.log("2"), 0);
// Promise.resolve().then(() => {
//   console.log("3");
//   return Promise.resolve();
// }).then(() => console.log("4"));
// console.log("5");
//1 - 5 - 3 - 4 - 2

// Nested Promises Execution Order in JavaScript
// console.log("Start");
// new Promise((resolve) => {
//   console.log("Inside Promise 1");
//   resolve();
// })
//   .then(() => {
//     console.log("Then 1");
//     return new Promise((resolve) => {
//       console.log("Inside Promise 2");
//       resolve();
//     });
//   })
//   .then(() => console.log("Then 2"));
// console.log("End");
//Start- Inside Promise 1- End- Then 1- Inside Promise 2- Then 2

// console.log("A");
// new Promise((resolve) => {
//   console.log("B");
//   resolve();
// })
//   .then(() => {
//     console.log("C");
//     return new Promise((resolve) => {
//       console.log("D");
//       resolve();
//     });
//   })
//   .then(() => {
//     console.log("E");
//     return Promise.resolve("F");
//   })
//   .then((value) => console.log(value));
// console.log("G");
//A - B - G - C - D- E - F 

// console.log("X");
// new Promise((resolve) => {
//   console.log("Y");
//   setTimeout(() => {
//     console.log("Z");
//     resolve();
//   }, 0);
// })
//   .then(() => console.log("W"));
// console.log("V");
//X -Y -V -Z -W

// console.log("1");
// Promise.resolve()
//   .then(() => {
//     console.log("2");
//     return Promise.resolve().then(() => {
//       console.log("3");
//       return Promise.resolve();
//     });
//   })
//   .then(() => {
//     console.log("4");
//     return new Promise((resolve) => {
//       console.log("5");
//       resolve();
//     });
//   })
//   .then(() => console.log("6"));
// console.log("7");
//1 - 7- 2 - 3 - 4 -5 -6

// Nested Promises with Proper Error Handling

// console.log("Start");
// new Promise((resolve, reject) => {
//   console.log("Inside Promise 1");
//   resolve();
// })
//   .then(() => {
//     console.log("Then 1");
//     return new Promise((resolve, reject) => {
//       console.log("Inside Promise 2");
//       reject("Error in Promise 2"); // Rejecting the second promise
//     });
//   })
//   .then(() => console.log("Then 2")) // This will be skipped due to rejection
//   .catch((error) => console.log("Caught:", error));
// console.log("End");
//Start -Inside Promise 1-End -Then 1-Inside Promise 2-  Caught:Error in Promise 2

// console.log("A");
// new Promise((resolve, reject) => {
//   console.log("B");
//   resolve();
// })
//   .then(() => {
//     console.log("C");
//     return new Promise((resolve, reject) => {
//       console.log("D");
//       reject("Error in Promise 2");
//     });
//   })
//   .then(() => console.log("E")) // Skipped due to rejection
//   .catch((error) => {
//     console.log("Caught Error 1:", error);
//     return Promise.reject("New Error"); // Re-throwing a new error
//   })
//   .catch((error) => console.log("Caught Error 2:", error));
// console.log("F");
//A - B - F - C - D - Caught Error 1:Error in Promise 2 - Caught Error 2:New Error 

// new Promise((resolve) => {
//     resolve();
//   })
//     .then(() => {
//       console.log("Step 1");
//       throw new Error("Something went wrong!");
//     })
//     .then(() => {
//       console.log("Step 2"); // Skipped due to error
//     })
//     .catch((error) => {
//       console.log("Caught:", error.message);
//     });
//  Step 1 - Caught:Something went wrong!

// new Promise((resolve, reject) => {
//     reject("Error occurred!");
//   })
//     .then(() => console.log("This will not run"))
//     .catch((error) => console.log("Caught:", error))
//     .finally(() => console.log("Cleanup task executed"));
//  Caught:Error occurred! - Cleanup task executed




// var globalVar = "I am global"; 
// function showGlobal() {
//   console.log(globalVar); // ✅ Accessible
//   if (true) {
//     let blockLet = "I am block-scoped";
//     const blockConst = "I am also block-scoped";
//     var blockVar = "I ignore block scope!";
//   }
//   return blockVar
// }

// const show = showGlobal();
// console.log(show); // ✅ Accessible globally
