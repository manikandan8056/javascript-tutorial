// call() Polyfill

// Now we move from array polyfills to function polyfills.

// This is very common in interviews.

// Native call()
const person = {
    name: "Mani"
};

function greet(city) {
    console.log(
        `Hello ${this.name} from ${city}`
    );
}

greet.call(person, "Chennai");

// Output:

// Hello Mani from Chennai

// call() allows us to manually specify what this should refer to.

// Simple polyfill
Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;

    const uniqueKey = Symbol();

    context[uniqueKey] = this;

    const result = context[uniqueKey](...args);

    delete context[uniqueKey];

    return result;
};
// Usage
const person = {
    name: "Mani"
};

function greet(city, country) {
    return `${this.name} - ${city} - ${country}`;
}

console.log(
    greet.myCall(person, "Chennai", "India")
);

// Output:

// Mani - Chennai - India
// Important interview concept

// Inside:

// Function.prototype.myCall = function (...) {

// this refers to the function being called.

// So:

greet.myCall(person)

// means inside myCall:

// this === greet