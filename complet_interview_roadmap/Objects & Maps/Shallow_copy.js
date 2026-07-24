// What is Shallow Copy?
// ************************
// A shallow copy creates a new object, but only copies the first level of properties.

// Primitive values (number, string, boolean, etc.) are copied by value.
// Nested objects and arrays are copied by reference, not duplicated.

// As a result:

// Changing top-level properties does not affect the original.
// Changing nested objects does affect the original.

const original = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const copyOriginal = {...original};

copyOriginal.address.city = "Ambattur"
copyOriginal.name = "David";
console.log(original); // { name: 'John', address: { city: 'Ambattur' } }
console.log(copyOriginal); // { name: 'David', address: { city: 'Ambattur' } }

// Since name is a primitive value, the original is not affected
// Notice that both objects share the same address object.
// The spread operator creates a shallow copy of an object.

// Object.assign()

// Object.assign() also creates a shallow copy.

// Syntax
const copy = Object.assign({}, original);

// Example
const employee = {
    id: 101,
    name: "Manikandan"
};

const copiedEmployee = Object.assign({}, employee);

copiedEmployee.name = "Rahul";

console.log(employee);
console.log(copiedEmployee);


// Why Nested Objects Are Shared ?

// Both the spread operator and Object.assign() copy references to nested objects instead of creating new nested objects.

const original = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const copy = { ...original };

copy.address.city = "Bangalore";

console.log(original.address.city);  // Bangalore
console.log(copy.address.city);  // Bangalore
// Both objects reference the same nested object.
// Only the outer object is copied; the nested object is shared.

// original.address
//         │
//         ▼
//    {
//       city: "Bangalore"
//    }
//         ▲
//         │
// copy.address

// Spread vs Object.assign()
// | Feature               | Spread (`...`)    | Object.assign()    |
// | --------------------- | ----------------  | ----------------   |
// | Creates new object    | ✅                | ✅                |
// | Shallow copy          | ✅                | ✅                |
// | Copies nested objects | ❌ Reference only | ❌ Reference only |
// | Easy syntax           | ✅                | Slightly verbose   |
// | Commonly used         | ✅                | ✅                |

// | Shallow Copy                    | Deep Copy                 |
// | ------------------------------- | ------------------------- |
// | Copies only first level         | Copies every nested level |
// | Nested objects share references | Nested objects are cloned |
// | Faster                          | Slightly slower           |
// | `{ ...obj }`, `Object.assign()` | `structuredClone()`       |


// Coding Questions
// 1. Copy Using Spread Operator
const student = {
    id: 1,
    name: "Rahul"
};

const copy = { ...student };

console.log(copy); // { id: 1, name: 'Rahul' }

// 2. Copy Using Object.assign()

const student = {
    id: 1,
    name: "Rahul"
};
const copy = Object.assign({}, student)

console.log(copy); // { id: 1, name: 'Rahul' }

// 3. Demonstrate Shallow Copy Issue

const employee = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const copy = { ...employee };

copy.address.city = "Delhi";

console.log("Original:", employee); // Original: { name: 'John', address: { city: 'Delhi' } }
console.log("Copy:", copy); // Copy: { name: 'John', address: { city: 'Delhi' } }

//Even though we changed only the copied object, the original also changed because the nested object is shared.

// Fixing the Shallow Copy Issue

// Use structuredClone() for a deep copy.

const employee = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const copy = structuredClone(employee);

copy.address.city = "Delhi";

console.log(employee.address.city); // Chennai
console.log(copy.address.city); //  Delhi
// Now the nested object is cloned, so the original remains unchanged.

// Interview Questions
// 1. What is a shallow copy?

// A shallow copy creates a new object but copies only the first level of properties. 
// Nested objects and arrays are copied by reference.

// 2. Which methods create a shallow copy?
// Spread operator ({ ...obj })
// Object.assign({}, obj)
// Array spread ([...arr])
// Array.slice()
// Array.concat()
// 3. Why does changing a nested object affect the original?

// Because both the original and the copied object reference the same nested object in memory.

// 4. Is the spread operator a deep copy?

// No. The spread operator performs only a shallow copy.

const obj1 = {
    a: {
        b: 1
    }
};

const obj2 = { ...obj1 };

console.log(obj1.a === obj2.a); // true

// Both variables point to the same nested object.

// 5. When should you use a shallow copy?

// Use a shallow copy when:

// Your object contains only primitive values.
// You only need to modify top-level properties.
// You don't need independent copies of nested objects.
// Interview Tip

// A common interview question is:

const obj1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // Mumbai

// Reason: The spread operator copies the outer object, but the nested address object is still shared by reference.

// Easy way to remember:

// Shallow Copy → Copies the box, shares the contents (nested objects).
// Deep Copy → Copies the box and everything inside it.

