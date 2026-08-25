// apply() is almost the same as call().

// Difference

// call():

fn.call(obj, arg1, arg2, arg3);

// apply():

fn.apply(obj, [arg1, arg2, arg3]);
// Polyfill
Function.prototype.myApply = function (context, args) {
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
    greet.myApply(person, ["Chennai", "India"])
);

// Output:
// Mani - Chennai - India

// Remember
// call  → arguments separately
// apply → arguments as array