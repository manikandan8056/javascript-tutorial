// Convert Object to Array (JavaScript)

// Converting an object to an array is a very common JavaScript interview topic. 
// JavaScript provides three built-in methods for this:
// Object.keys()
// Object.values()
// Object.entries()
// Why Convert an Object to an Array?


// Objects are not directly iterable using array methods like map(), filter(), or reduce().

// Converting an object into an array allows you to:
// Iterate easily
// Filter data
// Sort data
// Transform data

// Sample Object
// We'll use this object throughout the examples.

const employee = {
    id: 101,
    name: "John",
    department: "IT",
    salary: 50000
};

// Object.keys()

// Returns an array containing all property names (keys).

// Syntax
console.log(Object.keys(employee)) // [ 'id', 'name', 'department', 'salary' ]

// Object.values()

// Returns an array containing all property values.

// Syntax
Object.values(object);

const values = Object.values(employee);

console.log(values);  // [ 101, 'John', 'IT', 50000 ]

// Object.entries()

// Returns an array of key-value pairs.

// Each element is itself an array.

// Syntax
Object.entries(object);

console.log(Object.entries(employee)) // [ [ 'id', 101 ], [ 'name', 'John' ], [ 'department', 'IT' ], [ 'salary', 50000 ] ]


// | Method             | Returns                       |
// | ------------------ | ----------------------------- |
// | `Object.keys()`    | Array of keys                 |
// | `Object.values()`  | Array of values               |
// | `Object.entries()` | Array of `[key, value]` pairs |

// Coding Question 1: Convert Keys to Array

// Input
const student = {
    id: 1,
    name: "Rahul",
    grade: "A"
};
const keys=Object.keys(student)
console.log(keys) // [ 'id', 'name', 'grade' ]

// Coding Question 2: Convert Values to Array
// Solution
const values = Object.values(student);

console.log(values); // [ 1, 'Rahul', 'A' ]

// Coding Question 3: Convert Entries to Array
// Solution
const entries = Object.entries(student)

console.log(entries); // [ [ 'id', 1 ], [ 'name', 'Rahul' ], [ 'grade', 'A' ] ]

// Coding Question 4: Loop Using Object.entries()

// Object.entries() works well with for...of.

const employee = {
    id: 101,
    name: "John",
    department: "IT"
};

for(const [keys, values] of Object.entries(employee)){
    console.log(keys, values)
}
// Output:-

// id 101
// name John
// department IT

// Using map() with Object.entries()
// You can transform objects using array methods.

// Example
const employee = {
    id: 101,
    name: "John",
    department: "IT"
};

const result = Object.entries(employee).map(([keys, values]) =>{
    return `${keys} : ${values}`
})
console.log(result); // [ 'id : 101', 'name : John', 'department : IT' ]

// Convert Back to Object
// You can convert entries back into an object using Object.fromEntries().

const entries = [
    ["id", 101],
    ["name", "John"],
    ["department", "IT"]
];

console.log(Object.fromEntries(entries)) // { id: 101, name: 'John', department: 'IT' }

// Time Complexity
// Let n be the number of object properties.

// | Method             | Time Complexity |
// | ------------------ | --------------- |
// | `Object.keys()`    | O(n)            |
// | `Object.values()`  | O(n)            |
// | `Object.entries()` | O(n)            |

// Interview Questions

// 1. What is the difference between Object.keys(), Object.values(), and Object.entries()?

// | Method                | Output                         |
// | --------------------- | ------------------------------ |
// | `Object.keys(obj)`    | `["id", "name"]`               |
// | `Object.values(obj)`  | `[101, "John"]`                |
// | `Object.entries(obj)` | `[["id",101],["name","John"]]` |

// 2. Which method is best for looping over both keys and values?
// Use Object.entries().

for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}
// 3. Can Object.keys() be used with map()?

// Yes.

const employee = {
    id: 101,
    name: "John"
};

const upperKeys = Object.keys(employee).map(key => key.toUpperCase());

console.log(upperKeys); // [ "ID", "NAME" ]

// 4. Can Object.values() be used to calculate a sum?
// Yes, if the values are numeric.

const marks = {
    math: 80,
    science: 90,
    english: 85
};

const total = Object.values(marks).reduce((sum, mark) => sum + mark, 0);

console.log(total); // 255

// 5. What is the opposite of Object.entries()?
// Object.fromEntries() converts an array of key-value pairs back into an object.

const entries = [
    ["a", 1],
    ["b", 2]
];

console.log(Object.fromEntries(entries)); // { a: 1, b: 2 }

// Common Mistakes
// ❌ Trying to use map() directly on an object

// Wrong:
const obj = { a: 1, b: 2 };

obj.map(item => item); // TypeError: obj.map is not a function

// Correct:
Object.entries(obj).map(([key, value]) => `${key}: ${value}`);
// ❌ Confusing Object.keys() with Object.values()

Object.keys(obj);   // Returns keys
Object.values(obj); // Returns values

// ❌ Forgetting array destructuring with Object.entries()
// Wrong:
for (const item of Object.entries(obj)) {
    console.log(item); // ["id", 101] ["name", "John"]
}


// Better:
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// Interview Tip
// Remember this simple rule:
// | Method             | Easy Memory Trick                 |
// | ------------------ | --------------------------------- |
// | `Object.keys()`    | **K** → Keys                      |
// | `Object.values()`  | **V** → Values                    |
// | `Object.entries()` | **E** → Entries (Key-Value pairs) |


// The most interview-friendly way to iterate over an object's keys and values is:

for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
}

// This approach is clean, readable, and works well with array methods like map(), filter(), and reduce().
