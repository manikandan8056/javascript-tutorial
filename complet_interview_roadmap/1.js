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