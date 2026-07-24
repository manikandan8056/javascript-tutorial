// What is Deep Copy?

// A deep copy creates a completely new object, including all nested objects and arrays.

// Primitive values are copied.
// Nested objects are also copied.
// Changing the copied object does not affect the original object.

const original = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const copy = structuredClone(original);

copy.address.city = "bangalur"

console.log(original, copy) // { name: 'John', address: { city: 'Chennai' } } { name: 'John', address: { city: 'bangalur' } }

// Why is Deep Copy Required?

// Without a deep copy, two variables may point to the same object in memory.

// Example:

const user1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const user2 = user1;

user2.name = "mani"
console.log(user2); // { name: 'mani', address: { city: 'Chennai' } }


// Both variables reference the same object.
// Deep copy creates a separate object:

// user1 ----> Object A
// user2 ----> Object B

// structuredClone()-> The modern and recommended way to deep copy objects.

// Before structuredClone() existed, developers used this approach.

const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai"
    }
};

const copyPerson = JSON.parse(JSON.stringify(person));

console.log(person); // { name: 'John', age: 25, address: { city: 'Chennai' } }
copyPerson.name = "mani"
console.log(copyPerson); // { name: 'mani', age: 25, address: { city: 'Chennai' } }


// | Feature             | structuredClone() | JSON.parse(JSON.stringify()) |
// | ------------------- | ----------------- | ---------------------------- |
// | Deep Copy           | ✅                 | ✅ (JSON-compatible only)     |
// | Nested Objects      | ✅                 | ✅                            |
// | Arrays              | ✅                 | ✅                            |
// | Date                | ✅ Preserved       | ❌ Converted to string        |
// | Map                 | ✅ Preserved       | ❌ Lost                       |
// | Set                 | ✅ Preserved       | ❌ Lost                       |
// | Function            | ❌ Not cloned      | ❌ Removed                    |
// | Undefined           | ✅ Preserved       | ❌ Removed                    |
// | Circular References | ✅ Supported       | ❌ Error                      |


// Interview Questions

// 1. What is the difference between shallow copy and deep copy?

// | Shallow Copy                                  | Deep Copy                          |
// | --------------------------------------------- | ---------------------------------- |
// | Copies only the first level                   | Copies all nested levels           |
// | Nested objects share the same reference       | Nested objects are cloned          |
// | Changes to nested objects affect the original | Changes do not affect the original |

// 2. When should you use structuredClone()?

// Use it when you need a true deep copy of complex objects that may contain 
// nested objects, arrays, Map, Set, Date, or circular references.

// 3. Why is JSON.parse(JSON.stringify()) not recommended?

// Because it only works correctly for JSON-compatible data. 
// It loses or changes types like Date, Map, Set, undefined, and functions, and it cannot handle circular references.

// 4. Does structuredClone() copy functions?

// No. Functions are not cloneable. Attempting to clone an object containing a function will throw a DataCloneError.

// const obj = {
//     greet() {
//         console.log("Hello");
//     }
// };

// structuredClone(obj); // DataCloneError

