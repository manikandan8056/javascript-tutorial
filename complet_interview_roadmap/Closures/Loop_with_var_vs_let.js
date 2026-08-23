// This is one of the most important closure interview questions.

// Using var
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output:

// 3
// 3
// 3

// Why?

// var is function-scoped.

// There is effectively one shared i.

// By the time the callbacks execute, the loop has finished:

// i = 3

// So all callbacks print 3.

// Using let
for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Output:

// 0
// 1
// 2

// Why?

// let creates a new binding for each iteration.

// Conceptually:

// Iteration 1 → i = 0 → callback remembers 0
// Iteration 2 → i = 1 → callback remembers 1
// Iteration 3 → i = 2 → callback remembers 2
// Fixing var using closure

// You can also solve the var problem using an IIFE:

for (var i = 0; i < 3; i++) {

    (function (x) {

        setTimeout(() => {
            console.log(x);
        }, 1000);

    })(i);
}

// Output:

// 0
// 1
// 2

// Each IIFE creates a separate scope/closure.