// Nested Object Traversal (JavaScript)
// Nested object traversal is a common JavaScript interview topic. It tests your understanding of:

// 1. Objects
// 2. Recursion
// 3. Loops
// 4. typeof
// 5. Nested data structures

// What is Nested Object Traversal?
// Nested object traversal means visiting every property in an object, 
// including properties inside nested objects.

// Example:
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};

// Traversal visits:-

// name
// age
// address
// city
// state
// Why Use Recursion?

// We don't know how deeply an object is nested.

// Example:
const obj = {
    a: {
        b: {
            c: {
                d: {
                    e: 10
                }
            }
        }
    }
};
// Since the depth is unknown, recursion is the best approach.

// Recursion ?
// A recursive function calls itself whenever it finds another nested object.

// Basic Structure
function traverse(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            traverse(obj[key]);
        } else {
            console.log(key, obj[key]);
        }
    }
}
// Checking Object Types

// Before recursion, ensure the value is actually an object.

if (
    typeof value === "object" &&
    value !== null
) {
    // Recursive call
}

// Why check null?

console.log(typeof null); // object

// Without the null check, recursion would fail.

// Visiting Every Key

// Input
const person = {
    name: "John",
    address: {
        city: "Chennai"
    }
};

// Traversal order

// name
// address
// city

// The outer key (address) is visited before entering the nested object.

// Coding Question 1: Print All Keys
function printKey(obj){
    for(let key in obj){
        console.log(key);
        if(typeof obj[key] === "object" && obj[key] !== null){
            printKey(obj[key]);
        }
    }
}

// Input
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
printKey(person)
// name
// age
// address
// what
// city
// state

// Coding Question 2: Print All Values
function printKey(obj){
    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            printKey(obj[key]);
        }
        else{
            console.log(obj[key])
        }
    }
}

// Input
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
printKey(person)
// John
// 25
// what
// Chennai
// Tamil Nadu

// Coding Question 3: Print Key-Value Pairs
function printKey(obj){
    for(let key in obj){
        if(typeof obj[key] === "object" && obj[key] !== null){
            printKey(obj[key]);
        }
        else{
            console.log(`${key} : ${obj[key]}`)
        }
    }
}

// Input
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
printKey(person)
// name : John
// age : 25
// what
// city : Chennai
// state : Tamil Nadu

// Coding Question 4: Find a Specific Key Recursively
// Suppose we want to find "city".
function findKey(obj, target){
    
    for(let key in obj){
        if(key == target){
            return obj[key]
        }
        if(typeof obj[key] === "object" && obj[key] !== null){
            const result = findKey(obj[key], target);
            if(result !== undefined){
                return result;
            }
            
        } 
    }
}

// Input
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Chennai",
        state: "Tamil Nadu"
    }
};
console.log(findKey(person, "city")); // Chennai


// we want to find "firstName".
function findKey(obj, target){
    for(let key in obj){
        if(key == target){
            return obj[key]
        }
        if(typeof obj[key] === "object" && obj[key] !== null){
            let result = findKey(obj[key], target)
            if(result !== undefined){
                return result;
            } 
        }
    }
}

const company = {
    employee: {
        personal: {
            firstName: "John"
        }
    }
};

console.log(findKey(company, "firstName")); // John

// Time Complexity

// Let n be the total number of properties.

// | Operation             | Complexity |
// | --------------------- | ---------- |
// | Print keys            | O(n)       |
// | Print values          | O(n)       |
// | Print key-value pairs | O(n)       |
// | Find key              | O(n)       |

// Interview Questions
// 1. Why do we use recursion?

// Because the nesting depth is unknown. 
// Recursion allows the same logic to process every nested level until there are no more nested objects.

// 2. Why check typeof value === "object"?

// Only objects can contain more nested properties. Primitive values (string, number, boolean, etc.) 
// are the stopping point for recursion.

// 3. Why check value !== null?

// Because: typeof null returns "object"

// Without the null check, the recursive function would try to iterate over null, causing an error.

// 4. How do you stop recursion?

// The recursion stops when the current value is not an object (or is null).

if (
    typeof value === "object" &&
    value !== null
) {
    traverse(value);
}

// If the condition is false, the function simply processes the value and returns.

// 5. Can this traverse arrays?

// Yes. Arrays are objects in JavaScript.
function traverse(obj) {
    for (let key in obj) {
        console.log(key);

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null
        ) {
            traverse(obj[key]);
        }
    }
}
const obj = {
    numbers: [10, 20]
};
traverse(obj); // numbers 0 1


// If you don't want to recurse into arrays, add:

!Array.isArray(value)
// Common Mistakes
// ❌ Forgetting the null check
if (typeof value === "object") {
    traverse(value);
}

// This fails for null.

// ❌ Forgetting to recurse
for (let key in obj) {
    console.log(key);
}

// This only visits the first level.

// ❌ Returning too early

// Wrong:

for (let key in obj) {
    return obj[key];
}

// This exits after the first property and skips the rest.

// Interview Tip

// A reusable traversal function is:

function traverse(obj) {
    for (const key in obj) {
        console.log(key, obj[key]);

        if (
            obj[key] !== null &&
            typeof obj[key] === "object" &&
            !Array.isArray(obj[key])
        ) {
            traverse(obj[key]);
        }
    }
}
// Key Interview Takeaways:-
// Use recursion when the nesting depth is unknown.
// Always check value !== null before recursing.
// Decide whether arrays should be traversed or treated as values.
// Every key is visited once, so the time complexity is O(n), where n is the total number of properties.