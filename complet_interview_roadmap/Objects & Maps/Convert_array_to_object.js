// Convert Array to Object (JavaScript)

// Converting an array into an object is a common JavaScript interview topic. It demonstrates your understanding of:

// 1. Arrays
// 2. Objects
// 3. Loops
// 4. Dynamic keys
// 5. Object.fromEntries()
// 6. Why Convert an Array to an Object?

// Sometimes data is received as an array but needs to be stored as an object for:

// 1. Faster lookup by key
// 2. Better organization
// 3. API responses
// 4. Configuration objects
// 5. Hash maps

Object.fromEntries()

// Object.fromEntries() converts an array of key-value pairs into an object.

// Syntax
Object.fromEntries(array);

// Each array element must contain exactly two values:

[
    [key1, value1],
    [key2, value2]
]
// Example
const entries = [
    ["name", "John"],
    ["age", 25],
    ["city", "Chennai"]
];

const obj = Object.fromEntries(entries);

console.log(obj); // { name: 'John', age: 25, city: 'Chennai' }

// Manual Conversion Using Loop
// Instead of Object.fromEntries(), you can create the object manually.

const obj = {}
for(let [keys, values] of entries){
    obj[keys] = values
}

console.log(obj); // { name: 'John', age: 25, city: 'Chennai' }

// Array of Objects → Object
// Sometimes the array contains complete objects.

// Example:
const employees = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" },
    { id: 103, name: "Bob" }
];

// You may want:
// {
//     101: { id: 101, name: "John" },
//     102: { id: 102, name: "Alice" },
//     103: { id: 103, name: "Bob" }
// }

// Coding Question 1: Convert Key-Value Pairs into Object
// Input
const data = [
    ["name", "John"],
    ["age", 25],
    ["city", "Chennai"]
];
// Solution 1: Using Object.fromEntries()
console.log(Object.fromEntries(data)) // { name: 'John', age: 25, city: 'Chennai' }

// Solution 2: Using Loop

const obj = {}
for(const [keys, values] of data){
    obj[keys] = values
}
console.log(obj); // { name: 'John', age: 25, city: 'Chennai' }

// Coding Question 2: Convert Employee Array into Object Using ID
// Input
const employees = [
    { id: 101, name: "John", department: "IT" },
    { id: 102, name: "Alice", department: "HR" },
    { id: 103, name: "Bob", department: "Finance" }
];
// Solution
function convertToObject(arr){
    let result = {};
    for(let employee of arr){
        result[employee.id] = employee
    }
    return result;

}
console.log(convertToObject(employees))
// Output
// {
//   '101': { id: 101, name: 'John', department: 'IT' },
//   '102': { id: 102, name: 'Alice', department: 'HR' },
//   '103': { id: 103, name: 'Bob', department: 'Finance' }
// }

// Using reduce()
const employeeToObject = employees.reduce((result, emp) =>{
    result[emp.id] = emp;
    return result
},{});
console.log(employeeToObject)
// Output
// {
//   '101': { id: 101, name: 'John', department: 'IT' },
//   '102': { id: 102, name: 'Alice', department: 'HR' },
//   '103': { id: 103, name: 'Bob', department: 'Finance' }
// }

// Coding Question 3: Convert String Array into Indexed Object

// Input
const fruits = [
    "Apple",
    "Banana",
    "Orange"
];
// Solution 
function convertArray(arr) {
    const result = {};
    for(let i = 0; i < arr.length; i++){
        result[i] = arr[i]
    }
    return result;
}
console.log(convertArray(fruits)); // { '0': 'Apple', '1': 'Banana', '2': 'Orange' }

// Using Object.fromEntries()

// Solution 
const obj = Object.fromEntries(
    fruits.map((fruits, index) => [index, fruits])
)

console.log(obj); // { '0': 'Apple', '1': 'Banana', '2': 'Orange' }

// Comparison
// | Method                 | Best For                     |
// | ---------------------- | ---------------------------- |
// | `Object.fromEntries()` | Array of key-value pairs     |
// | `for...of` loop        | Flexible manual conversion   |
// | `reduce()`             | Functional programming style |
// | `for` loop             | Arrays with index-based keys |

// Time Complexity
// | Method                 | Time | Space |
// | ---------------------- | ---- | ----- |
// | `Object.fromEntries()` | O(n) | O(n)  |
// | `for` loop             | O(n) | O(n)  |
// | `reduce()`             | O(n) | O(n)  |
// Each element is processed once.

// Interview Questions
// 1. What does Object.fromEntries() do?

// It converts an array of [key, value] pairs into an object.

const entries = [
    ["a", 1],
    ["b", 2]
];

console.log(Object.fromEntries(entries));// { a: 1, b: 2 }

// 2. What is the opposite of Object.fromEntries()?

// Object.entries().

const obj = {
    a: 1,
    b: 2
};

console.log(Object.entries(obj)); // [ ["a", 1], ["b", 2] ]

// 3. How do you convert an array into an object keyed by a property?

const result = {};

for (const item of array) {
    result[item.id] = item;
}

// 4. Can duplicate keys exist?
// Yes, but the last value overwrites the previous one.

const entries = [
    ["name", "John"],
    ["name", "Alice"]
];

console.log(Object.fromEntries(entries));// { name: "Alice" }

// 5. When should you use an object instead of an array?
// Use an object when you need fast lookup by key.

employees[101]

// is generally more efficient than searching an array:

employees.find(emp => emp.id === 101);

// Common Mistakes
// ❌ Passing an array that is not key-value pairs to Object.fromEntries()
Wrong:
const arr = [1, 2, 3];
Object.fromEntries(arr);

// Output
TypeError

Correct:
Object.fromEntries([
    ["a", 1],
    ["b", 2]
]);

// ❌ Forgetting dynamic keys
// Wrong:
result.id = employee;

// Creates a property literally named "id".
// Correct:
result[employee.id] = employee;

// ❌ Using for...in on arrays
// Avoid:
for (const index in fruits) {
    console.log(index);
}

Prefer:
for (const fruit of fruits) {
    console.log(fruit);
}

or
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
// Interview Tip
// Remember these conversions:

// | Conversion             | Method                 |
// | ---------------------- | ---------------------- |
// | Object → Keys Array    | `Object.keys()`        |
// | Object → Values Array  | `Object.values()`      |
// | Object → Entries Array | `Object.entries()`     |
// | Entries Array → Object | `Object.fromEntries()` |

// A reusable interview solution for converting an array of objects into an object keyed by a property is:

function arrayToObject(arr, key) {
    const result = {};

    for (const item of arr) {
        result[item[key]] = item;
    }

    return result;
}

// Example:
const employees = [
    { id: 101, name: "John" },
    { id: 102, name: "Alice" }
];

console.log(arrayToObject(employees, "id")); // { '101': { id: 101, name: 'John' }, '102': { id: 102, name: 'Alice' } }

// This generic solution works for any property (id, email, username, etc.), runs in O(n) time, 
// and is a favorite pattern in JavaScript interviews.