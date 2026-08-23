// A very common closure interview question.

function counter() {
    let count = 0;
    return function (){
        count++
        return count
    }
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3

// Why?
// ********
// count is inside counter(), but the returned function still remembers it.

// counter()
//    |
//    |-- count = 0
//    |
//    └── returned function
//            |
//            └── remembers count
// Interview answer

// A closure allows the returned function to retain access to the count variable even after counter() has finished execution.