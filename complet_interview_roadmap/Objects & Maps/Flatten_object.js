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
// 6. Coding Question 1: Flatten Nested Object

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
console.log(flattenObject(student));