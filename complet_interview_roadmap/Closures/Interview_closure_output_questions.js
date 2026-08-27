// Question 1
function outer() {
    let x = 10;

    return function () {
        console.log(x);
    };
}

const fn = outer();

fn();

// Output:

// 10

// Because the inner function remembers x.

// Question 2
function outer() {
    let x = 10;

    return function () {
        x++;
        console.log(x);
    };
}

const fn = outer();

fn();
fn();
fn();

// Output:
// 11
// 12
// 13

// The same closure maintains the same x.

// Question 3
function create() {
    let count = 0;

    return () => ++count;
}

const a = create();
const b = create();

console.log(a());
console.log(a());
console.log(b());
console.log(b());

// Output:
// 1
// 2
// 1
// 2

// Why?

// a and b have different closure environments.

// a → count = 0

// b → count = 0

// They don't share the same count.