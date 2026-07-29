// Group Array by Object Key (JavaScript)

// Grouping an array by an object key is a common JavaScript interview question. It tests your understanding of:

// 1. Arrays
// 2. Objects
// 3. Hash maps
// 4. Dynamic object keys
// 5. Loops
// 6. What is Grouping Data?

// Grouping data means collecting objects that have the same property value into the same group.

// Example

// Input
// const employees = [
//     { name: "John", department: "IT" },
//     { name: "Alice", department: "HR" },
//     { name: "Bob", department: "IT" }
// ];

// Output
// {
//     IT: [
//         { name: "John", department: "IT" },
//         { name: "Bob", department: "IT" }
//     ],
//     HR: [
//         { name: "Alice", department: "HR" }
//     ]
// }

// Hash Map Approach

// The most common solution is to use an object as a hash map.

// Algorithm:

// 1. Create an empty object.
// 2. Loop through the array.
// 3. Read the grouping key.
// 4. If the key doesn't exist, create an empty array.
// 5. Push the current object into that array.
// 6. Dynamic Keys

// Instead of hardcoding property names, use bracket notation.

const key = employee.department;
result[key] = [];

// This creates keys dynamically.
const department = "IT";
const obj = {};
obj[department] = [];
console.log(obj); // { IT: [] }

// Generic Group Function
// A reusable function that can group by any property.

function groupBy(arr, key){
    const result = {};
    for(let item of arr){
        const groupKey = item[key] || "Unknown";
        if(!result[groupKey]){
            result[groupKey] = [];
        }
        result[groupKey].push(item)
    }
    return result;
}
const employees = [
    { name: "John", department: "IT" },
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "IT" },
    { name: "David", department: "Finance" }
];

console.log(groupBy(employees, "department"));

// { 
//   IT: [ { name: 'John', department: 'IT' }, { name: 'Bob', department: 'IT' } ],
//   HR: [ { name: 'Alice', department: 'HR' } ],
//   Finance: [ { name: 'David', department: 'Finance' } ]
// }

// Coding Question 1: Group Employees by Department

// Solution
function groupByDepartment(employees) {
    const result = {};

    for (const employee of employees) {
        const dept = employee.department || "Unknown";

        if (!result[dept]) {
            result[dept] = [];
        }

        result[dept].push(employee);
    }

    return result;
}
// Input
const employees = [
    { id: 1, name: "John", department: "IT" },
    { id: 2, name: "Alice", department: "HR" },
    { id: 3, name: "Bob", department: "IT" },
    { id: 4, name: "David", department: "Finance" },
    { id: 5, name: "Emma", department: "HR" }
];
console.log(groupByDepartment(employees));
// Output
// {
//     IT: [
//         { id: 1, name: "John", department: "IT" },
//         { id: 3, name: "Bob", department: "IT" }
//     ],
//     HR: [
//         { id: 2, name: "Alice", department: "HR" },
//         { id: 5, name: "Emma", department: "HR" }
//     ],
//     Finance: [
//         { id: 4, name: "David", department: "Finance" }
//     ]
// }

// Coding Question 2: Group Students by Grade

// Solution
function groupByGrade(students) {
    const result = {};

    for (const student of students) {
        const grade = student.grade || "Unknown";

        if (!result[grade]) {
            result[grade] = [];
        }

        result[grade].push(student);
    }

    return result;
}
// Input
const students = [
    { name: "Rahul", grade: "A" },
    { name: "Priya", grade: "B" },
    { name: "Karan", grade: "A" },
    { name: "Neha", grade: "C" },
    { name: "Riya", grade: "B" }
];
console.log(groupByGrade(students));
// Output
// {
//     A: [
//         { name: "Rahul", grade: "A" },
//         { name: "Karan", grade: "A" }
//     ],
//     B: [
//         { name: "Priya", grade: "B" },
//         { name: "Riya", grade: "B" }
//     ],
//     C: [
//         { name: "Neha", grade: "C" }
//     ]
// }

// Coding Question 3: Group Products by Category

// Solution
function groupByCategory(products) {
    const result = {};

    for (const product of products) {
        const category = product.category || "Unknown";

        if (!result[category]) {
            result[category] = [];
        }

        result[category].push(product);
    }

    return result;
}
// Input
const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Phone", category: "Electronics" },
    { id: 3, name: "Rice", category: "Groceries" },
    { id: 4, name: "Shirt", category: "Clothing" },
    { id: 5, name: "Jeans", category: "Clothing" }
];
console.log(groupByCategory(products));
// Output
// {
//     Electronics: [
//         { id: 1, name: "Laptop", category: "Electronics" },
//         { id: 2, name: "Phone", category: "Electronics" }
//     ],
//     Groceries: [
//         { id: 3, name: "Rice", category: "Groceries" }
//     ],
//     Clothing: [
//         { id: 4, name: "Shirt", category: "Clothing" },
//         { id: 5, name: "Jeans", category: "Clothing" }
//     ]
// }


// Using reduce() (Modern Approach)
// Many interviewers also expect a reduce() solution.

// Input
const employees = [
    { name: "John", department: "IT" },
    { name: "Alice", department: "HR" },
    { name: "Bob", department: "IT" },
    { name: "David", department: "Finance" }
];
// Soution
const grouped = employees.reduce((result, emp) => {
    const dep = emp.department || "Unknown"
    if(!result[dep]){
        result[dep] = []
    }
    result[dep].push(emp)
    return result
},{})

console.log(grouped);

// Time Complexity
// Let n be the number of elements.

// Time: O(n) (single pass through the array)
// Space: O(n) (stores all grouped elements)

// Interview Questions: -

// 1. Why use a hash map (object) for grouping?
// An object provides constant-time (O(1)) average lookup, making it efficient to check whether a group already exists.

// 2. Why use bracket notation instead of dot notation?
// Because the key is determined at runtime.

const key = "IT";

result[key] = [];

// Using dot notation:

result.key = [];

// creates a property literally named "key", not "IT".

// 3. Can we group by any property?

// Yes. A generic function can group by any existing key.

function groupBy(arr, key) {
    const result = {};

    for (const item of arr) {
        const value = item[key];

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(item);
    }

    return result;
}

console.log(groupBy(employees, "department"));
console.log(groupBy(students, "grade"));

// 4. What if the grouping key is missing?
// You can provide a default group.

const groupKey = item.department || "Unknown";

if (!result[groupKey]) {
    result[groupKey] = [];
}

result[groupKey].push(item);
// 5. Can we use Map instead of an object?

// Yes, especially if the grouping keys are not strings or you want to preserve insertion order.

function groupBy(arr, key) {
    const map = new Map();

    for (const item of arr) {
        const groupKey = item[key];

        if (!map.has(groupKey)) {
            map.set(groupKey, []);
        }

        map.get(groupKey).push(item);
    }

    return map;
}
// Common Mistakes
// ❌ Forgetting to initialize the group
result[dept].push(employee);

// This throws an error if result[dept] doesn't exist.

// Correct:

if (!result[dept]) {
    result[dept] = [];
}

result[dept].push(employee);
// ❌ Using dot notation with a dynamic key

// Wrong:

result.dept = [];

// Correct:

result[dept] = [];
// ❌ Returning inside the loop

// Wrong:

for (const item of arr) {
    return result;
}

// This exits after the first iteration.

// Interview Tip

// The most reusable interview solution is:

function groupBy(arr, key) {
    const result = {};

    for (const item of arr) {
        const groupKey = item[key];

        if (!result[groupKey]) {
            result[groupKey] = [];
        }

        result[groupKey].push(item);
    }

    return result;
}

// This solution:

// ✅ Works for any object key (department, grade, category, etc.)
// ✅ Runs in O(n) time.
// ✅ Is concise, reusable, and commonly accepted in JavaScript interviews.