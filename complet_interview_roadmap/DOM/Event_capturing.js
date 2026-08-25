// Event capturing works in the opposite direction.

// Document
//   ↓
// Body
//   ↓
// Parent
//   ↓
// Child

// Enable capturing by passing true or { capture: true }.

parent.addEventListener(
    "click",
    () => {
        console.log("Parent");
    },
    true
);

child.addEventListener(
    "click",
    () => {
        console.log("Child");
    },
    true
);

// Output:

// Parent
// Child
// Complete event flow

// When clicking an element:

// 1. Capturing Phase
// Document → Parent → Child

// 2. Target Phase
// Child

// 3. Bubbling Phase
// Child → Parent → Document