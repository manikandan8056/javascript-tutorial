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

