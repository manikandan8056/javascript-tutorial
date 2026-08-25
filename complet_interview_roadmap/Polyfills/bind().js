// This is another very important interview question.
// Native bind()

const person = {
    name: "Mani"
};

function greet(city) {
    console.log(this.name, city);
}

const newFunction = greet.bind(person);

newFunction("Chennai");

// bind() does not execute the function immediately.

// Instead, it returns a new function.

// Polyfill
Function.prototype.myBind = function (context, ...args) {
    const originalFunction = this;

    return function (...newArgs) {
        return originalFunction.apply(
            context,
            args.concat(newArgs)
        );
    };
};
// Usage
const person = {
    name: "Mani"
};

function greet(city, country) {
    return `${this.name} - ${city} - ${country}`;
}

const newFunction = greet.myBind(
    person,
    "Chennai"
);

console.log(
    newFunction("India")
);

// Output:

// Mani - Chennai - India