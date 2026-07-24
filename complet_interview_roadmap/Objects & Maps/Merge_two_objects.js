// What is Object Merging?

// Object merging means combining the properties of two or more objects into a single object.

// Merge Using Spread Operator (...)

// The spread operator copies the properties from one or more objects into a new object.

// Syntax
const merged = { ...obj1, ...obj2 };

// Example
const obj1 = {
    name: "John",
    age: 25
};

const obj2 = {
    city: "Chennai",
    country: "India"
};

const merged = {
    ...obj1,
    ...obj2
};

console.log(merged); // { name: 'John', age: 25, city: 'Chennai', country: 'India' }

// Merge Using Object.assign()

// Object.assign() copies properties from source objects into a target object.

// Syntax
const merged = Object.assign({}, obj1, obj2);

// The empty object {} ensures the original objects are not modified.

// Example
const obj1 = {
    name: "John"
};

const obj2 = {
    age: 25
};

const merged = Object.assign({}, obj1, obj2);

console.log(merged); // { name: 'John', age: 25 }

// Duplicate Key Behavior
// If two objects have the same key, the value from the later object overwrites the earlier one.

// Example (Spread Operator)
const obj1 = {
    name: "John",
    age: 25
};

const obj2 = {
    age: 30,
    city: "Chennai"
};

const merged = {
    ...obj1,
    ...obj2
};

console.log(merged); // { name: 'John', age: 30, city: 'Chennai' }

// age becomes 30 because obj2 is spread after obj1.

// Example (Object.assign())
const obj1 = {
    name: "John",
    age: 25
};

const obj2 = {
    age: 30
};

const merged = Object.assign({}, obj1, obj2);

console.log(merged); // { name: 'John', age: 30 }

// Order Matters
const obj1 = {
    age: 25
};

const obj2 = {
    age: 30
};

console.log({
    ...obj1,
    ...obj2
});// { age: 30 }


// If the order is reversed:

console.log({
    ...obj2,
    ...obj1
}); // { age: 25 }
// Rule: Last value wins.


// | Feature                   | Spread (`...`)  | `Object.assign()`     |
// | ------------------------- | --------------- | --------------------- |
// | Creates new object        | ✅               | ✅ (if target is `{}`) |
// | Easy to read              | ✅               | Slightly verbose      |
// | Supports multiple objects | ✅               | ✅                     |
// | Duplicate keys            | Last value wins | Last value wins       |
// | Deep merge                | ❌ No            | ❌ No                  |


// Coding Questions
// 1. Merge Two Objects
const person = {
    name: "John",
    age: 25
};

const address = {
    city: "Chennai",
    country: "India"
};

const result = {
    ...person,
    ...address
};

console.log(result); // { name: 'John', age: 25, city: 'Chennai', country: 'India' }

// 2. Merge Multiple Objects
const obj1 = {
    name: "John"
};

const obj2 = {
    age: 25
};

const obj3 = {
    city: "Chennai"
};

const obj4 = {
    country: "India"
};

// Using spread operation {...obj1}
const merged = {
    ...obj1,
    ...obj2,
    ...obj3,
    ...obj4
};
console.log(merged); // { name: 'John', age: 25, city: 'Chennai', country: 'India' }


// Using Object.assign():
const merged = Object.assign({}, obj1, obj2, obj3, obj4);
console.log(merged); // { name: 'John', age: 25, city: 'Chennai', country: 'India' }

// 3. Merge Nested Objects (Basic)
// Suppose you want to merge two nested address objects.

const obj1 = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

const obj2 = {
    address: {
        pincode: 600001
    }
};

const merged = {
    ...obj1,
    address: {
        ...obj1.address,
        ...obj2.address
    }
};

console.log(merged); // { name: 'John', address: { city: 'Chennai', pincode: 600001 } }


// Incorrect Way (Common Mistake)
const merged = {
    ...obj1,
    ...obj2
};

console.log(merged); // { name: 'John', address: { pincode: 600001 } }

// The original address.city is lost because the entire address object is replaced.

// Interview Questions
// 1. What happens if two objects have the same key while merging?

// The value from the last object overwrites the earlier value.

// 2. Does object merging modify the original objects?

// Using the spread operator:

const merged = {
    ...obj1,
    ...obj2
};

// No. A new object is created.

// Using Object.assign():

// Object.assign(obj1, obj2);

// Yes. obj1 is modified because it is used as the target.

// To avoid this:

Object.assign({}, obj1, obj2);
// 3. Is object merging a deep merge?

// No.

// Both the spread operator and Object.assign() perform a shallow merge.

const obj1 = {
    address: {
        city: "Chennai"
    }
};

const obj2 = {
    address: {
        pincode: 600001
    }
};

const merged = {
    ...obj1,
    ...obj2
};

console.log(merged); // { address: { pincode: 600001 } }

// The nested object is replaced, not merged.

// 4. How can you merge nested objects?

// Merge the nested object separately:

const merged = {
    ...obj1,
    address: {
        ...obj1.address,
        ...obj2.address
    }
};

// 5. Can you merge more than two objects?

// Yes.

const merged = {
    ...obj1,
    ...obj2,
    ...obj3,
    ...obj4
};

// or

const merged = Object.assign({}, obj1, obj2, obj3, obj4);
// Interview Tip

// Remember these three rules:

// Spread (...) and Object.assign() perform shallow merges.
// If duplicate keys exist, the last object's value wins.
// Nested objects are replaced unless you merge them explicitly.