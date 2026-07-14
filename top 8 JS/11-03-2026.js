//closure
//An inner function remembers and can access variables from its outer function even after the outer function has finished executing.
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
counter();
counter();

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise");
// });

// console.log("End");


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data received");
//   }, 1000);
// });

// promise.then(data => console.log(data));

// async function getData() {
//   const result = await Promise.resolve("Hello");
//   console.log(result);
// }

// getData();

// Pass arguments individually.

// function greet(city) {
//   console.log(this.name + " from " + city);
// }
// const person = { name: "Mani" };

// //call()
// // greet.call(person, "Chennai");

// // apply()
// // greet.apply(person, ["Chennai"]);

// // bind()
// const greetPerson = greet.bind(person, "Chennai");
// greetPerson();

// const search = debounce(() => {
//   console.log("Searching API...");
// }, 500);

// search();
// search();
// search();


// import { useCallback } from "react";

// function App() {

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []);

//   return <button onClick={handleClick}>Click</button>;
// }