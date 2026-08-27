// What is Object Flattening?

// Object flattening converts a nested object into a single-level object, 
// where nested properties are represented using dot notation.

// Example

// Input

// const user = {
//     name: "John",
//     address: {
//         city: "Chennai",
//         state: "Tamil Nadu"
//     }
// };

// Output

// {
//     "name": "John",
//     "address.city": "Chennai",
//     "address.state": "Tamil Nadu"
// }

// Why Flatten Objects?

// Flattening is useful for:
// 1 .Sending data to APIs
// 2. Configuration files
// 3. Search indexing
// 4. Logging
// 5. Database storage
// 6. Form handling
// 7. Dot Notation Keys

// Nested keys are joined using a dot (.).

// Example

// const obj = {
//     person: {
//         name: {
//             first: "John"
//         }
//     }
// };

// Flattened

// {
//     "person.name.first": "John"
// }

// Each nested level is appended with a dot.

// Recursive Approach

// The most common interview solution uses recursion.

// # Algorithm
// 1. Create an empty result object.
// 2. Loop through each property.
// 3. If the value is an object, recursively flatten it.
// 4. Otherwise, store the value using the accumulated key.
// 5. Return the result.

// Coding Question 1: Flatten Nested Object

// Solution

function flattenObject(obj, parentKey = "", result = {}) {
    for(let key in obj){
        console.log("keyyyy:",key)
        let newKey = parentKey? `${parentKey}.${key}` : key;
        console.log("new_iteration:",newKey)
        if( typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])){
            flattenObject(obj[key], newKey, result)
        }
        else{
            console.log("currentObjVal", obj[key]);
            result[newKey] = obj[key]
            console.log(result)
        }
    }
    return result;
}
// Input
const user = {
    name: "John",
    address: {
        city: "Chennai",
        place:
        { District: "Ambattur"},
        state: "Tamil Nadu"
    }
};

console.log(flattenObject(user)); // { name: 'John', 'address.city': 'Chennai', 'address.place.District': 'Ambattur', 'address.state': 'Tamil Nadu' }

// Coding Question 2: Flatten Object with Arrays

// Solution
function flattenObject(obj, parentKey = "", result = {}) {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;

        if (
            typeof obj[key] === "object" &&
            obj[key] !== null &&
            !Array.isArray(obj[key])
        ) {
            flattenObject(obj[key], newKey, result);
        } else {
            result[newKey] = obj[key];
        }
    }

    return result;
}
// Input
const student = {
    name: "Rahul",
    marks: [80, 90, 95],
    address: {
        city: "Delhi"
    }
};
console.log(flattenObject(student)); // { name: 'Rahul', marks: [ 80, 90, 95 ], 'address.city': 'Delhi' }
// In this version, arrays are treated as values and are not flattened.

// Flatten Arrays Too

// If the interviewer wants arrays flattened with indexes:

function flattenObject(obj, parentKey="", result ={}){
    for(let key in obj){
        let newKey = parentKey? `${parentKey}.${key}` : key;
        if(typeof obj[key] === "object" && obj[key] !== null){
            flattenObject(obj[key], newKey, result)
        }
        else{
            result[newKey] = obj[key]
        }
    }
    return result;
}
// Input
const student = {
    name: "Rahul",
    marks: [80, 90]
};

console.log(flattenObject(student)); // { name: 'Rahul', 'marks.0': 80, 'marks.1': 90 }
// Arrays are objects in JavaScript, so recursion also works on them.

// Coding Question 3: Flatten Multiple Nested Levels

// Solution 
function flattenObject(obj, parentKey="", result={}){
    for(let key in obj){
        let newKey = parentKey? `${parentKey}.${key}` : key;
        if(typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])){
            flattenObject(obj[key], newKey, result)
        }
        else{
            result[newKey] = obj[key]
        }
    }
    return result;
    
}

// Input
const company = {
    name: "ABC",
    employee: {
        personal: {
            firstName: "John",
            lastName: "Doe"
        },
        address: {
            city: "Chennai",
            state: "Tamil Nadu"
        }
    }
};

console.log(flattenObject(company)); 
// Output 
// {
//   name: 'ABC',
//   'employee.personal.firstName': 'John',
//   'employee.personal.lastName': 'Doe',
//   'employee.address.city': 'Chennai',
//   'employee.address.state': 'Tamil Nadu'
// }


// Time Complexity

// Let n be the total number of properties.

// 1. Time: O(n) (each property is visited once)
// 2. Space: O(n) (result object + recursion stack)

// Interview Questions
// 1. Why is recursion used for object flattening?

// Because the depth of nested objects is unknown. Recursion naturally processes each nested level until no more nested objects remain.

// 2. Can a loop alone flatten an object?

// A single loop only processes one level. To handle arbitrary nesting, you typically need recursion (or an explicit stack).

// 3. How do you avoid flattening arrays?

// Check whether the value is an array before recursing:

if (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
) {
    // recurse
}
// 4. Why do we check obj[key] !== null?

// Because:

// typeof null

// returns

// "object"

// Without the null check, recursion would try to process null and throw an error.

// 5. What happens if the object contains arrays?

// There are two common approaches:

// Keep arrays intact (treat them as values):
// {
//     marks: [80, 90]
// }
// Flatten arrays using indexes:
// {
//     "marks.0": 80,
//     "marks.1": 90
// }

// The expected behavior depends on the interviewer's requirements.

// Common Mistakes
// ❌ Forgetting the null check
typeof null === "object"

// Always check:

value !== null
// ❌ Using only one loop
for (let key in obj) {
    // Only handles one level
}

// This won't flatten deeply nested objects.

// ❌ Incorrect key construction

// Wrong:

parentKey + key

// Produces:

// addresscity

// Correct:

`${parentKey}.${key}`

// Produces:

// address.city
// Interview Tip

// Remember these three rules:

// Use recursion to handle unknown nesting depth.
// Build keys using dot notation (parent.child.grandchild).
// Check for null and arrays before recursing.

// A good reusable solution is:

function flattenObject(obj, parent = "", result = {}) {
    for (const key in obj) {
        const newKey = parent ? `${parent}.${key}` : key;
        const value = obj[key];

        if (
            value !== null &&
            typeof value === "object" &&
            !Array.isArray(value)
        ) {
            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }

    return result;
}

// This version is concise, handles nested objects of any depth, and is a strong interview-ready solution.